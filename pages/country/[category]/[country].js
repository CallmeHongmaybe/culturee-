import { getNameAndEmoji } from "../../../lib/countries";
import { getPhotoUrls } from "../../../lib/photo_snippets";
import Images from "../../../components/Images";
import Header from "../../../components/Header";
import CatList from "../../../components/CatList";
import Link from "next/link";
import TrendBoard from "../../../components/Trends";
import { useEffect, useRef } from "react";
import ls from "local-storage";
import Footer from "../../../components/Footer";
import Head from "next/head";
import fetch from 'isomorphic-fetch'

const dev = process.env.NODE_ENV !== "production";
const origin = dev ? "http://localhost:3000" : "https://culturee.now.sh";

function usePrevCountry(name) {
    const ref = useRef();
    useEffect(() => {
        ref.current = name;
    });
    return ref.current;
}

// instead of using redis to store data which adds unnecessary complexity and creates unwanted bugs, you should count on useSWR for performance. 

export default function Post({ name, emoji, images, data, genreList, genre }) {
    const prevName = usePrevCountry(name);

    useEffect(() => {
        if (prevName !== name) {
            var localData = JSON.parse(localStorage.getItem("search_history")) || [];
            localData.push({
                country: name,
                images: images,
            });
            localData = localData.filter((item, index, self) => {
                return (
                    index === self.findIndex((instance) => instance.country === item.country)
                );
            });
            localStorage.setItem("search_history", JSON.stringify(localData));
        }
    }, [name]);

    return (
        <>
            <div className="sm:w-full">
                <Head>
                    <title>
                        Trends in {name} {emoji}
                    </title>
                </Head>
                <Header />
                <CatList name={name} emoji={emoji} genreList={genreList} />
                <TrendBoard trends={data} country={name} genre={genre} className="mb-10" />
                <div className="border-solid border-2 border-l-8 border-blue-600 p-5 m-5">
                    ⚠️ Disclaimer: As the viability of this project is still debatable, I
          invented all of the data above and those shall not be trusted.{" "}
                </div>
                <Images images={images} />
                <Link href="/">
                    <a className="text-purple-800 text-xl p-5 text-center">
                        ← Back to home
          </a>
                </Link>
                <Footer />
            </div>
        </>
    );
}

/* u wanna have a CRUD operation for dealing with data 
    - Delete: Delete accidental uploads 
*/

export async function getServerSideProps(ctx) {
    var { category, country } = ctx.query;
    const cResults = getNameAndEmoji(country);
    const imageUrls = getLocalUrls(cResults.name) || (await getPhotoUrls(cResults.name));
    try {
        const {
            data: {items}
        } = await (await fetch(`http://localhost:3000/api/trends/games/${country}`)).json();

        return {
            props: {
                name: country,
                emoji: cResults.emoji,
                images: imageUrls,
                data: JSON.stringify(items),
                genreList: ["movies", 'games'],
                genre: category
            },
        };
    } catch (error) {
        console.log("API got bamboozled for some reason. " + error);
    }
}

function getLocalUrls(country_name) {
    var data = ls.get("search_history") || [];
    var chosenData = data.find((value) => value.country === country_name);

    if (chosenData) return chosenData.images;
    else return null;
}

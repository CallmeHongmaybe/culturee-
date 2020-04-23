import Link from 'next/link'; 

export default function Title({country, emoji}) {
    return (
        <main className="center">
        <div className="country">
        <Link href="/country/[country]" as={`/country/${country}`}>
            <a>{country}</a>
        </Link>
        </div>
        <span className="emoji">{emoji}</span>

            <style jsx>{`
            main {
                width: 90%;
                max-width: 900px;
                margin: 300px auto;
                text-align: center;
            }
            .country {
                font-family: cursive;
                color: #e243de;
                font-size: 24px;
                padding-bottom: 10px;
            }
            .emoji {
                font-family: sans-serif;
                color: #559834;
                font-size: 20px;
            }
            `}</style>
        </main>
    )
}
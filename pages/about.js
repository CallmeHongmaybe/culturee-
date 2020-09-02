import {BigLogo} from '../public/logo'

export default function About() {
    return (
        <div>
            <div className="text-3xl text-center p-3"> Thanks for visiting the site 😍😊 </div>
            <div className="text-xl text-grey-600 ml-10 mr-10 pl-20 pr-20">
                Ever wonder what's currently hot and trending in other countries ? What if you and people in that country share common interest  ?

             I myself have wondered the same thing as you are doing. I would start from reading travellers' blogs to watching YT travel vids. It feels like doing doctoral research work for answering such trivial questions.
             There is no denying that these travellers/bloggers put hard work into pumping out these content. Having them contributing good stuff to the world is a blessing.
             But how they perceive culture in a country is mostly limited to personal experiences, and it also goes without saying that no two experiences are exactly the same. But they can't straight up interview thousands of people about the same question. It would be next to impossible.
             However this website aims to solve this problem by reporting you real time figures of what is currently trending in a particular country
             </div>
             <div className="flex justify-center"><BigLogo/></div>
        </div>
    )
}
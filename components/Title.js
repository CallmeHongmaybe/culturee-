import Link from 'next/link'; 

export default function Title({country, emoji}) {
    return (
        <main className="center">
        <div className="country">
        
        </div>
        <span className="emoji">{emoji}</span>

        <style jsx>{`
            main {
                width: 100%;
                display: flex; 
                text-align: center;
            }

            .country {
                font-family: cursive;
                color: #e243de;
                font-size: 30px;
                padding-bottom: 10px;
                margin-right: 10px; 
            }
            .emoji {
                font-family: sans-serif;
                color: #559834;
                font-size: 50px;
            }
        `}</style>

       
        </main>

    
    )
}
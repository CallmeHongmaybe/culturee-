import Link from 'next/link'

export default function Login() {
    return (
        <div className="font-sans transform translate-y-1/2">
            <h1 className="text-5xl text-black-500 text-center">Authentication coming soon</h1>
                <form className="flex flex-col">
                    <div className="self-center py-2">
                    <label className="text-lg text-black-500 text-center m-4">Username</label>
                    <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal" type="text" placeholder="FlimsyCranberry3"/>
                    </div> 
                    <div className="self-center py-2">
                    <label className="text-lg text-black-500 text-center m-4">Password</label>
                    <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal" type="text" placeholder="At least 8 chars long"/>
                    </div>                 
                </form>
                <Link href="/"><a className="text-purple-800 text-xl p-5 text-center">← Back to home</a></Link>
        </div>

    ); 
}
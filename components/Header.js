import Link from 'next/link'; 
import Search from '../components/Search'; 

export default function Header() {
    return (
          <div className="font-sans relative flex sm:flex-col justify-around items-center bg-blue-500 text-black-200">
              <span className = "title"> Cultural lens logo goes here </span>
              <Search/>
              <div className="relative w-1/3 sm:w-4/5 flex flex-row justify-around" style={{color: "white"}}>
                  <div>
                    <Link href="/"><a>Home</a></Link>
                  </div>
                  <div>
                    <Link href="/forum"><a>Forum</a></Link>
                  </div>
                  <div>
                    <Link href="/about"><a>About</a></Link>
                  </div>
                  <div>
                    <Link href="/login"><a>Login</a></Link>
                  </div>
              </div>
          </div>
    )
}
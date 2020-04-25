import Link from 'next/link'; 
import Search from '../components/Search'; 

export default function Header() {
    return (
          <div className="App-header">
              <span className = "title"> Cultural lens logo goes here </span>
              <Search/>
              <ul className="Navbar">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/forum">Forum</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
              </ul>

    <style jsx>{`
        .App-header {
          position: relative;
          background-color: #eaeef7;
          display: flex;
          justify-content: space-around;
          color: blue;
          align-items: center; 

        }

        .country-panel-header {
          position: relative;
          width: 50%; 
          margin-left: 15%; 
        }

        .Navbar { 
            position: relative;
            width: 30%;
            display: flex;
            list-style-type: none;
            flex-flow: row;
            justify-content: space-evenly;
        }

        .Navbar li {
            font-size: calc(5px + 2vmin); 
            margin-right: 5px;
        }
    `}</style>
          </div>
    )
}
import Link from 'next/link';
import Search from '../components/Search';
import Logo from '../public/logo';
import { useEffect } from 'react';

export default function Header() {

  return (
    <div className="relative flex sm:flex-col justify-around items-center bg-blue-200 text-black-200">
      <Logo />
      <Search />
      <div className="relative w-1/3 sm:w-4/5 flex flex-row justify-around" style={{ color: "blue" }}>
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
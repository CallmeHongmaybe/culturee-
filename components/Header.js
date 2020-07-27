import Link from "next/link";
import Search from "../components/Search";
import Logo from "../public/logo";
import { useState } from "react";
import Router from "next/router";

export default function Header({ nameOfUser }) {
  const [optionsOpened, setOpen] = useState(false);

  return (
    <div className="relative flex sm:flex-col justify-around items-center bg-blue-200 text-black-200">
      <Logo />
      <Search />
      <div
        className="relative w-1/3 sm:w-4/5 flex flex-row justify-around"
        style={{ color: "blue" }}
      >
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/forum">
            <a>Forum</a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div>
          {nameOfUser ? (
            <div onClick={() => setOpen(!optionsOpened)}>
              <a>@{nameOfUser}</a>
              {optionsOpened ? (
                <ul className="border-2 border-solid fixed z-10 bg-white">
                  <li className="p-2" key={"Edit profile"}>
                    <Link href="/user">
                      <a>Edit profile</a>
                    </Link>
                  </li>
                  <li
                    className="p-2"
                    key={"Sign out"}
                    onClick={async () => {
                      await fetch('/api/logout')
                      Router.reload()
                    }}
                  >
                    Sign out
                  </li>
                </ul>
              ) : null}
            </div>
          ) : (
              <Link href="/login">
                <a>Login</a>
              </Link>
            )}
           
        </div>
      </div>
    </div>
  );
}

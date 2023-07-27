import Link from "next/link";
import Search from "../components/Search";
import Logo from "../public/logo";
import { useState } from "react";
import Router from "next/router";

export default function Header({ nameOfUser, mod, pathname, showSearchBar }) {
  const [optionsOpened, setOpen] = useState(false);

  return (
    <div className="relative flex sm:flex-col justify-around items-center text-black-200 bg-white border-b-2 border-blue-200 pl-10 pr-10">
      <Link href="/"><a><Logo /></a></Link>
      {showSearchBar && <Search />}
      <div
        className="relative w-1/4 sm:w-4/5 flex flex-row justify-around"
        style={{ color: "blue" }}
      >
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
        {
          mod ?
            <div>
              <Link href="/moderator">
                <a>Modpage</a>
              </Link>
            </div>
            :
            null
        }
        <div>
          {nameOfUser ? (
            <div onClick={() => setOpen(!optionsOpened)}>
              <a>@{nameOfUser}</a>
              {optionsOpened ? (
                <ul className="border-2 border-solid absolute z-10 bg-white">
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
          ) : (!['/about', '/forum'].includes(pathname)) && (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

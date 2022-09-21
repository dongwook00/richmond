import Link from "next/link";
import { useState } from "react";

export default function Header({ isHome }) {
  const [toggleDarkmode, setToggleDarkmode] = useState(false);

  return (
    <header className="flex justify-between items-center mb-10">
      <Link href="/">
        <a>
          {isHome ? (
            <h1 className="text-3xl font-black">ForeignWorker</h1>
          ) : (
            <h3 className="text-[1.44rem] leading-[2.625rem] font-black text-sky-300">
              ForeignWorker
            </h3>
          )}
        </a>
      </Link>
      <div
        className="text-2xl cursor-pointer"
        onClick={() => setToggleDarkmode(!toggleDarkmode)}
      >
        {toggleDarkmode ? "🌛" : "☀️"}
      </div>
    </header>
  );
}

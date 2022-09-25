import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ isHome }) {
  const [toggleDarkmode, setToggleDarkmode] = useState(false);

  useEffect(() => {
    if (toggleDarkmode === true) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [toggleDarkmode]);

  return (
    <header className="flex justify-between items-center mb-10">
      <Link href="/">
        <a>
          {isHome ? (
            <h1 className="dark:text-white text-3xl font-black">
              ForeignWorker
            </h1>
          ) : (
            <h3 className="text-[1.44rem] leading-[2.625rem] font-black text-sky-300 dark:text-sky-500">
              ForeignWorker
            </h3>
          )}
        </a>
      </Link>
      <div
        className="text-[2.2rem] cursor-pointer"
        onClick={() => setToggleDarkmode(!toggleDarkmode)}
      >
        {toggleDarkmode ? "🌛" : "☀️"}
      </div>
    </header>
  );
}

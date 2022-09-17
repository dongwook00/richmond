import Link from "next/link";

export default function Header({ isHome }) {
  return (
    <header className="flex justify-between items-center mb-10">
      <Link href="/">
        <a>
          {isHome ? (
            <h1 className="text-3xl font-black">Untitled</h1>
          ) : (
            <h3 className="text-[1.44rem] leading-[2.625rem] font-black">
              Untitled
            </h3>
          )}
        </a>
      </Link>
      <div className="text-2xl">☀️🌛</div>
    </header>
  );
}

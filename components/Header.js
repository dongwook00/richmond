import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-10">
      <Link href="/">
        <a>
          <h1 className="text-3xl font-black">Untitled</h1>
        </a>
      </Link>
      <div className="text-2xl">☀️🌛</div>
    </header>
  );
}

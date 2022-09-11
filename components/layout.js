import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl py-11 px-6">
        <header className="mb-8 py-4">
          <Link href="/">
            <h3>Helloteemo</h3>
          </Link>
        </header>
        <main className="container mx-auto flex-1">{children}</main>
        {/* <footer className="mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2022 teemo
        </div>
      </footer> */}
      </div>
    </div>
  );
}

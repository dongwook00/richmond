import Header from "./Header";
import Aside from "./Aside";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl py-11 px-6">
        <Header />
        <Aside />
        <main className="container mx-auto flex-1">{children}</main>
      </div>
    </div>
  );
}

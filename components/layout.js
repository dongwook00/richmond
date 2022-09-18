import { useRouter } from "next/router";
import Header from "./Header";
import Aside from "./Aside";
import Nav from "./Nav";

export default function Layout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl py-11 px-6">
        {isHome ? (
          <>
            <Header isHome={isHome} />
            <Aside isHome={isHome} />
            <main>{children}</main>
          </>
        ) : (
          <>
            <Header isHome={isHome} />
            <main>{children}</main>
            <Aside isHome={isHome} />
            <Nav slug={router.query.slug} />
          </>
        )}
      </div>
    </div>
  );
}

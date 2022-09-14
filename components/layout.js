import { useRouter } from "next/router";
import Header from "./Header";
import Aside from "./Aside";

export default function Layout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl py-11 px-6">
        {isHome ? (
          <>
            <Header />
            <Aside isHome={isHome} />
            <main>{children}</main>
          </>
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Aside isHome={isHome} />
          </>
        )}
      </div>
    </div>
  );
}

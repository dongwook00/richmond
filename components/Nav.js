import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import { useCallback } from "react";

export default function Nav({ slug }) {
  const {
    postContext: { posts },
  } = useAppContext();
  const currentIndex = posts.findIndex((post) => post.slug === slug);

  const RenderNav = useCallback(() => {
    let navEl;

    if (currentIndex === -1) {
      return null;
    }

    if (currentIndex === 0) {
      navEl = (
        <ul className="flex justify-end underline">
          <li>
            <Link href={`/post/${posts[currentIndex + 1].slug}`}>
              <a>{posts[currentIndex + 1].frontmatter.title} →</a>
            </Link>
          </li>
        </ul>
      );
    } else if (currentIndex === posts.length - 1) {
      navEl = (
        <ul className="flex justify-start underline">
          <li>
            <Link href={`/post/${posts[currentIndex - 1].slug}`}>
              <a>← {posts[currentIndex - 1].frontmatter.title}</a>
            </Link>
          </li>
        </ul>
      );
    } else {
      navEl = (
        <ul className="flex flex-col gap-y-4 underline">
          <li className="self-start">
            <Link href={`/post/${posts[currentIndex - 1].slug}`}>
              <a>← {posts[currentIndex - 1].frontmatter.title}</a>
            </Link>
          </li>
          <li className="self-end">
            <Link href={`/post/${posts[currentIndex + 1].slug}`}>
              <a>{posts[currentIndex - 1].frontmatter.title} →</a>
            </Link>
          </li>
        </ul>
      );
    }
    return navEl;
  }, [currentIndex, posts]);

  console.log("nav", currentIndex);
  return (
    <nav>
      <RenderNav />
    </nav>
  );
}

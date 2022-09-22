import Link from "next/link";

export default function Post({ slug, frontmatter }) {
  return (
    <article>
      <header>
        <Link href={`/post/${slug}`}>
          <a>
            <h3 className="text-3xl font-black mt-14 mb-2 text-sky-500 dark:text-sky-400">
              {frontmatter.title}
            </h3>
          </a>
        </Link>
        <small className="dark:text-white">{frontmatter.date}</small>
      </header>
      <p className="dark:text-white">{frontmatter.metaDesc}</p>
    </article>
  );
}

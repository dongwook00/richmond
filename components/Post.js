import Link from "next/link";

export default function Post({ slug, frontmatter }) {
  return (
    <article>
      <header>
        <Link href={`/post/${slug}`}>
          <a>
            <h3 className="text-3xl font-black mt-14 mb-2 text-sky-500">
              {frontmatter.title}
            </h3>
          </a>
        </Link>
        <small>{frontmatter.date}</small>
      </header>
      <p>{frontmatter.metaDesc}</p>
    </article>
  );
}

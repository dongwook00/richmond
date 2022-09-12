import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  console.log("posts", posts);
  return (
    <div className="flex flex-col dark:bg-black">
      {posts.map(({ slug, frontmatter }) => (
        <article key={slug} className="">
          <Link href={`/post/${slug}`}>
            <a>
              <h1 className="p-4">{frontmatter.title}</h1>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
}

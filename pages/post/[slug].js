import fs from "fs";
import md from "markdown-it";
import getPosts from "../../util/getPosts";
import getPost from "../../util/getPost";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  console.log("path", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { frontmatter, content } = getPost(slug);
  const posts = getPosts();

  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <article className="prose mx-auto">
      <header>
        <h1 className="mt-14 text-[2.5rem] font-black">{frontmatter.title}</h1>
        <p className="text-[0.83255rem] leading-7 -mt-[1.4rem] mb-7">
          {frontmatter.date}
        </p>
      </header>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </article>
  );
}

import getPosts from "../util/getPosts";
import Post from "../components/Post";

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      {posts.map(({ slug, frontmatter }) => (
        <Post key={slug} slug={slug} frontmatter={frontmatter} />
      ))}
    </>
  );
}

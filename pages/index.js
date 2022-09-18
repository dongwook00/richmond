import getPosts from "../util/getPosts";
import Post from "../components/Post";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  const { postContext } = useAppContext();

  useEffect(() => {
    postContext.posts && postContext.setPosts(posts);
  }, [postContext, posts]);

  return (
    <>
      {posts.map(({ slug, frontmatter }) => (
        <Post key={slug} slug={slug} frontmatter={frontmatter} />
      ))}
    </>
  );
}

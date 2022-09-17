import fs from "fs";
import matter from "gray-matter";

export default function getPost(slug) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  return {
    frontmatter,
    content,
  };
}

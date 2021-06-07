import { promises as fs } from "fs";
import path from "path";

function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <h3>{post.filename}</h3>
        </li>
      ))}
    </ul>
  );
}
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, "utf8");

    return {
      filename,
      content: fileContents,
    };
  });

  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
}

export default Blog;

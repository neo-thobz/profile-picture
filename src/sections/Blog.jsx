import { useState } from "react";
import BlogPost from "../components/BlogPost";

// Import all markdown files dynamically
function importAll(r) {
  return r.keys().map((fileName) => ({
    fileName,
    content: r(fileName).default,
  }));
}

const posts = importAll(require.context("../posts", false, /\.md$/));

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div>
      <h1>Blog</h1>
      {!selectedPost ? (
        <ul>
          {posts.map((p, i) => (
            <li key={i}>
              <button onClick={() => setSelectedPost(p.content)}>
                {p.fileName.replace(/\.\/|\.md/g, "")}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <button onClick={() => setSelectedPost(null)}>Back</button>
          <BlogPost content={selectedPost} />
        </div>
      )}
    </div>
  );
};

export default Blog;

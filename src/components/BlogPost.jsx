import ReactMarkdown from "react-markdown";

const BlogPost = ({ content }) => {
  return (
    <article className="prose mx-auto p-4">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default BlogPost;

import Blog_card from "./sub-components/blog_card";

const blog_content = [{}, {}, {}];

const Blog = () => {
  return (
    <div className="mt-20 md:mt-40 mb-8 ">
      <h1 className="md:text-5xl text-4xl underline underline-white text-green-500">
        Blog
      </h1>
      <div className="grid md:grid-cols-3 space-x-4">
        {blog_content.map((content) => (
          <Blog_card/>
        ))}
      </div>
    </div>
  );
};

export default Blog;

import Blog_card from "./sub-components/blog_card";
import { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [Posts, SetPosts] = useState([]);
  const [errorMessage, SetErrorMessage] = useState("");

  const FetchPost = async () => {
    const PostFetch = await axios.get("http://localhost:8000/api/v1/posts").catch(error => SetErrorMessage("No Blog Post Available yet!!!!"));

    const PostsData = PostFetch.data;

    SetPosts(PostsData);
  };

  useEffect(() => {
    FetchPost();
  }, []);

  return (
    <div className="mt-20 md:mt-40 mb-8 ">
      <h1 className="md:text-5xl text-4xl underline underline-white text-green-500">
        Blog
      </h1>
      {
        errorMessage && <p className="text-red-500 font-bold bg-red-200 py-10 md:py-20 md:text-md mt-10 text-center">{errorMessage}</p>
      }
      <div className="grid md:grid-cols-3 space-x-4">
        {Posts.map((post) => (
          <Blog_card key={post.id} title={post.title} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

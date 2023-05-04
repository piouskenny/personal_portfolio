import React from "react";
import Nav from "../nav";

import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const PostUrl = `http://localhost:8000/api/v1/posts`;

  const [errorMessage, SetErrorMessage] = useState("");

  const [formValues, setFormValues] = useState({
    title: "",
    imgpath: "",
    content: "",
  });

  const handleform = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formValues);

    axios
      .post("http://localhost:8000/api/v1/posts", formValues)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendPostRequest = async () => {
    axios.post(PostUrl, {
      title: "test",
      imgpath: "test",
      content: "test",
    });
  };

  return (
    <div className="px-60 mt-28">
      <Nav />
      <h1 className="text-center font-bold text-green-500 mt-10">
        CREATE POST
      </h1>

      {errorMessage && (
        <p className="text-red-500 font-bold bg-red-200 py-10 md:py-20 md:text-md mt-10 text-center">
          {errorMessage}
        </p>
      )}
      <form className="mt-20" onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="title"
            id="title"
            value={formValues["title"]}
            onChange={handleform}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
          />
          <label
            for="title"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="imgpath"
            id="imgpath"
            value={formValues["imgpath"]}
            onChange={handleform}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
          />
          <label
            for="imgpath"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image Path
          </label>
        </div>

        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Content
        </label>
        <textarea
          id="message"
          rows="4"
          name="content"
          value={formValues["content"]}
          onChange={handleform}
          class="block p-2.5 w-full text-sm text-gray-900rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>

        <div className="flex items-center content-center w-full h-fit text-center">
          <button
            type="submit"
            class="mt-10 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-40 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

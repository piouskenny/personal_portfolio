import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormValues] = useState({
    name: "",
    email: "",
  });

  const handleFormInput = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData["name"]);

    console.log(formData["email"]);
  };

  return (
    <div className="px-80">
      <h1 className="text-center text-red-500">Test Form</h1>
      <form className="mt-20" onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-6 group flex items-center">
          <input
            type="text"
            name="name"
            id="name"
            value={formData["name"]}
            onChange={handleFormInput}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
          />
          <label
            for="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group flex items-center">
          <input
            type="email"
            name="email"
            id="email"
            value={formData["email"]}
            onChange={handleFormInput}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
          />
          <label
            for="email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            email
          </label>
        </div>

        <button type="submit" className="bg-green-400">
          display Console
        </button>
      </form>
    </div>
  );
};

export default Form;

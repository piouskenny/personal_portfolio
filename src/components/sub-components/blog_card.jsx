const Blog_card = ({title}) => {
  return (
    <div class="max-w-lg mx-auto mt-10 col-span-1">
      <div class="shadow-md borderrounded-lg max-w-sm mb-5">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="p-5 bg-gray-900">
          <a href="#">
            <h5 class="text-white font-bold text-2xl tracking-tight mb-4">
              {title}
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            class="text-white bg-green-500 focus:ring-4  font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href="#"
          >
            Read more
          </a>
        </div>
      </div>

    </div>
  );
};

export default Blog_card;

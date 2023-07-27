import React from "react";
import { Link } from "react-router-dom";
import FeaturedProjects4 from "../../assets/featured-projects/Bookshelf-featuredProjects.png";
import FeaturedProjects1 from "../../assets/featured-projects/Carpentryz-featuredProjects.png";
import FeaturedProjects3 from "../../assets/featured-projects/Mike Reynolds-featuredProjects.png";
import FeaturedProjects2 from "../../assets/featured-projects/SpicyKart-featuredProjects.png";

const FeaturedProjects = () => {
  return (
    <section id="projects">
      <h1 className="text-5xl text-primary text-center font-bold lg:text-left">
        Projects
      </h1>
      <div className="my-10">
        <div className="">
          {/* Bookshelf */}
          <div class="flex flex-col lg:flex-row bg-secondary h-[380px] items-start lg:items-center">
            <figure className="w-full lg:w-[60%] h-full">
              <img
                src={FeaturedProjects4}
                className="w-full h-full object-cover"
                alt="Album"
              />
            </figure>
            <div class="w-full lg:w-[40%] text-left lg:text-right mt-6 lg:mt-0">
              <h1 className="text-md font-bold text-base-100">
                Featured Project
              </h1>
              <h1 class="text-primary text-5xl font-bold">Bookshelf</h1>
              <p className="py-3 text-info">
                Bookshelf is a book catalog web application that allows users to
                manage and organize information about books.
              </p>
              <p className="text-info text-sm font-bold">
                <small>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    React
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Express
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Tailwind CSS
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Redux Toolkit
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Moongoose
                  </span>
                </small>
              </p>
              <div className="mt-5">
                <a
                  href="https://github.com/thowhidulislam/book-catalog-frontend"
                  target="_blank"
                  rel="noreferrer"
                  className=" inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <title>Github</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <Link
                  to="/bookshelfDetails"
                  className="text-end inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold"
                  title="More Details"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-info"
                  >
                    <circle cx="12" cy="12" r="10">
                      <title>More Details</title>
                    </circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </Link>
                <a
                  href="https://bookshelf-frontend-thowhid.netlify.app/"
                  className="inline-block my-1 text-info focus:bg-transparent hover:text-primary font-bold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                  >
                    <title>Live website link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* carpentryz */}
          <div class="flex flex-col lg:flex-row-reverse bg-secondary h-[380px] items-start lg:items-center my-40 lg:my-24">
            <figure className="w-full lg:w-[60%] h-full">
              <img
                src={FeaturedProjects1}
                className="w-full h-full object-cover"
                alt="Album"
              />
            </figure>
            <div class="w-full lg:w-[40%] mt-6 lg:mt-0 text-left">
              <h1 className="text-md font-bold text-base-100">
                Featured Project
              </h1>
              <h1 class="text-primary text-5xl font-bold">Carpentryz</h1>
              <p className="py-3 text-info">
                Carpentryz is a website built focusing on product manufacturers.
                Both buyers and sellers can use this website.
              </p>
              <p className="text-info text-sm font-bold">
                <small>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    React
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Express
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Tailwind
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    React Hook Form
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    React Firebase Hooks
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    MongoDB
                  </span>
                </small>
              </p>

              {/* Github and Details link */}

              <div className="mt-5">
                <a
                  href="https://github.com/thowhidulislam/carpentryz-client-side"
                  target="_blank"
                  rel="noreferrer"
                  className=" inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <title>Github</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <Link
                  to="/carpentryzDetails"
                  className="inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold"
                  title="More Details"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-info"
                  >
                    <circle cx="12" cy="12" r="10">
                      <title>More Details</title>
                    </circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </Link>
                <a
                  href="https://carpentryz.netlify.app/"
                  className="inline-block my-1 text-info focus:bg-transparent hover:text-primary font-bold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                  >
                    <title>Live website link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* SpiceKart */}
          <div class="flex flex-col lg:flex-row bg-secondary h-[380px] items-start lg:items-center my-40 lg:my-24">
            <figure className="w-full lg:w-[60%] h-full">
              <img
                src={FeaturedProjects2}
                className="w-full h-full object-cover"
                alt="Album"
              />
            </figure>
            <div class="w-full lg:w-[40%] mt-6 lg:mt-0 text-left lg:text-right">
              <h1 className="text-md font-bold text-base-100">
                Featured Project
              </h1>
              <h1 class="text-primary text-5xl font-bold">SpiceKart</h1>
              <p className="py-3 text-info">
                SpiceKart is a warehouse management website.
              </p>
              <p className="text-info text-sm font-bold">
                <small>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    React
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Express
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Bootstrap
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    React Hook Form
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    React Firebase Hooks
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Recharts
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Axios
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Heroku
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    MongoDB
                  </span>
                </small>
              </p>
              <div className="mt-5">
                <a
                  href="https://github.com/thowhidulislam/spiceKart-client-side"
                  target="_blank"
                  rel="noreferrer"
                  className=" inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <title>Github</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <Link
                  to="/spiceKartDetails"
                  className="text-end inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold"
                  title="More Details"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-info"
                  >
                    <circle cx="12" cy="12" r="10">
                      <title>More Details</title>
                    </circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </Link>
                <a
                  href="https://spicekart.netlify.app/"
                  className="inline-block my-1 text-info focus:bg-transparent hover:text-primary font-bold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                  >
                    <title>Live website link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Reynolds */}
          <div class="flex flex-col lg:flex-row-reverse bg-secondary h-[380px] items-start lg:items-center my-40 lg:my-24">
            <figure className="w-full lg:w-[60%] h-full">
              <img
                src={FeaturedProjects3}
                className="w-full h-full object-cover"
                alt="Album"
              />
            </figure>
            <div class="w-full lg:w-[40%] text-left mt-6 lg:mt-0">
              <h1 className="text-md font-bold text-base-100">
                Featured Project
              </h1>
              <h1 class="text-primary text-5xl font-bold">Reynolds</h1>
              <p className="py-3 text-info">
                It is an independent service provider website.
              </p>
              <p className="text-info text-sm font-bold">
                <small>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    React
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Express
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Bootstrap
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    React Hook Form
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    React Firebase Hooks
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Recharts
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Axios
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    Heroku
                  </span>
                  <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
                    MongoDB
                  </span>
                </small>
              </p>
              <div className="mt-5">
                <a
                  href="https://github.com/thowhidulislam/reynolds-trainer"
                  target="_blank"
                  rel="noreferrer"
                  className=" inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <title>Github</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <Link
                  to="/reynoldsDetails"
                  className="text-end inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold"
                  title="More Details"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-info"
                  >
                    <circle cx="12" cy="12" r="10">
                      <title>More Details</title>
                    </circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </Link>
                <a
                  href="https://reynolds-gym-thowhidulislam.netlify.app/"
                  className="inline-block my-1 text-info focus:bg-transparent hover:text-primary font-bold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                  >
                    <title>Live website link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

import React from "react";
import carpentryz2 from "../../assets/featured-projects/Carpentryz-dashboard-admin.png";
import carpentryz1 from "../../assets/featured-projects/Carpentryz-login-page.png";
import carpentryz3 from "../../assets/featured-projects/carpentryz-add-review.png";
import carpentryz4 from "../../assets/featured-projects/carpentryz-make-admin.png";
import carpentryz5 from "../../assets/featured-projects/carpentryz-manage-products.png";

const CarpentryzDetails = () => {
  return (
    <section className="bg-secondary text-white mx-4 px-4 lg:mx-20 lg:px-10 pb-14">
      <h1 className="text-5xl font-bold text-primary text-center">
        Carpentryz
      </h1>
      <div className="carpentryz-code-link flex lg:flex-row justify-center">
        <div className="text-center my-10 mr-5">
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
              <title>Github Client Side Code</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <p className="text-info">Client side</p>
        </div>
        <div className="text-center my-10 mr-5">
          <a
            href="https://github.com/thowhidulislam/carpentryz-server-side"
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
              <title>Github Server Side Code</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <p className="text-info">Server side</p>
        </div>
        <div className="text-center my-10">
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
          <p className="text-info">Live Website Link</p>
        </div>
      </div>
      <div className="text-info">
        <p className="text-info my-5 lg:my-12">
          Carpentryz is a website built focusing on product manufacturers. Both
          buyers and sellers can use this website.
        </p>
        <ul className="my-8">
          <li>• Implemented Dashboard for both user and admin.</li>
          <li>• User can give a review.</li>
          <li>• User can make payment by card. </li>
          <li>• Admin can change the status of the paid order.</li>
          <li>• Admin can add and delete product in the dashboard.</li>
          <li>• Admin can change the status of paid and pending order.</li>
        </ul>
        <div>
          <h1 className="text-primary text-5xl text-bold my-9">
            Images of Features
          </h1>
          <img src={carpentryz2} className="my-10" alt="" />
          <img src={carpentryz3} className="my-10" alt="" />
          <img src={carpentryz1} className="my-10" alt="" />
          <img src={carpentryz4} className="my-10" alt="" />
          <img src={carpentryz5} className="my-10" alt="" />
        </div>

        {/* Technologies used */}

        <p className="text-accent text-sm font-bold">
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
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              Toastify
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              Stripe
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              React Query
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              React Router
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              Axios
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              Heroku
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              HTML
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              CSS
            </span>
          </small>
        </p>
      </div>
    </section>
  );
};

export default CarpentryzDetails;

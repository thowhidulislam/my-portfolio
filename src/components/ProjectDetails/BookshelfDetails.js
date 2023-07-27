import React from "react";
import bshelf2 from "../../assets/featured-projects/bshelf1.png";
import bshelf3 from "../../assets/featured-projects/bshelf2.png";
import bshelf1 from "../../assets/featured-projects/bshelf3.png";

const BookshelfDetails = () => {
  return (
    <section className="bg-secondary text-white mx-4 px-4 lg:mx-20 lg:px-10 pb-14">
      <h1 className="text-5xl font-bold text-primary text-center">Bookshelf</h1>
      <div className="spiceKart-code-link flex lg:flex-row justify-center">
        <div className="text-center my-10 mr-5">
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
              <title>Github Client Side Code</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <p className="text-info">Client side</p>
        </div>
        <div className="text-center my-10 mr-5">
          <a
            href="https://github.com/thowhidulislam/book-catalog-server"
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
          <p className="text-info">Live Website Link</p>
        </div>
      </div>
      <div className="text-info">
        <p className="text-info my-5 lg:my-12">
          Bookshelf is a book catalog web application that allows users to
          manage and organize information about books.
        </p>
        <ul className="my-8">
          <li>
            • The landing page have a header, a list of the top 10 recently
            added books and a footer. There are some open routes such as "All
            Books", "Sign In", and "Sign Up".
          </li>
          <li>
            • Users can create new accounts with a unique email and password.
          </li>
          <li>
            • Users can log in using their credentials. After a successful
            login, the login button would be replaced with a logout button in
            the navbar.
          </li>
          <li>
            • A list of books is fetched from an API using RTK Query and
            displayed the list of books.
          </li>
          <li>
            • Implemented a search bar that allows users to search for books
            based on criteria such as title, author, or genre.
          </li>
          <li>
            • Filtering options are provided to narrow down the book list based
            on genre & publication year.
          </li>
          <li>
            • Authenticated users can add a new book by filling out a form.
            After submitting the form, the user will be notified of the success
            or failure of the operation with a toast or other notification.
          </li>
          <li>
            • When a user clicks on a book from the list, displays a detailed
            view of the book.
          </li>
          <li>
            • When a user clicks on the Edit Book button, they would be
            redirected to the edit-book page. When a user clicks on the Delete
            Book button, they would see a confirmation dialogue to confirm that
            they want to delete the book.
          </li>
          <li>
            • Authenticated users would be able to leave reviews for books.
            Provided a submit box for submitting a review.
          </li>
          <li>
            • Authenticate users can edit a book using a form. The form would
            have current data when editing. After submitting the form, the user
            would be notified using a toast. If there is any issue, the user
            will also be notified.
          </li>
          <li>
            • Implemented a wishlist feature where users can add books they want
            to read in the future.
          </li>
          <li>
            • Users can also create a list of books they are currently reading
            or plan to read soon. Provided options to mark books as finished
            reading.
          </li>
        </ul>
        <div>
          <h1 className="text-primary text-5xl text-bold my-9">
            Images of Features
          </h1>
          <img src={bshelf1} className="my-10" alt="" />
          <img src={bshelf2} className="my-10" alt="" />
          <img src={bshelf3} className="my-10" alt="" />
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
              Tailwind CSS
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              Redux Toolkit
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              Moongoose
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              MongoDB
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              Toastify
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              React Router
            </span>
            <span className="mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block">
              Vercel
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

export default BookshelfDetails;

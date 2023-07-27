import React from "react";
import myImage from "../../assets/my-image.png";

const AboutMe = () => {
  return (
    <section>
      <h1
        id="aboutMe"
        className="text-5xl text-primary font-bold text-center lg:text-left input-disa"
      >
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-[60%]">
          <p className="text-xl text-info my-6 text-justify">
            I'm Thowhidul Islam Molla, a front-end web developer with one year
            of experience, specializing in working with various technologies,
            including React. Highly interested in the MERN stack.
          </p>
          <p className="text-xl text-info my-2 text-justify">
            I've expertise in React, Next, Typescript, JavaScript, Redux,
            Tailwind, Bootstrap, React Bootstrap, HTML, and CSS. In addition, I
            am comfortable writing code in Express JS,Mongoose, Mongoose,
            MongoDB, React Router, React Hook Form, and Firebase Authentication.
            Apart from these technologies, I am also familiar with node,
            postman, and stripe.
          </p>
        </div>
        <img class="mask mask-hexagon w-full lg:w-[40%]" src={myImage} alt="" />
      </div>
    </section>
  );
};

export default AboutMe;

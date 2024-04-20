import React from "react";
import "./socialLinks.css";
import { GitHub, LinkedIn, blog, email, resume } from "../assets";

const StickyIcon = () => {
  return (
    <div className="sticky-icon">
      <a
        target="_blank"
        href="https://tinyurl.com/rhtydv"
        className="Resume"
        rel="noreferrer"
      >
        <img alt="resume" src={resume} />
        Resume
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/rohityadavv"
        className="Linkedin"
        rel="noreferrer"
      >
        <img alt="linkedin" src={LinkedIn} width={50} height={50} />
        Linkedin
      </a>

      <a
        target="_blank"
        href="https://github.com/rohit-yadavv/"
        className="GitHub"
        rel="noreferrer"
      >
        <img alt="GitHub" src={GitHub} width={50} height={50} />
        GitHub
      </a>

      <a
        target="_blank"
        href="https://questify.site"
        className="Blogs"
        rel="noreferrer"
      >
        <img alt="blog" src={blog} width={50} height={50} /> Blogs
      </a>

      <a
        target="_blank"
        href="mailto:rohitydv056@gmail.com"
        className="Email"
        rel="noreferrer"
      >
        <img alt="email" src={email} />
        Email
      </a>
    </div>
  );
};

export default StickyIcon;

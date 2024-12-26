import React from "react";
import "./socialLinks.css";

const StickyIcon = () => {
  return (
    <div className="sticky-icon">
      <a
        target="_blank"
        href="mailto:rohitydv056@gmail.com"
        className="Blogs"
        rel="noreferrer"
      >
        <i className="fas fa-envelope"></i> Email
      </a>

      <a
        target="_blank"
        href="https://github.com/rohit-yadavv/"
        className="GitHub"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i> GitHub
      </a>
      <a
        target="_blank"
        href="https://questfy.vercel.app"
        className="Blogs"
        rel="noreferrer"
      >
        <i className="fas fa-blog"></i> Blogs
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/rohityadavv"
        className="Linkedin"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i> Linkedin
      </a>
    </div>
  );
};

export default StickyIcon;

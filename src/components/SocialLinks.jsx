import React from "react";
import "./socialLinks.css"; // External CSS file for additional styling if needed

const StickyIcon = () => {
  return (
    <div className="sticky-icon">
      <a href="https://tinyurl.com/rhtydv" className="Resume">
        <i className="fas fa-download"></i> Resume
      </a>
      <a href="https://questify.site" className="Blogs">
        <i className="fas fa-blog"></i> Blogs
      </a>
      <a href="https://github.com/rohit-yadavv/" className="GitHub">
        <i className="fab fa-github"></i> GitHub
      </a>
      <a href="https://www.linkedin.com/in/rohityadavv" className="Linkedin">
        <i className="fab fa-linkedin"></i> Linkedin
      </a>
    </div>
  );
};

export default StickyIcon;

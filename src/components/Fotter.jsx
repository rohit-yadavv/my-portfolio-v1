import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to toggle visibility of the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <footer className="w-full border-t-2 py-3 border-gray-900 relative">
      {isVisible && (
        <div
          className="group flex justify-center items-center rounded-full fixed bottom-12 right-3"
          onClick={scrollToTop}
        >
          <div className="shadow-md flex items-center bg-yellow-800 p-3 rounded-full cursor-pointer duration-300">
            <i className="fas fa-arrow-up" />
          </div>
        </div>
      )}
      <p className="text-center">Created with ❤️ by Rohit Yadav</p>
    </footer>
  );
};

export default Footer;

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
    if (window.pageYOffset > 300) {
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
        <button
          onClick={scrollToTop}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full fixed bottom-10 right-10 transition duration-300 hidden md:block"
        >
          <i className="fas fa-arrow-up mr-2"></i>
          Back to Top
        </button>
      )}
      {/* Show just arrow icon on mobile */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full fixed bottom-10 right-10 transition duration-300 block md:hidden"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
      <div className="flex w-full flex-wrap items-center justify-center">
        <p>Created with ❤️ by Rohit Yadav</p>
      </div>
    </footer>
  );
};

export default Footer;

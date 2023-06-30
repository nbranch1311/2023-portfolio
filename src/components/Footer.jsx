import React from "react";
const Footer = () => {
  return (
    <footer className="p-6 bg-blue-600 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

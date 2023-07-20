import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-blue-600 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Nicholas Branch</p>
    </footer>
  );
};

export default Footer;

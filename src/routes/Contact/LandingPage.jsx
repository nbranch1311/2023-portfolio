import React from 'react';
import { Link } from 'react-router-dom';
// import contactImage from 'path/to/cool-contact-image.png';

const ContactLanding = () => (
  <div className="flex flex-grow">
    <div className="max-w-3xl p-6 bg-white rounded-lg shadow">
      <h1 className="text-4xl font-bold mb-4">Keep A List of Contacts!</h1>/ */
      {/** Still deciding how I want this page to look */
      /* <img
        src={contactImage}
        alt="Contact Image"
        className="w-64 h-auto mb-6"
      /> */}
      <p className="text-lg text-gray-700 my-3">
        {`Welcome to my Contacts Keeper. 
        This is a simple contact management application using React Router and React Hook Form. 
        Don't hesitate to add a new contact or edit an existing one. 
        I don't have access to your contacts since 
        I am using local storage to save the data so your secret crush is fine here.`}
      </p>
      <div className="flex justify-center my-3">
        <Link
          to="/about"
          className="bg-teal-500 text-white py-3 px-6 rounded-full text-lg font-bold transition duration-300 hover:bg-teal-600"
        >
          Get In Touch
        </Link>
      </div>
      <p className="text-lg text-gray-700 mb-6">
        {`Feel free to reach out through the contact form below. I'll make sure to
        get back to you as soon as possible. Alternatively, you can connect with
        me on social media or send me an email. I love to engage with
        other developers and collaborate on exciting projects.`}
      </p>
    </div>
  </div>
);

export default ContactLanding;

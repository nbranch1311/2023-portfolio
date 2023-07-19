import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Outlet, useLoaderData } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Button from 'components/Button';
import { createContact, getContacts } from '../helper/contacts';
import { getContact } from '../helper/contacts';

export const action = async () => {
  const contact = await createContact();
  return { contact };
};

export const loader = async () => {
  console.log('Loading contacts...');
  const contacts = await getContacts();
  return { contacts };
};

export const singleContactLoader = async ({ params }) => {
  const contact = await getContact(params.contactId);
  return { contact };
};

// const contact = {
//   first: 'Nicholas',
//   last: 'Branch',
//   avatar: 'https://placekitten.com/g/200/200',
//   linkedin: 'nicholasbranch',
//   notes: 'Some notes',
//   favorite: true,
// };

const Contact = () => {
  const { contacts } = useLoaderData();

  return (
    <div className="flex flex-grow">
      <Sidebar contacts={contacts} />
      <div className="flex flex-col mt-10 ml-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

const Favorite = ({ contact }) => {
  const [favorite, setFavorite] = useState(contact?.favorite);

  const toggleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <Form method="post">
      <button
        className={`btn-favorite ${
          favorite ? 'text-yellow-400' : 'text-gray-400'
        }`}
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        onClick={toggleFavorite}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    linkedin: PropTypes.string,
    notes: PropTypes.string,
    favorite: PropTypes.bool.isRequired,
  }),
};

Favorite.propTypes = {
  contact: PropTypes.shape({
    favorite: PropTypes.bool,
  }),
};

export { Contact as default, Favorite };

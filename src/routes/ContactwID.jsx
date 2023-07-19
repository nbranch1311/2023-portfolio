import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, useLoaderData } from 'react-router-dom';
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

const ContactwID = () => {
  const { contact } = useLoaderData();

  return (
    <div className="flex flex-grow">
      <div className="flex flex-col mt-10 ml-10 w-full">
        <div className="flex">
          <div
            className={`w-[10rem] h-[10rem] rounded-md mr-4 ${
              contact?.avatar ? '' : 'bg-gray-200'
            }`}
          >
            {contact?.avatar ? (
              <img
                className="w-full h-full object-cover object-center rounded-md"
                src={contact?.avatar}
                alt="Contact Avatar"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-light-gray-400">No Avatar</span>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex mb-4">
              <h1 className="text-2xl font-bold me-3">
                {contact?.first || contact?.last ? (
                  <>
                    {contact?.first} {contact?.last}
                  </>
                ) : (
                  <i>No Name</i>
                )}
              </h1>
              <Favorite contact={contact} />
            </div>

            {contact?.linkedin && (
              <p>
                <a
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.linkedin.com/in/${contact?.linkedin}`}
                >
                  @{contact?.linkedin}
                </a>
              </p>
            )}

            {contact?.notes && <p className="mb-4">{contact?.notes}</p>}

            <div className="flex space-x-2">
              <Form action="edit">
                <Button type="submit">Edit</Button>
              </Form>
              <Form
                method="post"
                action="destroy"
                onSubmit={(event) => {
                  if (
                    !window.confirm(
                      'Please confirm you want to delete this record.',
                    )
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <Button variant="danger" type="submit">
                  Delete
                </Button>
              </Form>
            </div>
          </div>
        </div>
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

ContactwID.propTypes = {
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

export { ContactwID as default, Favorite };

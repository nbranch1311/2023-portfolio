import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, useLoaderData } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Button from "components/Button";
import { getContacts, createContact } from "../contacts";
import { getContact } from "../contacts";

export const action = async () => {
  const contact = await createContact();
  return { contact };
};

export const loader = async () => {
  console.log("Loading contacts...");
  const contacts = await getContacts();
  return { contacts };
};

export const contactLoader = async ({ params }) => {
  const contact = await getContact(params.contactId);
  return { contact };
};

const contact = {
  first: "Nicholas",
  last: "Branch",
  avatar: "https://placekitten.com/g/200/200",
  linkedin: "nicholasbranch",
  notes: "Some notes",
  favorite: true,
};

const Contact = () => {
  const { contact } = useLoaderData();
  return (
    <div className="flex flex-grow">
      <Sidebar />
      <div className="flex flex-col items-center mt-10 ml-10 w-full">
        <div>
          <img
            className="w-32 h-32 rounded-full mb-4"
            src={contact?.avatar || null}
            alt="Contact Avatar"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">
            {contact?.first || contact?.last ? (
              <>
                {contact?.first} {contact?.last}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
            <Favorite contact={contact} />
          </h1>

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

          <div className="flex justify-center space-x-2">
            <Form action="edit">
              <Button type="submit">Edit</Button>
            </Form>
            <Form
              method="post"
              action="destroy"
              onSubmit={(event) => {
                if (
                  !window.confirm(
                    "Please confirm you want to delete this record."
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
          favorite ? "text-yellow-400" : "text-gray-400"
        }`}
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        onClick={toggleFavorite}
      >
        {favorite ? "★" : "☆"}
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
  }).isRequired,
};

Favorite.propTypes = {
  contact: PropTypes.shape({
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
};

export { Contact as default, Favorite };

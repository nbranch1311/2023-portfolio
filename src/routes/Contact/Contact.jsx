import React from 'react';
import PropTypes from 'prop-types';
import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import { createContact, getContacts } from '../../helper/contacts';
import { getContact } from '../../helper/contacts';

const contactAction = async () => {
  const contact = await createContact();
  return redirect(`/contact/${contact.id}/edit`);
};

const contactLoader = async () => {
  const contacts = await getContacts();
  return { contacts };
};

const singleContactLoader = async ({ params }) => {
  const contact = await getContact(params.contactId);
  return { contact };
};

const loadingStyle = 'opacity-25 transition-opacity duration-200 delay-200';

const Contact = () => {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className="flex flex-grow">
      <Sidebar contacts={contacts} />
      <div
        className={`flex flex-col mt-10 ml-10 w-full ${
          navigation.state === 'loading' ? loadingStyle : ''
        }`}
      >
        <Outlet />
      </div>
    </div>
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

export {
  Contact as default,
  singleContactLoader,
  contactLoader,
  contactAction,
};

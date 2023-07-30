import React from 'react';
import PropTypes from 'prop-types';
import { Form, NavLink } from 'react-router-dom';
import { Button } from '../Button';

export const Sidebar = ({ contacts }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex-none">
      <div className="flex flex-col p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">React Sidebar</h1>
        </div>
        <div className="flex-grow overflow-auto">
          <div className="flex gap-4">
            <form id="search-form" role="search" className="mb-4">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                className="w-full p-2 bg-gray-700 rounded text-white"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <Form method="post">
              <Button type="submit">New</Button>
            </Form>
          </div>
          {contacts?.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id} className="mb-2">
                  <NavLink
                    to={`/contact/${contact.id}`}
                    className={({ isActive, isPending }) => {
                      const activeStyling = isActive
                        ? 'bg-teal-500'
                        : isPending
                        ? 'bg-indigo-600'
                        : '';
                      return `${activeStyling} text-white py-1 px-2 rounded transition-colors duration-400 hover:bg-gray-700`;
                    }}
                  >
                    {contact?.first || contact?.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{' '}
                    {contact?.favorite && (
                      <span className="text-yellow-400">★</span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      first: PropTypes.string,
      last: PropTypes.string,
      avatar: PropTypes.string,
      twitter: PropTypes.string,
      notes: PropTypes.string,
      favorite: PropTypes.bool,
    }),
  ),
};

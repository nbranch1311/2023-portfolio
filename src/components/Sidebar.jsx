import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import { getContacts, createContact } from "../routes/Contact";
import Button from "./Button";

const action = async () => {
  const contact = await createContact();
  return { contact };
};

const loader = async () => {
  const contacts = (await getContacts())?.result ?? [];
  return { contacts };
};

const Sidebar = () => {
  const { contacts } = useLoaderData();

  return (
    <aside className="w-64 bg-gray-800 text-white flex-none">
      <div className="flex flex-col p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">React Sidebar</h1>
        </div>
        <div className="flex-grow overflow-auto">
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
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id} className="mb-2">
                  <Link to={`contact/${contact.id}`} className="text-white">
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && (
                      <span className="text-yellow-400">★</span>
                    )}
                  </Link>
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

export { Sidebar as default, loader, action };

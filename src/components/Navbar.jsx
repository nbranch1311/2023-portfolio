import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../routes/Contact";

const loader = async () => {
  const contacts = (await getContacts())?.result ?? [];
  return { contacts };
};

const Navbar = () => {
  const { contacts } = useLoaderData();
  return (
    <nav className="p-6 bg-blue-600 text-white w-full">
      <ul className="flex space-x-4">
        <li>
          <Link to="/intro">Intro</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        {contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Link to={`contact/${contact.id}`}>
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                  {contact.favorite && <span>★</span>}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar as default, loader };

import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-white p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">React Sidebar</h1>
      </div>
      <div>
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
        <form method="post">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;

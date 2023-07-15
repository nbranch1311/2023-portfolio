import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-grow">
        <div className="flex flex-grow">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

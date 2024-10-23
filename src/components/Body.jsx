import React from 'react'
import NavBar from '../ui-components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../ui-components/Footer';

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body;

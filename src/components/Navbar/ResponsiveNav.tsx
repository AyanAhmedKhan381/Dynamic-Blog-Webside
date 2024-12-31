"use client"
import React, { useState } from 'react';
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavHandler = () => setShowNav((prev) => !prev);

  return (
    <div>
      <Navbar toggleNav={toggleNavHandler} />
      <MobileNav showNav={showNav} closeNav={() => setShowNav(false)} />
    </div>
  );
};

export default ResponsiveNav;

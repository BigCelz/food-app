'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavbarHandler = () => setShowNav(true);
  const closeNavbarHandler = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={openNavbarHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavbarHandler} />
    </div>
  )
}

export default ResponsiveNav

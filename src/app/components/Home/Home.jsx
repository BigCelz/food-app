"use client";

import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Resturant from './Resturant/Resturant';
import Category from './Category/Category';
import HowItWork from './HowItWork/HowItWork';
import About from './About/About';
import Feature from './Feature/Feature';
import ClientReview from './ClientReview/ClientReview';
import MobileApp from './MobileApp/MobileApp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
        anchorPlacement: 'top-bottom',
        offset: 100,
      });
    };
    initAOS();
  }, []);

  return (
    <div>
      <Hero />
      <Resturant />
      <Category />
      <HowItWork />
      <About />
      <Feature />
      <ClientReview />
      <MobileApp />
    </div>
  );
};

export default Home;





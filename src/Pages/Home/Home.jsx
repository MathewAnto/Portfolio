import React from 'react';
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar';
import Intro from '../../components/Intro/Intro';
import Resume from '../../components/Resume/Resume';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import TechSkills from '../../components/Tech Skills/TechSkills';
import SayHello from '../../components/Say Hello/SayHello';

export const Home = () => {

  return (
    <div className='bg-light'>
        <HomeNavbar/>
        <Intro />
        <About />
        <TechSkills />
        <Resume />
        <SayHello />
        <Footer />
    </div>
  );
};

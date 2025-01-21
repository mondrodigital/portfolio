import React from 'react';
import Header from './Header';
import SuperPowers from './SuperPowers';
import PhotoGrid from './PhotoGrid';
import Featured from './Featured';

const About = () => {
  return (
    <div className="bg-white">
      <Header />
      <SuperPowers />
      <PhotoGrid />
      <Featured />
    </div>
  );
};

export default About;
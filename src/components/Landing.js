import React from 'react';
import img1 from './images/img2.jpg';

const Landing = () => {
  return (
    <section className="landing">
      <img src={img1} ></img>
      <p>Hello my name is José</p>
      <h1>A front-end developer</h1>
      <h2>especilised in React</h2>
    </section>
  );
};

export default Landing;

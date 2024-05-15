import React from 'react';
import background from './background.jpg'
import logo from './ecell_logo.png'
import { useState,useEffect } from 'react';
import './App.css';

const App=()=>{
  const [opacity,setOpacity]=useState(0);
  useEffect(()=>{
    const handleScroll=()=>{
      const scrollPosition=window.scrollY;
      const opacityValue=scrollPosition/1000;
      setOpacity(opacityValue);
    };
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);
  return (
    <div className='App'>
      <img className='background' alt='IITH-hostel-background' src={background} />
      <img className='logo' alt='E-Cell Logo' src={logo} />
      <h1 className='heading-1'>ENTREPRENEURSHIP CELL</h1>
      <h1 className='heading-2'>IIT HYDERABAD</h1>
      <p className='heading-3'>THINK | BUILD | INSPIRE</p>
      <div className='background-div'> </div>
      <div className='container' style={ { opacity } }>
        <h2 className='title'>ABOUT US</h2>
        <p className='text-content'>We at IIT Hyderabad's Entrepreneurship Cell believe in passion, hard effort, and an unquenchable drive for achievement. It is a place that is the confluence of a billion sparks of ideas, a place where the fire of passion mingles with the cold calculation of the brain, and a place where dreams come true. We are people who love nothing more than the thrill of coming up with ideas, working them out into businesses and experiencing the pleasure of watching it all come to fruition.</p>
        </div>
    </div>
  );
}

export default App;

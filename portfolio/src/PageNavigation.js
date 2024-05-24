import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './App';
import About from './App';
import Contact from './HireMe';
import HireMe from './HireMe';

const PageNavigation = () => {
  return (
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/" Component={About}/>
        <Route exact path="/" Component={Contact}/>

      </Routes>
  );
};

export default PageNavigation;
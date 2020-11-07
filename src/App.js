import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Section from './components/Section/Section';

export default function App() {
  return (
    <Router>
     <NavBar />
     <Banner />
     <Section />
    </Router>
  )
}

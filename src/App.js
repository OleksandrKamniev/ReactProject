import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Nav from './components/Nav';




const App = () => {
  return (
    <div className='app-writer'>
      <Header />
      <Nav />
      <Profile />

    </div >

  );
}



export default App;

// Import data
import React from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import Help from './components/Help';
import Directory from './components/Directory';


// Import components
import './App.css';

function App(){
  return (
    <div>
      <header>
        <h1>craigslist</h1>
        <SearchBar />
      </header>
      <Directory />
      <div className="body-container">
        <SideBar />
        <Gallery className='App'/>
      </div>
    </div>
  );
}

export default App;

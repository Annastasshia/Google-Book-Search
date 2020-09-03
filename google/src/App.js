import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Google Book Search | A MERN Web Application
        </h1>
        <p>Annastasshia Ames</p>
      </header>
      <body>
        <form>
          <input type="text" placeholder="Search for Books..." autoComplete="off"/>
        <button>Search</button>
        </form>
      </body>
    </div>
  );
}

export default App;

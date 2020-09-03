import React, {useState}from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [book,setBook] = useState("");
  const [result,setResult] = useState([]);
  const [apiKey,setApiKey] = useState("");

  function handleChange(event){
    console.log(this)
    const book = event.target.value;
    setBook(book);
  };

  function handleSubmit(event){
    console.log("form submitted")

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Google Book Search | A MERN Web Application
        </h1>
        <p>Annastasshia Ames</p>
      </header>
      <div class="body">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange= {handleChange} placeholder="Search for Books..." autoComplete="off"/>
        <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;

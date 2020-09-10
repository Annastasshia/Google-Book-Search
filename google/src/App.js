import React, {useState}from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  
  const [book,setBook] = useState("");
  const [result,setResult] = useState([]);
  const [apiKey,setApiKey] = useState("AIzaSyCot_cw0iLNMHYqJmw-ZrYRPGi_1ey1uXg");

  function handleChange(event){
    console.log(this)
    const book = event.target.value;
    setBook(book);
  };

  function handleSubmit(event){
    event.preventDefault();

    console.log("form submitted")

    axios.get("https://www.googleapis.com/books/v1/volumes?q="+ book +"&key=" + apiKey)
    .then(data => {
      console.log(data.data.items);
      setResult(data.data.items);
    })
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
        <card>
        {result.map(book => (
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
        ))}
        </card>
      </div>
    </div>
  );
}

export default App;

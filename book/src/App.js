import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');

  const handleChange = e => {
    setWord(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setWords([...words, word]);
    setWord('');
  }

  return (
    <div className="">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="word">Word/Expression: </label>
            <input id="word" type="text" value={word} onChange={handleChange} />
          </div>
          <button type="submit">Save</button>
        </form>
        <ul>
          {words.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
    </div>
  );
};

export default App;

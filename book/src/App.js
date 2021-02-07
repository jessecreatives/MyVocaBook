import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState({
    word: '',
    definition: '',
    open: false
  });

  const handleChangeWord = e => {
    setEntry({...entry, word: e.target.value});
  }

  const handleChangeDefinition = e => {
    setEntry({...entry, definition: e.target.value});
  }

  const handleSubmit = e => {
    setEntries([...entries, entry]);
    setEntry({
      ...entry,
      word: '',
      definition: ''
    });
    e.preventDefault();
  }

  const handleToggle = e => {
    setEntry({...entry, open: !entry.open});
    e.preventDefault();
  }

  return (
    <div className="">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="word">Word/Expression: </label>
            <input id="word" type="text" value={entry.word} onChange={handleChangeWord} />
          </div>
          <div className="form-group">
            <label htmlFor="definition">Definition: </label>
            <input id="definition" type="text" value={entry.definition} onChange={handleChangeDefinition} />
          </div>
          <button type="submit">Save</button>
        </form>
        <button onClick={handleToggle}>click</button>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <p>{entry.word}</p>
              {entry.open && <p>{entry.definition}</p>}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default App;

import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {data} from '../data';

export default function Vocabulary() {
    let {id} = useParams();
    const lang = data.languages.find(lang => lang.id === id);

    const [word, setWord] = useState({
        title: '',
        definitions: [],
        examples: []
    });

    const handleOpenDetail = e => {
        setWord({...lang.words.find(word => word.title === e.target.value)});
        console.log(word);
    }

    return (
        <>
            <Link className="material-icons" to="/">keyboard_backspace</Link>
            <ul>
                {lang && lang.words.map(word => (
                    <li key={word.title}>
                        <button type="button" onClick={handleOpenDetail} value={word.title}>{word.title}</button>
                    </li>
                ))}
            </ul>
            {word && (
                <div>
                    <div>
                        <h2>{word.title}</h2>
                        <span>{word.pronounce}</span>
                    </div>
                    <ul>
                        {word.definitions.map((definition, index) => (
                            <li key={index}>{definition}</li>
                        ))}
                    </ul>
                    <ul>
                        {word.examples.map((example, index) => (
                            <li key={index}>{example}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

import React, {useState} from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';
import {data} from '../data';
import Header from './Header';

export default function Vocabulary({handleLocationChange}) {
    let location = useLocation();

    let {id} = useParams();
    const lang = data.languages.find(lang => lang.id === id);

    const [word, setWord] = useState({
        title: '',
        definitions: [],
        examples: []
    });

    const handleOpenDetail = e => {
        setWord({...lang.words.find(word => word.title === e.target.value)});
    }

    let definition = '';
    switch (lang.id) {
        case 'jp':
            definition = '定義';
        case 'en':
            definition = 'Definitions';
    }

    return (
        <>
            <Header />
            <div className="bg-primary wrapper row">
                <ul className="col-12 col-md-4 py-5 px-0">
                    {lang && lang.words.map(word => (
                        <li key={word.title}>
                            <button type="button" className="btn btn-light btn-lg fs3 mb-3" onClick={handleOpenDetail} value={word.title}>{word.title}</button>
                        </li>
                    ))}
                </ul>
                <div  className="col-12 col-md-8 bg-white p-5">
                    {word.title && (
                        <>
                            <div className="d-flex flex-row align-items-center mb-5">
                                <h2 className="fs1 font-weight-bold text-capitalize mr-5">{word.title}</h2>
                                <span>{word.pronounce}</span>
                            </div>
                            <div>
                                <p className="fs3 font-weight-bold">{definition}:</p>
                                <ul>
                                    {word.definitions.map((definition, index) => (
                                        <li key={index} className="fs4">{definition}</li>
                                    ))}
                                </ul>
                            </div>
                            <ul>
                                {word.examples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

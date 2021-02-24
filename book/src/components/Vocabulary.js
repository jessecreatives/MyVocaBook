import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar';
import Detail from './Detail';
import {data} from '../data';

export default function Vocabulary() {
    const { id } = useParams();

    const lang = data.languages.find(lang => lang.id === id)

    const [activeWord, setActiveWord] = useState({
        id: null,
        title: '',
        pronounce: '',
        definitions: [],
        examples: []
    });

    const [words, setWords] = useState(lang.words);
    
    useEffect(() => {
        setWords(words.map(word => word.id === activeWord.id ? { ...word, ...activeWord } : word))
    }, [activeWord]);

    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const handleOnClick = (e) => {
        const word = words.find(word => word.id.toString() === e.target.name);
        const { id, title, pronounce, definitions, examples } = word;
        setActiveWord({ id, title, pronounce, definitions, examples });
        setIsDetailOpen(!isDetailOpen);
    }

    const handleOnChange = (e) => {
        setActiveWord({ ...activeWord, [e.target.name]: e.target.value });
    }

    const handleOnDefChange = (e) => {
        setActiveWord({ ...activeWord, definitions: [...activeWord.definitions.map(d => d.id === e.target.name ? {...d, value: e.target.value} : d)] });
    }

    const handleOnExampleChange = (e) => {
        setActiveWord({ ...activeWord, examples: [...activeWord.examples.map(example => example.id === e.target.name ? {...example, value: e.target.value} : example)] });
    }

    return (
        <>
            <Header /> 
            <div className="row">
                {/* sidebar */ }
                <Sidebar words={words} onClick={handleOnClick} />
                {/* detail */ }
                <Detail activeWord={ activeWord }>
                    <input type="text" name="title" value={ activeWord.title } onChange={handleOnChange}/>
                    <input type="text" name="pronounce" value={ activeWord.pronounce } onChange={ handleOnChange } />
                    { activeWord.definitions.map(definition => (
                        <input key={definition.id} type="text" name={definition.id} value={ definition.value } onChange={ handleOnDefChange } />
                    )) }
                    { activeWord.examples.map(example => (
                        <input key={example.id} type="text" name={example.id} value={ example.value } onChange={ handleOnExampleChange } />
                    ))}
                </Detail>
            </div>
        </>
    )
}

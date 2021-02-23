import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar';
import Detail from './Detail';
import {data} from '../data';

export default function Vocabulary() {
    const { id } = useParams();

    const lang = data.languages.find(lang => lang.id === id)

    const [word, setWord] = useState({});
    const [words, setWords] = useState({words: lang.words});
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const handleOnClick = (e) => {
        setWord(lang.words.find(word => word.title === e.target.name));
        setIsDetailOpen(!isDetailOpen);
    }

    const handleOnChange = (e) => {
        const newWord = { ...word, title: e.target.value }
        setWord(newWord);
        const newWords = words.words.map(w => w.title === e.target.value ? newWord : w)
        setWords({words: newWords});
        console.log(words);
        
    }

    return (
        <>
            <Header /> 
            <div className="row">
                {/* sidebar */ }
                <Sidebar words={words.words} onClick={handleOnClick} />
                {/* detail */ }
                <Detail word={ word }>
                    <input type="text" value={ word.title } onChange={handleOnChange}/>
                </Detail>
            </div>
        </>
    )
}

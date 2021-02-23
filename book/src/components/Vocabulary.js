import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar';
import Detail from './Detail';
import {data} from '../data';

export default function Vocabulary() {
    const { id } = useParams();

    const lang = data.languages.find(lang => lang.id === id)
    const [word, setWord] = useState({});

    const handleOnClick = (e) => {
        setWord(lang.words.find(word => word.title === e.target.name));
    }

    return (
        <>
            <Header /> 
            <div className="row">
                {/* sidebar */ }
                <Sidebar lang={lang} onClick={handleOnClick} />
                {/* detail */ }
                <Detail word={word} />
            </div>
        </>
    )
}

import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar';
import Detail from './Detail';
import {data} from '../data';

export default function Vocabulary() {
    const { id } = useParams();

    const lang = data.languages.find(lang => lang.id === id)

    const [info, setInfo] = useState({
        id: null,
        title: '',
        pronounce: ''
    });

    const [words, setWords] = useState(lang.words);
    
    useEffect(() => {
        setWords(words.map(word => word.id === info.id ? {...word, title: info.title} : word))
    }, [info])

    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const handleOnClick = (e) => {
        const word = words.find(word => word.id.toString() === e.target.name);
        const { id, title, pronounce } = word;
        setInfo({id, title, pronounce});
        setIsDetailOpen(!isDetailOpen);
    }

    const handleOnChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Header /> 
            <div className="row">
                {/* sidebar */ }
                <Sidebar words={words} onClick={handleOnClick} />
                {/* detail */ }
                <Detail info={ info }>
                    <input type="text" name="title" value={ info.title } onChange={handleOnChange}/>
                    <input type="text" name="pronounce" value={ info.pronounce } onChange={handleOnChange}/>
                </Detail>
            </div>
        </>
    )
}

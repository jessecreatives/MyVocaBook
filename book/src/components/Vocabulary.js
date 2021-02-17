import React, {useState} from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';
import {data} from '../data';
import Header from './Header';

export default function Vocabulary() {
    let {id} = useParams();
    const lang = data.languages.find(lang => lang.id === id);

    const [word, setWord] = useState({
        title: '',
        definitions: [],
        examples: []
    });
    const [words, setWords] = useState(lang.words);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const [newWord, setNewWord] = useState('');
    const [newDefinition1, setNewDefinition1] = useState('');
    const [newDefinition2, setNewDefinition2] = useState('');
    const [newDefinition3, setNewDefinition3] = useState('');

    const [newExample1, setNewExample1] = useState('');
    const [newExample2, setNewExample2] = useState('');
    const [newExample3, setNewExample3] = useState('');

    const handleOpenDetail = e => {
        setWord({...words.find(word => word.title === e.target.value)});
    }

    const handleOpenAddForm = e => {
        setIsFormOpen(!isFormOpen);
    }

    const handleAddNewWord = (e) => {
        e.preventDefault();
        setWords([...words, { e, title: newWord, pronounce: '', definitions: [newDefinition1, newDefinition2, newDefinition3], examples: [newExample1, newExample2, newExample3] }]);
        setNewWord('');
        setNewDefinition1('');
        setNewDefinition2('');
        setNewDefinition3('');
        setNewExample1('');
        setNewExample2('');
        setNewExample3('');
    }

    let definition = '';
    let example = '';
    let formWordLabel = '';
    let formDefinitionLabel = '';
    let formExampleLabel = '';
    let formDefinitionHelp = '';
    let formExampleHelp = '';
    switch (lang.id) {
        case 'jp':
            definition = '定義';
            example = '例文';
            formWordLabel = "新単語";
            formDefinitionLabel = "定義";
            formExampleLabel = "例文";
            formDefinitionHelp = '後でも追加可能です。';
            formExampleHelp = '後でも追加可能です。';
        case 'en':
            definition = 'Definitions';
            example = 'Examples';
            formWordLabel = "New Word";
            formDefinitionLabel = "Definitions";
            formExampleLabel = "Examples";
            formDefinitionHelp = 'You can add more definitions later.';
            formExampleHelp = 'You can add more examples later.';
    }

    return (
        <>
            <Header />
            <div className="bg-secondary wrapper row">
                {/* word list */}
                <ul className="word-list col-12 col-md-4 py-5 px-0">
                    {words.map(word => (
                        <li key={word.title}>
                            <button type="button" className="btn btn-primary btn-lg fs3 mb-4" onClick={handleOpenDetail} value={word.title}>{word.title}</button>
                        </li>
                    )) }
                    {isFormOpen && <li>
                        <form action="" className="mb-5" onSubmit={handleAddNewWord}>
                            <div className="form-group">
                                <label htmlFor="word">{ formWordLabel}:</label>
                                <input type="text" className="form-control" id="word" value={ newWord } onChange={e => setNewWord(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="definitions">{ formDefinitionLabel}:</label>
                                <input type="text" className="form-control mb-4" id="definitions" value={newDefinition1} onChange={e => setNewDefinition1(e.target.value)} />
                                <input type="text" className="form-control mb-4" id="definitions" value={newDefinition2} onChange={e => setNewDefinition2(e.target.value)} />
                                <input type="text" className="form-control" id="definitions" aria-describedby="definitionHelp" value={newDefinition3} onChange={e => setNewDefinition3(e.target.value)} />
                                <small id="definitionHelp" className="form-text text-muted">{formDefinitionHelp }</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="examples">{ formExampleLabel}:</label>
                                <input type="text" className="form-control mb-4" id="examples" value={ newExample1 } onChange={e => setNewExample1(e.target.value)} />
                                <input type="text" className="form-control mb-4" id="examples" value={ newExample2 } onChange={e => setNewExample2(e.target.value)} />
                                <input type="text" className="form-control" id="examples" value={ newExample3 } onChange={e => setNewExample3(e.target.value)} aria-describedby="exampleHelp" />
                                <small id="exampleHelp" className="form-text text-muted">{formExampleHelp }</small>
                            </div>
                            <button type="submit" className="add btn btn-success btn-lg fs3 d-flex flex-row align-items-center justify-content-center">{ lang.id === "jp" ? "追加" : "Add" }</button>
                        </form>
                    </li>}
                    <li><button type="button" className="add btn btn-outline-success btn-lg fs3 d-flex flex-row align-items-center justify-content-center" onClick={handleOpenAddForm}><span className="material-icons mr-3">add</span>{ lang.id === "jp" ? "単語追加" : "New Word"}</button></li>
                </ul>
                {/* word detail */}
                <div  className="col-12 col-md-8 bg-white p-5 detail">
                    {word.title && (
                        <>
                            <div className="d-flex flex-row align-items-center mb-5">
                                <h2 className="fs1 font-weight-bold text-capitalize mr-5">{word.title}</h2>
                                <span>{word.pronounce}</span>
                            </div>
                            <div className="mb-5">
                                <p className="fs3 font-weight-bold">{definition}:</p>
                                <ul>
                                    {word.definitions.map((definition, index) => (
                                        <li key={index} className="fs4">{definition}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="fs3 font-weight-bold">{example}:</p>
                                <ul>
                                    {word.examples.map((example, index) => (
                                        <li key={index}>{example}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

import React, {useState, useEffect} from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';
import {data} from '../data';
import Header from './Header';

const InputWithLabel = ({id, formDefinitionLabel, value, onChange}) => (
    <>
        <label htmlFor={id}>{ formDefinitionLabel } {id}:</label>
        <input type="text" className="form-control mb-4" id={id} value={ value } onChange={ onChange } />
    </>
);

const ListOfInputs = ({ list }) => 
    list.map(item => {
        const { id, formDefinitionLabel, value, onChange } = item;
        return (
            <InputWithLabel
                id={ id }
                formDefinitionLabel={ formDefinitionLabel }
                value={ value }
                onChange={onChange}
            />
        );
    });

export default function Vocabulary() {
    const [lang, setLang] = useState({});

    useEffect(() => {
        let { id } = useParams();
        const lang = data.languages.find(lang => lang.id === id);
        setLang({ ...lang });
    }, [id]);

    const [word, setWord] = useState({
        title: '',
        definitions: [],
        examples: []
    });
    const [words, setWords] = useState(lang.words);

    const [isFormOpen, setIsFormOpen] = useState(false);

    const [defInputNum, setDefInputNum] = useState(3);
    const [exampleInputNum, setExampleInputNum] = useState(3);

    const [defInputs, setDefInputs] = useState([]);
    for (let i = 0; i < defInputNum; i++) {
        setDefInputs([...defInputs, <>
            <label htmlFor={ `definition${i + 1}` }>{ formDefinitionLabel } { i + 1 }:</label>
            <input type="text" className="form-control mb-4" id={ `definition${i + 1}` } value={  } onChange={ e => setNewDefinition1(e.target.value) } />
        </>]);
    }

    const handleAddInput = (e) => {
        setDefInputs([...defInputs, <>
            
        </>]);
    }

    const handleOpenDetail = e => {
        setWord({...words.find(word => word.title === e.target.value)});
    }

    const handleOpenAddForm = e => {
        setIsFormOpen(!isFormOpen);
    }

    const handleAddNewWord = e => {
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

import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {data} from '../data';
import Vocabulary from './Vocabulary';

export default function LanguageLinkList() {
    return (
        <ul>
            {data.languages.map(lang => {
                const id = lang.id
                return (
                    <li key={id}><Link to={`/lang/${id}`}>{lang.name}</Link></li>
                );
            })}
        </ul>
    )
}

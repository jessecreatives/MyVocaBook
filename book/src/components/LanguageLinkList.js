import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {data} from '../data';

export default function LanguageLinkList() {
    return (
        <ul className="container my-5">
            {data.languages.map(lang => {
                const id = lang.id
                return (
                    <li key={id}><Link className="fs2 btn btn-lg btn-light" to={`/lang/${id}`}>{lang.name}</Link></li>
                );
            })}
        </ul>
    )
}

import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';
import {data} from '../data';
import TopHeader from './TopHeader';

export default function LanguageLinkList({handleLocationChange}) {
    let location = useLocation();

    return (
        <>
            <TopHeader />
            <div className="bg-primary wrapper pt-5">
                <ul className="container my-5">
                    {data.languages.map(lang => {
                        const id = lang.id;
                        return (
                            <li key={id}>
                                <Link className="fs3 btn btn-lg btn-light mb-3" to={`/lang/${id}`} onClick={() => handleLocationChange(location.pathname)}>{lang.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}

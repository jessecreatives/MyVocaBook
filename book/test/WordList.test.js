import React from 'react';
import ReactDOM from 'react-dom';
import {WordList} from '../src/WordList';

describe('WordList', () => {
    it('renders a single word', () => {
        const word = "pretext";
        const component = <WordList word={word} />;
        const container = document.createElement('div');
        document.body.appendChild(container);

        ReactDOM.render(component, container);

        expect(document.body.textContent).toEqual("pretext");
    })
});
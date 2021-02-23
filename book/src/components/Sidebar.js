import React from 'react'

export default function Sidebar({lang, handleOnClick}) {
    return (
        <div className="col-12 col-md-4">
            <ul>
                { lang.words.map(word => (
                    <li key={ word.title }>
                        <button type="button" name={word.title} onClick={handleOnClick}>{ word.title }</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

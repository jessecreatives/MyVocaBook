import React from 'react'

export default function Sidebar({words, onClick}) {
    return (
        <div className="col-12 col-md-4">
            <ul>
                { words.map(word => (
                    <li key={ word.title }>
                        <button type="button" name={word.id} onClick={onClick}>{ word.title }</button>
                    </li>
                ))}
            </ul>
        </div>
    ) 
}

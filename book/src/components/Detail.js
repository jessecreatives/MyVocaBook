import React from 'react'

export default function Detail({word}) {
    return (
        <div className="col-12 col-md-8">
            <h2>{word.title}</h2>
        </div>
    )
}

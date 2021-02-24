import React, { useState } from 'react';

export default function Detail({activeWord, children, ...props}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className="col-12 col-md-8">
            {isEditing ? (
                <h2 onBlur={() => setIsEditing(false)}>{children}</h2>
            ) : (
                <>
                    <h2 onClick={() => setIsEditing(true)}>{activeWord.title}</h2>
                    <p onClick={ () => setIsEditing(true) }>{ activeWord.pronounce }</p>
                    {activeWord.definitions.map(definition => (
                        <p onClick={() => setIsEditing(true)} key={definition.id}>{definition.value}</p>
                        
                    )) }
                    {activeWord.examples.map(example => (
                        <p onClick={() => setIsEditing(true)} key={example.id}>{example.value}</p>
                    ))}
                </>
            )}
        </div>
    )
}

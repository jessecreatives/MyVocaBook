import React, {useState} from 'react'

export default function Detail({word, children, ...props}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className="col-12 col-md-8">
            {isEditing ? (
                <h2 onBlur={() => setIsEditing(false)}>{children}</h2>
            ) : (
                <h2 onClick={() => setIsEditing(true)}>{word.title}</h2>
            )}
        </div>
    )
}

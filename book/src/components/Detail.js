import React, {useState} from 'react'

export default function Detail({info, children, ...props}) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <div className="col-12 col-md-8">
            {isEditing ? (
                <h2 onBlur={() => setIsEditing(false)}>{children}</h2>
            ) : (
                <>
                    <h2 onClick={() => setIsEditing(true)}>{info.title}</h2>
                    <p onClick={() => setIsEditing(true)}>{info.pronounce}</p>
                </>
            )}
        </div>
    )
}

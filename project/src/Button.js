import React from 'react'

function Button({count, onUpdate}) {
    return (
        <div>
            <button onClick={() => onUpdate(count + 1)} >Check Counter</button>
        </div>
    )
}

export default Button

import React from 'react'

const Alert = ({ message }) => {
    return (
        <div className="px-4 py-2 bg-yellow-400 text-yellow-800 rounded-sm">
            <p>{message}</p>
        </div>
    )
}

export default Alert
import React from 'react'

export default function Header(props) {
    return(
        <div className="headerWrapper">
            <button onClick={() => props.changeMonth("previous") }>Previous Month</button>
            <h1>{props.monthName}</h1>
            <button onClick={() => props.changeMonth("next") }>Next Month</button>
        </div>
    )
}
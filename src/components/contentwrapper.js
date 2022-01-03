import React from 'react'

import Weeks from './weekwrapper'

export default function ContentWrapper(props) {
    return(
        <div><h2>Content Wrap Up ..</h2>
        <Weeks month={props.currentMonth}/>
        </div>
    )
}
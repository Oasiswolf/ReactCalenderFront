import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';


export default function Header(props) {
    return(
        <div className="headerWrapper">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={() => props.changeMonth("previous")} />
            <h1>{props.monthName}</h1>
            <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={() => props.changeMonth("next")} />
        </div>
    )
}
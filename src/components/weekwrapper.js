import React from 'react'

import DayWrapper from './dayswrapper'
import DayTitle from './daytitlewrapper'

export default function Weeks(props) {
    const renderCalenderBoxes = () => {
        const calenderBoxesArray = []

        for(let i=1; i <= props.month.start_day; i++) {
            calenderBoxesArray.push(<DayWrapper key={`P-${i}`} overflow />)
        }

        for(let i=1; i <= props.month.days_in_month; i++) {
            calenderBoxesArray.push(<DayWrapper key={`${props.month.id}-${i}`} />)
        }

        for(let i=1; i <= 42 - props.month.days_in_month - props.month.start_day; i++) {
            calenderBoxesArray.push(<DayWrapper key={`N-${i}`} overflow />)
        }

        return calenderBoxesArray

    }

    return(
        <div>
            <DayTitle />
            <div className='WeekSetup'>

                { renderCalenderBoxes() }

            </div>
        </div>
    )
}
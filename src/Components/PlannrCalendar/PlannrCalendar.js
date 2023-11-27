import Calendar from 'react-calendar'
import { useState } from 'react'
import './index.css'
//Parameters:
//dates: array of <Date>'s
//selectedDate: single <Date>
//Returns: index of selectedDate in dates. -1 if not found
const getDateIndex = (dates, selectedDate) => {
    const index = dates.findIndex(function(date) {
        return date.valueOf() === selectedDate.valueOf()
    })
    return index
}

const deleteDate = (dates, selectedDate) => {
    return dates.filter(date => date.valueOf() !== selectedDate.valueOf())
}

const Plannr = ({data}) => {
    //TODO initialize collectiveDates, topDate, userDates with GET request from server
    const [collectiveDates, setCollectiveDates] = useState([])
    const [topDate, setTopDate] = useState()
    const [userDates, setUserDates] = useState([])

    const onClickDay = (date, event) => {
        //for eslint
        if(!date) {
            setTopDate(3)
        }
        const index = getDateIndex(userDates, date)
        if (index > -1) {
            setUserDates(userDates => deleteDate(userDates, date))
            setCollectiveDates(collectiveDates => deleteDate(collectiveDates, date))
        }
        else {
            setUserDates(userDates => [...userDates, date])
            setCollectiveDates(setCollectiveDates => [...setCollectiveDates, date])
        }
    }
    const tileClassName = ({activeStartDate, date, view}) => {
        let classNames = []
        if (getDateIndex(userDates, date) > -1) classNames.push('user-selected-date')
        if(getDateIndex(collectiveDates, date) > -1) classNames.push('collective-selected-date')
        //if(topDate.valueOf() === date.valueOf()) classNames.concat('top-selected-date')
        return classNames.join(' ')
    }

    //TODO tileContent parameter to allow circle percentage
    return (
        <Calendar tileClassName={tileClassName} onClickDay={onClickDay}/>
    )
}


export default Plannr
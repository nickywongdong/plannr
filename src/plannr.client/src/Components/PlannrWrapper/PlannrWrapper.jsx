import './index.css'
import PlannrCalendar from '../PlannrCalendar'
import ModeToggle from '../ModeToggle'
import { useState } from 'react'
import InfoModal from '../InfoModal'

const PlannrWrapper = () => {
    const [isEditMode, setEditMode] = useState(true)
    return (
        <div className='plannr-wrapper'>
            <ModeToggle isEditMode={isEditMode} setEditMode={setEditMode} />
            <InfoModal />
            <PlannrCalendar isEditMode={isEditMode}/>
        </div>
        
    )
}

export default PlannrWrapper
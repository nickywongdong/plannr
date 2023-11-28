import './index.css'

const ModeToggle = ({isEditMode, setEditMode}) => {

    const toggleMode = () => {
        isEditMode = !isEditMode
        setEditMode(isEditMode)
    }
    return (
        <button onClick={toggleMode}>
            {isEditMode ? <div>Edit Mode</div> : <div>View Mode</div>}
        </button>
    )
}

export default ModeToggle
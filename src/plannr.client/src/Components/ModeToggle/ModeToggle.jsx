import './index.css'
import Button from '@mui/material/Button';


const ModeToggle = ({ isEditMode, setEditMode }) => {

    const toggleMode = () => {
        isEditMode = !isEditMode
        setEditMode(isEditMode)
    }
    return (
        <Button onClick={toggleMode}>
            {isEditMode ? <div>Edit Mode</div> : <div>View Mode</div>}
        </Button>
    )
}

export default ModeToggle
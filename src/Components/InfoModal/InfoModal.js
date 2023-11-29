import './index.css'

import Modal from '@mui/material/Modal'
import InfoIcon from '@mui/icons-material/Info'
import ClearIcon from '@mui/icons-material/Clear';

import { useState } from 'react'

const InfoModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='info-modal-wrapper'>
            <div className='info-icon' onClick={handleOpen}>
                <InfoIcon />
            </div>
            <Modal
                open={open}
            >
                <div className='modal-content'>
                    <div className='modal-header' onClick={handleClose}> 
                        <ClearIcon />
                    </div>
                    <div className='modal-body'>This is modal text</div>
                </div>
            </Modal>
        </div>
    )
}

export default InfoModal
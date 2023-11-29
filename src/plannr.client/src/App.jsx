import './App.css';
import PlannrWrapper from './Components/PlannrWrapper';

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <PlannrWrapper />
            </Container>
        </React.Fragment>
    );
}

export default App;

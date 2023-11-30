import './App.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ColorModeProvider } from './Contexts/ColorModeContext';

import PlannrWrapper from './Components/PlannrWrapper';
import NavBar from './Components/NavBar';

function App() {

    return (
        <React.Fragment>
            <ColorModeProvider>
                <CssBaseline enableColorScheme/>
                <NavBar />
                <Container maxWidth="sm">
                    <PlannrWrapper />
                </Container>
            </ColorModeProvider>
        </React.Fragment>
    );
}

export default App;

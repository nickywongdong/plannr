// App.jsx

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { ColorModeProvider } from './Contexts/ColorModeContext';
import PlannrWrapper from './Components/PlannrWrapper';
import NavBar from './Components/NavBar';
import AppFooter from './Components/AppFooter/AppFooter';

import './App.css'; // Import your CSS file

function App() {
    return (
        <React.Fragment>
            <ColorModeProvider>
                <CssBaseline enableColorScheme />
                <Box className="app-container">
                    <NavBar />
                    <Container className="App" component="main">
                        <PlannrWrapper />
                    </Container>
                    <AppFooter />
                </Box>
            </ColorModeProvider>
        </React.Fragment>
    );
}

export default App;

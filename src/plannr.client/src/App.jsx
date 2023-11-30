import './App.css';
import PlannrWrapper from './Components/PlannrWrapper';
import NavBar from './Components/NavBar';

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ColorModeProvider } from './Contexts/ColorModeContext';

function App() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <React.Fragment>
            <CssBaseline />
            <ColorModeProvider>
                <NavBar />
                <Container maxWidth="sm">
                    <PlannrWrapper />
                </Container>
            </ColorModeProvider>
        </React.Fragment>
    );
}

export default App;

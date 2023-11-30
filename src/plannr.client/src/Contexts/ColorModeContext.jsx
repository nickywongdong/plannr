// ColorModeContext.js
import { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ColorModeContext = createContext();

export const useColorMode = () => {
    return useContext(ColorModeContext);
};

export const ColorModeProvider = ({ children }) => {
    const [colorMode, setColorMode] = useState('light');

    const toggleColorMode = () => {
        setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    // Create Material-UI themes based on colorMode
    const theme = createTheme({
        palette: {
            mode: colorMode,
        },
    });

    return (
        <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

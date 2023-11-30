import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import ThemeToggleButton from '../ThemeToggleButton';


export default function NavBar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <ThemeToggleButton />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
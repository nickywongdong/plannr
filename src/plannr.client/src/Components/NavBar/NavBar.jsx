import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ThemeToggleButton from '../ThemeToggleButton';


export default function NavBar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Plannr
                        </Typography>
                        <ThemeToggleButton />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
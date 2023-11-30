// ThemeToggleButton.jsx
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useColorMode } from '../../Contexts/ColorModeContext';

function ThemeToggleButton() {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <>
            <IconButton onClick={toggleColorMode} color="inherit">
                {colorMode === 'light' ? <Brightness7Icon /> : <Brightness4Icon/> }
            </IconButton>
        </>
    );
}

export default ThemeToggleButton;

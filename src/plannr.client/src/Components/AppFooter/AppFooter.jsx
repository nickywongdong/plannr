/* AppFooter.jsx */

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import './AppFooter.css';

const AppFooter = () => {
    return (
        <Box
            component="footer"
            className="app-footer"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm">
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <a href="https://github.com/nickywongdong/plannr/actions/workflows/plannr-cd.yml">
                        <img src="https://github.com/nickywongdong/plannr/actions/workflows/plannr-cd.yml/badge.svg" alt="plannr-cd" />
                    </a>

                    <a href="https://github.com/nickywongdong/plannr/actions/workflows/plannr-ci.yml">
                        <img src="https://github.com/nickywongdong/plannr/actions/workflows/plannr-ci.yml/badge.svg" alt="plannr-ci" />
                    </a>
                </Stack>
            </Container>
        </Box>
    );
}

export default AppFooter;

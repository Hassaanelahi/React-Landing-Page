import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <>
            <Box sx={{
                display: 'block',
                py: '120px',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(src/assets/images/overlay_1.jpg)',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>

                <CssBaseline />
                <Container>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={5}>
                            <Stack spacing={5} sx={{textAlign: {md:'left', xs: 'center'}, alignItems: {xs: 'center', md: 'flex-start'}}}>
                                <Typography
                                    variant="h2"
                                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 'bolder', color: '#212b36', fontSize: {xs: '42px', md: '3.75rem'} }}>

                                    Create Your Website Today with <span className="text-theme-orange ">ZONE</span>
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '500', color: '#637381' }}>

                                    The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.
                                </Typography>

                                <Button variant="contained" sx={{
                                    display: 'flex',
                                    gap: '4px',
                                    borderRadius: '8px',
                                    minWidth: 'auto',
                                    color: '#fff',
                                    padding: '8px 14px',
                                    fontFamily: 'Public Sans, sans-serif',
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 700,
                                    backgroundColor: '#212b36',
                                    width: 'fit-content',
                                    margin: '0 auto',
                                    '&:hover': {
                                        backgroundColor: '#454f5b',
                                    },
                                }}>Figma Workspace <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="18" height="18"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path></svg></Button>
                                <Stack>
                                    <Typography
                                        variant="p"
                                        sx={{ fontFamily: 'Public Sans, sans-serif', fontWeight: '700', color: '#212B36', fontSize: '0.75rem', opacity: '0.48', mb: '20px' }}>
                                        AVAILABLE FOR
                                    </Typography>
                                    <Stack direction="row" spacing={2}>
                                        <img src="src/assets/images/ic_js.svg" alt="icon 1" />
                                        <img src="src/assets/images/ic_ts.svg" alt="icon 2" />
                                        <img src="src/assets/images/ic_figma.svg" alt="icon 3" />
                                        <img src="src/assets/images/ic_nextjs.svg" alt="icon 4" />
                                        <img src="src/assets/images/ic_vite.svg" alt="icon 5" />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Box sx={{
                        display: { xs: 'none', md: 'block' },
                        width: { md: '55%', sm: '45%' },
                        maxWidth: '1280px',
                        position: 'absolute',
                        bottom: {lg: '16%;', md: '55%;'},
                        right: 0,
                        overflow: 'hidden'
                    }}>
                        <Box
                            component="img"
                            alt="Header Image"
                            src="src/assets/images/home_hero.png"
                        />
                    </Box>

                </Container>
            </Box >
        </>
    )
}

export default Header
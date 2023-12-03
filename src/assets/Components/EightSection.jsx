import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const EightSection = () => {
    return (
        <>
            <CssBaseline />
            <Container sx={{ position: 'relative', paddingTop: '80px', paddingBottom: '120px' }}>
                <Box sx={{ padding: {md:'80px', xs: '16px'}, background: {lg:'#F4F6F8', xs: '#fff'}, borderRadius: '24px' }} >
                    <Stack spacing={5} sx={{textAlign: {lg:'left', xs: 'center'}, alignItems: {xs: 'center', lg: 'flex-start'}}}>
                        <Typography
                            variant="p"
                            sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '600', display: 'block', marginBottom: '20px', color: '#637381', fontSize: '12px', opacity: 0.7 }}>
                            PERFECT COMBINATION
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 'bolder', color: '#212b36', fontSize: {md: '2.125rem', xs: '1.5rem'} }}>

                            Looking For a <br />Dashboard Template?
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{ fontFamily: 'Public Sans, sans-serif', color: '#637381', maxWidth: '360px' }}>
                            Minimal UI Kit is a professional dashboard used by many of our clients.
                        </Typography>

                        <Button variant="contained" sx={{
                            display: 'flex',
                            gap: '2px',
                            borderRadius: '8px',
                            minWidth: 'auto',
                            color: '#212b36',
                            padding: '8px 14px',
                            fontFamily: 'Public Sans, sans-serif',
                            fontSize: '15px',
                            textTransform: 'capitalize',
                            fontWeight: 600,
                            backgroundColor: {md:'#F4F6F8', xs: '#fff'},
                            border: '1px solid #212b36',
                            width: 'fit-content',
                            boxShadow: 'none',
                            borderColor: '#919eab52',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                boxShadow: '0 0 0 0.5px currentColor',
                                borderColor: 'currentColor',
                            },
                        }}>Visit Minimal Dashboard <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-3o0h5k iconify iconify--carbon" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"></path></svg></Button>
                    </Stack>

                </Box>
                <Box sx={{
                    top: { lg: '-40px' },
                    right: { lg: '-120px' },
                    mt: { lg: '0px' },
                    mb: { lg: '0px' },
                    position: { lg: 'absolute' },
                    width: { lg: '67%' },
                    py: {xs: '64px', md: '0px'}
                }}>
                    <Box
                        component="img"
                        alt="Header Image"
                        src="src/assets/images/minimal_dashboard.png"
                    />
                </Box>

            </Container>
        </>
    )
}

export default EightSection
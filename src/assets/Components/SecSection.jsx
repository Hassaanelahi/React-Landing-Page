import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';



const SecSection = () => {
    return (
        <>
            <CssBaseline />
            <Container>
                <Box sx={{ backgroundColor: '#F4F6F8', borderRadius: '25px', pb: '80px' }}>
                    <Box
                        component="img"
                        sx={{
                            width: {md:'65%', xs:'100%'},
                            mx: 'auto'
                        }}
                        alt="Header Image"
                        src="src/assets/images/new_start.png"
                    />
                    <Box sx={{
                        width: {md:'50%', xs: '80%'},
                        mx: 'auto',
                        textAlign: 'center',
                        pt: '20px',

                    }}>
                        <Typography
                            variant="p"
                            sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '700', display: 'block', marginBottom: '20px', color: '#637381', fontSize: '12px', opacity: 0.7 }}>
                            NEW START
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 'bolder', marginBottom: '20px', color: '#212b36', fontSize: {xs: '2rem', md: '3rem'} }}>
                            The <span className="text-theme-orange ">ZONE</span> UI Kit
                        </Typography>

                        <Typography
                            variant="p"
                            sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '500', color: '#637381' }}>
                            Modern ui kit to save your time, boost your creativity. Neat and super stylish layout ready to help with your projects
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default SecSection
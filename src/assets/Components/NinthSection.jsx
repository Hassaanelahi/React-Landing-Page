import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NinthSection = () => {
    return (
        <>
            <Box sx={{
                background: 'linear-gradient(to bottom, rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.8)),url(src/assets/images/advertisement.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'cover cover',
                textAlign: 'center',
                py: { xs: '80px', md: '280px' }
            }}>


                <Typography
                    variant="h2"
                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 'bolder', marginBottom: '0px', color: '#fff', opacity: 0.48, fontSize: {md: '3.75rem', xs: '2.5rem'} }}>
                    Start Now
                </Typography>

                <Typography
                    variant="h2"
                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 'bolder', color: '#fff', marginBottom: '64px', fontSize: {md: '3.75rem', xs: '2.5rem'} }}>
                    Create Your <br />
                    Website Today
                </Typography>

                <Button variant="contained" sx={{
                    display: 'flex',
                    gap: '4px',
                    borderRadius: '8px',
                    minWidth: 'auto',
                    color: '#fff',
                    padding: '10px 14px',
                    fontFamily: 'Public Sans, sans-serif',
                    fontSize: '15px',
                    textTransform: 'capitalize',
                    fontWeight: 700,
                    backgroundColor: '#FA541C',
                    width: 'fit-content',
                    mx: 'auto',
                    '&:hover': {
                        backgroundColor: '#B3200E',
                        boxShadow: '0 8px 16px 0 rgba(250, 84, 28, 0.24)'
                    },
                }}>Purchase Now
                </Button>


            </Box>
        </>
    )
}

export default NinthSection







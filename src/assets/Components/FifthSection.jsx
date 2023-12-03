import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const FifthSection = () => {
    return (
        <>
            <Box sx={{
                background: 'linear-gradient(to bottom, rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.8)),url(src/assets/images/for_designer.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize : 'cover',
                backgroundPosition: 'cover cover',
                textAlign: 'center',
                py: {xs: '80px', md: '120px'}
            }}>


                <Typography
                    variant="p"
                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '700', display: 'block', marginBottom: '20px', color: '#fff', fontSize: '12px', opacity: 0.48, margin: '0px' }}>
                    PROFESSIONAL KIT
                </Typography>

                <Typography
                    variant="h3"
                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 'bolder', color: '#fff', marginTop: '16px', marginBottom: '40px', fontSize: {md: '3rem', xs: '2rem'} }}>
                    For Designer
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
                    backgroundColor: '#FA541C',
                    width: 'fit-content',
                    mx: 'auto',
                    '&:hover': {
                        backgroundColor: '#B3200E',
                        boxShadow: '0 8px 16px 0 rgba(250, 84, 28, 0.24)'
                    },
                }}>Figma Workspace <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="18" height="18"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path></svg>
                </Button>


            </Box>
        </>
    )
}

export default FifthSection
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


const Footer = () => {
    return (
        <>
            <footer>
                <CssBaseline />
                <Container sx={{ textAlign: 'center', py: '64px' }}>

                    <Link href="#" sx={{ color: '#212b36', textAlign: 'center', textDecoration: 'none' }}>
                        <Box sx={{ width: '64px', textAlign: 'center', display: 'inline-flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 512 512"><ellipse cx="405.143" cy="338.571" fill="#FA541C" rx="82.857" ry="82.857"></ellipse><path fill="currentColor" d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"></path></svg>
                        </Box>
                    </Link>

                    <Typography
                        variant="div"
                        sx={{ fontFamily: 'Public Sans, sans-serif', color: '#637381', display: 'block', fontWeight: 400, fontSize: '0.75rem' }}>
                        © 2023. All rights reserved
                    </Typography>
                </Container>
            </footer>
        </>
    )
}

export default Footer
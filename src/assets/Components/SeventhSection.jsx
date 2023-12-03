import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const SeventhSection = () => {

    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <CssBaseline />
            <Container sx={{ py: { lg: '80px', xs: '40px' } }}>

                <Grid container spacing={{ md: 3 }} justifyContent={'center'}>
                    <Grid xs={12} md={8} >

                        <Typography
                            variant="h3"
                            sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 'bolder', color: '#212b36', textAlign: 'center', fontSize: {md: '3rem', xs: '2rem'} }}>
                            Frequently Asked Questions
                        </Typography>

                        <Box sx={{ my: { lg: '80px', xs: '64px' } }}>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                                sx={{
                                    '&.MuiPaper-root.MuiAccordion-root:before': {
                                        backgroundColor: 'transparent'
                                    },
                                    '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
                                        backgroundColor: 'rgba(145, 158, 171, 0.16)'
                                    },
                                    '&.MuiPaper-root.MuiAccordion-root.Mui-expanded': {
                                        margin: '0px'
                                    },
                                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                        transform: 'none',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: 'none',
                                    borderBottom: 'dashed 1px rgba(145, 158, 171, 0.2)',
                                }}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel1' ? <RemoveIcon /> : <AddIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Barlow, sans-serif', }}>What's in the product packages?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: 'Public Sans, sans-serif', }}>
                                        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                                sx={{
                                    '&.MuiPaper-root.MuiAccordion-root:before': {
                                        backgroundColor: 'transparent'
                                    },
                                    '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
                                        backgroundColor: 'rgba(145, 158, 171, 0.16)'
                                    },
                                    '&.MuiPaper-root.MuiAccordion-root.Mui-expanded': {
                                        margin: '0px'
                                    },
                                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                        transform: 'none',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: 'none',
                                    borderBottom: 'dashed 1px rgba(145, 158, 171, 0.2)',
                                }}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel2' ? <RemoveIcon /> : <AddIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Barlow, sans-serif', }}>How can I upgrade my product plan?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: 'Public Sans, sans-serif', }}>
                                        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                                sx={{
                                    '&.MuiPaper-root.MuiAccordion-root:before': {
                                        backgroundColor: 'transparent'
                                    },
                                    '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
                                        backgroundColor: 'rgba(145, 158, 171, 0.16)'
                                    },
                                    '&.MuiPaper-root.MuiAccordion-root.Mui-expanded': {
                                        margin: '0px'
                                    },
                                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                        transform: 'none',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: 'none',
                                    borderBottom: 'dashed 1px rgba(145, 158, 171, 0.2)',
                                }}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel3' ? <RemoveIcon /> : <AddIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Barlow, sans-serif', }}>Are design assets (Figma, Sketch, Adobe XD) included?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: 'Public Sans, sans-serif', }}>
                                        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                                sx={{
                                    '&.MuiPaper-root.MuiAccordion-root:before': {
                                        backgroundColor: 'transparent'
                                    },
                                    '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
                                        backgroundColor: 'rgba(145, 158, 171, 0.16)'
                                    },
                                    '&.MuiPaper-root.MuiAccordion-root.Mui-expanded': {
                                        margin: '0px'
                                    },
                                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                        transform: 'none',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: 'none',
                                    borderBottom: 'dashed 1px rgba(145, 158, 171, 0.2)',
                                }}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel4' ? <RemoveIcon /> : <AddIcon />}
                                    aria-controls="panel4a-content"
                                    id="panel4a-header"
                                >
                                    <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Barlow, sans-serif', }}>Does this product support TypeScript?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: 'Public Sans, sans-serif', }}>
                                        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
                                sx={{
                                    '&.MuiPaper-root.MuiAccordion-root:before': {
                                        backgroundColor: 'transparent'
                                    },
                                    '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
                                        backgroundColor: 'rgba(145, 158, 171, 0.16)'
                                    },
                                    '&.MuiPaper-root.MuiAccordion-root.Mui-expanded': {
                                        margin: '0px'
                                    },
                                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                        transform: 'none',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: 'none',
                                    borderBottom: 'dashed 1px rgba(145, 158, 171, 0.2)',
                                }}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel5' ? <RemoveIcon /> : <AddIcon />}
                                    aria-controls="panel5a-content"
                                    id="panel5a-header"
                                >
                                    <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Barlow, sans-serif', }}>Can I use this template in commercial projects like a SaaS?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: 'Public Sans, sans-serif', }}>
                                        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}
                                sx={{
                                    '&.MuiPaper-root.MuiAccordion-root:before': {
                                        backgroundColor: 'transparent'
                                    },
                                    '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
                                        backgroundColor: 'rgba(145, 158, 171, 0.16)'
                                    },
                                    '&.MuiPaper-root.MuiAccordion-root.Mui-expanded': {
                                        margin: '0px'
                                    },
                                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                        transform: 'none',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: 'none',
                                    borderBottom: 'dashed 1px rgba(145, 158, 171, 0.2)',
                                }}>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel6' ? <RemoveIcon /> : <AddIcon />}
                                    aria-controls="panel6a-content"
                                    id="panel6a-header"
                                >
                                    <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Barlow, sans-serif', }}>How can I request support?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: 'Public Sans, sans-serif', }}>
                                        Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>

                        <Box sx={{
                            textAlign: 'center',
                            padding: { xs: '48px 24px', lg: '64px' },
                            border: 'dashed 1px rgba(145, 158, 171, 0.32)',
                            borderRadius: '24px'
                        }}>
                            <Typography
                                variant="h4"
                                sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 'bolder', color: '#212b36', fontSize: {md: '2.125rem', xs: '1.5rem'} }}>
                                Still Have Questions?
                            </Typography>

                            <Typography
                                variant="p"
                                sx={{ fontFamily: 'Public Sans, sans-serif', color: '#637381', display: 'block', marginTop: '24px', marginBottom: '40px' }}>
                                Please describe your case to receive the most accurate advice.
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
                                mx: 'auto',
                                '&:hover': {
                                    backgroundColor: '#454f5b',
                                },
                            }}>Contact Us</Button>
                        </Box>

                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default SeventhSection
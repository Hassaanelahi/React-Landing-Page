import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';


const SixthSection = () => {

    let arr2 = ['One end products', '12 months updates', '6 months of support', 'JavaScript version', 'TypeScript version', 'Design resources', 'Commercial applications']



    return (
        <>
            <CssBaseline />
            <Container sx={{
                pt: { md: '120px', xs: '80px' },
                pb: { md: '80px', xs: '40px' }
            }}>
                <Box sx={{
                    textAlign: 'center',
                    mb: '120px'
                }}>
                    <Typography
                        variant="p"
                        sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '700', display: 'block', color: '#637381', fontSize: '12px', opacity: 0.7 }}>
                        PRICING PLANS
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 'bolder', color: '#212b36', lineHeight: 1.333333, my: '30px', fontSize: { md: '3rem', xs: '2rem' } }}>

                        The Right Plan <br></br>For Your Business
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{ fontFamily: 'Public Sans, sans-serif', color: '#637381' }}>
                        Choose the perfect plan for your needs. Always flexible to grow
                    </Typography>
                </Box>

                <Box sx={{ display: 'grid', gap: '32px', gridTemplateColumns: { md: 'repeat(3, 1fr)', xs: 'repeat(1, 1fr)' }, alignItems: 'center' }}>
                    <Paper sx={{
                        boxShadow: '-8px 8px 24px -4px rgba(145, 158, 171, 0.08)',
                        padding: '40px',
                        borderRadius: '16px',

                    }}>
                        <Stack gap={'40px'}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography
                                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '600', color: '#212b36', fontSize: { md: '1.25rem', sm: '1.875rem', } }}>
                                    STANDARD
                                </Typography>
                                <Stack direction={'row'}>
                                    <Typography
                                        sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '600', color: '#212b36', fontSize: { md: '1.5rem', sm: '1.25rem', } }}>
                                        $
                                    </Typography>

                                    <Typography
                                        sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '700', color: '#212b36', fontSize: { lg: '2rem', md: '1.875rem', sm: '1.65rem', } }}>
                                        59
                                    </Typography>
                                </Stack>
                            </Stack>


                            <Box
                                component="img"
                                sx={{
                                    width: '20px',
                                    height: '20px'
                                }}
                                alt="JS"
                                src="src/assets/images/ic_js.svg"
                            />



                            <Stack gap={'20px'}>
                                {
                                    arr2.map((value, index) => (
                                        <>

                                            {
                                                index < 4 ?

                                                    <Stack direction={'row'} gap={'12px'} key={index}>
                                                        <svg style={{ color: '#FA541C' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-rf2r4e iconify iconify--carbon" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415l-9 8.999z"></path><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"></path></svg>
                                                        <Typography
                                                            sx={{ fontFamily: 'Public Sans, sans-serif', fontWeight: '400', color: '#212b36', fontSize: '15px' }}>
                                                            {value}
                                                        </Typography>
                                                    </Stack>
                                                    :
                                                    <Stack direction={'row'} gap={'12px'} key={index}>
                                                        <svg style={{ color: '#919EAB' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-13xn2uu iconify iconify--carbon" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z"></path><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></path></svg>
                                                        <Typography
                                                            sx={{ fontFamily: 'Public Sans, sans-serif', fontWeight: '400', color: '#919EAB', fontSize: '15px' }}>
                                                            {value}
                                                        </Typography>
                                                    </Stack>

                                            }

                                            {index == 2 ? <Divider /> : ''}


                                        </>
                                    ))
                                }
                            </Stack>


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
                                backgroundColor: 'white',
                                border: '1px solid #212b36',
                                boxShadow: 'none',
                                borderColor: '#919eab52',
                                '&:hover': {
                                    backgroundColor: '#212b3614',
                                    boxShadow: '0 0 0 0.5px currentColor',
                                    borderColor: 'currentColor',
                                },
                            }}>Choose Package</Button>

                            <Link href="#" underline="hover" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontFamily: 'Public Sans, sans-serif', color: '#637381', fontSize: '0.875rem', gap: '8px' }}>
                                Read license <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-claira iconify iconify--carbon" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"></path></svg>
                            </Link>

                        </Stack>
                    </Paper>

                    <Paper sx={{
                        boxShadow: '-24px 24px 72px -8px rgba(145, 158, 171, 0.24)',
                        padding: '40px',
                        borderRadius: '16px',
                        py: '80px'
                    }}>
                        <Box sx={{ color: '#006C9C', background: 'rgba(0, 184, 217, 0.16)', borderRadius: '6px', fontSize: '12px', width: 'fit-content', padding: '2px 8px', fontWeight: 700, mb: '16px' }}>
                            POPULAR
                        </Box>
                        <Stack gap={'40px'}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography
                                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '600', color: '#212b36', fontSize: { md: '1.25rem', sm: '1.875rem', } }}>
                                    PLUS
                                </Typography>
                                <Stack direction={'row'}>
                                    <Typography
                                        sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '600', color: '#212b36', fontSize: { md: '1.5rem', sm: '1.25rem', } }}>
                                        $
                                    </Typography>

                                    <Typography
                                        sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '700', color: '#212b36', fontSize: { lg: '2rem', md: '1.875rem', sm: '1.65rem', } }}>
                                        99
                                    </Typography>
                                </Stack>
                            </Stack>

                            <Stack direction={'row'} gap={'10px'}>
                                <Box
                                    component="img"
                                    sx={{
                                        width: '20px',
                                        height: '20px'
                                    }}
                                    alt="JS"
                                    src="src/assets/images/ic_js.svg"
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        width: '20px',
                                        height: '20px'
                                    }}
                                    alt="JS"
                                    src="src/assets/images/ic_ts.svg"
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        width: '20px',
                                        height: '20px'
                                    }}
                                    alt="JS"
                                    src="src/assets/images/ic_figma.svg"
                                />
                            </Stack>


                            <Stack gap={'20px'}>
                                {
                                    arr2.map((value, index) => (
                                        <>

                                            {
                                                index < 6 ?

                                                    <Stack direction={'row'} gap={'12px'} key={index}>
                                                        <svg style={{ color: '#FA541C' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-rf2r4e iconify iconify--carbon" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415l-9 8.999z"></path><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"></path></svg>
                                                        <Typography
                                                            sx={{ fontFamily: 'Public Sans, sans-serif', fontWeight: '400', color: '#212b36', fontSize: '15px' }}>
                                                            {value}
                                                        </Typography>
                                                    </Stack>
                                                    :
                                                    <Stack direction={'row'} gap={'12px'} key={index}>
                                                        <svg style={{ color: '#919EAB' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-13xn2uu iconify iconify--carbon" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z"></path><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></path></svg>
                                                        <Typography
                                                            sx={{ fontFamily: 'Public Sans, sans-serif', fontWeight: '400', color: '#919EAB', fontSize: '15px' }}>
                                                            {value}
                                                        </Typography>
                                                    </Stack>

                                            }

                                            {index == 2 ? <Divider /> : ''}


                                        </>
                                    ))
                                }
                            </Stack>


                            <Button variant="contained" sx={{
                                display: 'flex',
                                gap: '2px',
                                borderRadius: '8px',
                                minWidth: 'auto',
                                color: '#fff',
                                padding: '8px 14px',
                                fontFamily: 'Public Sans, sans-serif',
                                fontSize: '15px',
                                textTransform: 'capitalize',
                                fontWeight: 600,
                                backgroundColor: '#212B36',
                                border: '1px solid #212b36',
                                boxShadow: 'none',
                                borderColor: '#919eab52',
                                '&:hover': {
                                    backgroundColor: '#454F5B',
                                    boxShadow: '0 0 0 0.5px currentColor',
                                },
                            }}>Choose Package</Button>

                            <Link href="#" underline="hover" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontFamily: 'Public Sans, sans-serif', color: '#637381', fontSize: '0.875rem', gap: '8px' }}>
                                Read license <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-claira iconify iconify--carbon" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"></path></svg>
                            </Link>

                        </Stack>
                    </Paper>


                    <Paper sx={{
                        boxShadow: '-8px 8px 24px -4px rgba(145, 158, 171, 0.08)',
                        padding: '40px',
                        borderRadius: '16px',

                    }}>
                        <Stack gap={'40px'}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Typography
                                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '600', color: '#212b36', fontSize: { md: '1.25rem', sm: '1.875rem', } }}>
                                    EXTENDED
                                </Typography>
                                <Stack direction={'row'}>
                                    <Typography
                                        sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '600', color: '#212b36', fontSize: { md: '1.5rem', sm: '1.25rem', } }}>
                                        $
                                    </Typography>

                                    <Typography
                                        sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '700', color: '#212b36', fontSize: { lg: '2rem', md: '1.875rem', sm: '1.65rem', } }}>
                                        249
                                    </Typography>
                                </Stack>
                            </Stack>


                            <Stack direction={'row'} gap={'10px'}>
                                <Box
                                    component="img"
                                    sx={{
                                        width: '20px',
                                        height: '20px'
                                    }}
                                    alt="JS"
                                    src="src/assets/images/ic_js.svg"
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        width: '20px',
                                        height: '20px'
                                    }}
                                    alt="JS"
                                    src="src/assets/images/ic_ts.svg"
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        width: '20px',
                                        height: '20px'
                                    }}
                                    alt="JS"
                                    src="src/assets/images/ic_figma.svg"
                                />
                            </Stack>




                            <Stack gap={'20px'}>
                                {
                                    arr2.map((value, index) => (
                                        <>

                                            <Stack direction={'row'} gap={'12px'} key={index}>
                                                <svg style={{ color: '#FA541C' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-rf2r4e iconify iconify--carbon" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415l-9 8.999z"></path><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"></path></svg>
                                                <Typography
                                                    sx={{ fontFamily: 'Public Sans, sans-serif', fontWeight: '400', color: '#212b36', fontSize: '15px' }}>
                                                    {value}
                                                </Typography>
                                            </Stack>

                                            {index == 2 ? <Divider /> : ''}

                                        </>
                                    ))
                                }
                            </Stack>


                            <Button variant="contained" sx={{
                                display: 'flex',
                                gap: '2px',
                                borderRadius: '8px',
                                minWidth: 'auto',
                                color: '#fff',
                                padding: '8px 14px',
                                fontFamily: 'Public Sans, sans-serif',
                                fontSize: '15px',
                                textTransform: 'capitalize',
                                fontWeight: 600,
                                backgroundColor: '#FA541C',
                                border: '1px solid #212b36',
                                boxShadow: 'none',
                                borderColor: '#919eab52',
                                '&:hover': {
                                    backgroundColor: '#B3200E',
                                    boxShadow: '0 8px 16px 0 rgba(250, 84, 28, 0.24)',
                                },
                            }}>Choose Package</Button>

                            <Link href="#" underline="hover" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontFamily: 'Public Sans, sans-serif', color: '#637381', fontSize: '0.875rem', gap: '8px' }}>
                                Read license <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-claira iconify iconify--carbon" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"></path></svg>
                            </Link>

                        </Stack>
                    </Paper>
                </Box>

            </Container>
        </>
    )
}

export default SixthSection
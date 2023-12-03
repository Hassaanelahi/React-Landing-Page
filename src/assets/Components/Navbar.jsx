import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useScrollTrigger from '@mui/material/useScrollTrigger';


const drawerWidth = 280;
const navItems = ['Home', 'Components', 'Pages', 'Docs'];

const preventDefault = (event) => event.preventDefault();


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,

    });

    return React.cloneElement(children, {
        sx: {
            backgroundColor: trigger ? "rgba(255, 255, 255, 0.8);" : "transparent",
            color: "#212b36",
            transition: trigger ? " height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" : "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: "none",
            height: trigger ? { lg: '64px', md: '64px', xs: '64px' } : { lg: '80px', md: '64px', xs: '64px' },
            justifyContent: 'center',
            backdropFilter: trigger ? 'blur(6px)' : "none"
        }
    });
}


function Navbar(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (

        <Box onClick={handleDrawerToggle}>

            <Typography sx={{ margin: '24px 20px', width: '75px' }}>
                <svg xmlns="http://www.w3.org/2000/svg " width="100%" height="100%" fill="none" viewBox="0 0 1080 288"><ellipse cx="996" cy="204" fill="#FA541C" rx="60" ry="60"></ellipse><path fill="currentColor" d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"></path></svg>
            </Typography>

            <List sx={{ '& li:nth-of-type(1)': { color: 'rgb(250, 84, 28)', backgroundColor: 'rgba(250, 84, 28, 0.08)' } }}>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'left', }}>
                            <ListItemText sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 600, my: '0px' }}>
                                {
                                    item === 'Pages' ? <>{item} <KeyboardArrowDownIcon fontSize="small" /></> : item
                                }
                            </ListItemText>
                        </ListItemButton>

                    </ListItem>
                ))}
                <Box sx={{ padding: '24px', }}>
                    <Button variant="contained" sx={{
                        borderRadius: '8px',
                        color: '#fff',
                        padding: '6px 12px',
                        fontFamily: 'Barlow, sans-serif',
                        textTransform: 'capitalize',
                        fontWeight: 600,
                        backgroundColor: '#212b36',
                        width: '100%',

                        '&:hover': {
                            backgroundColor: '#454f5b',
                        },
                    }}>Buy Now</Button>
                </Box>
            </List>

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;






    return (

        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CssBaseline />
                <ElevationScroll {...props}>
                    <AppBar
                        sx={{
                            backgroundColor: 'transparent',
                            color: '#212b36',
                            justifyContent: 'center',
                        }}
                    >
                        <Container >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <Typography
                                    sx={{ display: { sm: 'block' }, width: '75px' }}
                                    onClick={preventDefault}
                                >
                                    <Link href="#" sx={{ underline: "none", color: '#212b36' }} >
                                        <svg xmlns="http://www.w3.org/2000/svg " width="100%" height="100%" fill="none" viewBox="0 0 1080 288"><ellipse cx="996" cy="204" fill="#FA541C" rx="60" ry="60"></ellipse><path fill="currentColor" d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"></path></svg>
                                    </Link>
                                </Typography>

                                <Box
                                    sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        typography: 'body1',
                                        color: '#637381',
                                        gap: '10px',
                                        fontWeight: 500,
                                        fontSize: '15px',
                                        fontFamily: 'Barlow, sans-serif',
                                        '& > :not(style) ~ :not(style)': {
                                            ml: 2,
                                        },
                                    }}
                                    onClick={preventDefault}
                                    id="navLink"
                                >
                                    {navItems.map((item) => (
                                        <Link href="#" key={item} underline="none" color='#212b36'>
                                            {
                                                item === 'Pages' ? <>{item} <KeyboardArrowDownIcon fontSize="small" /></> : item
                                            }
                                        </Link>
                                    ))}
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    color: '#637381',
                                    gap: '10px'
                                }}>
                                    <Button sx={{ color: '#212b36', borderRadius: '50%', minWidth: 'auto' }}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon" width="20px" height="20px" viewBox="0 0 32 32"><path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"></path></svg></Button>
                                    <Button sx={{
                                        color: '#212b36', borderRadius: '50%', minWidth: 'auto', 
                                        animation: 'rotate 10s linear infinite', // 'rotate' is the animation name
                                        '@keyframes rotate': { // Define the animation
                                            '0%': { transform: 'rotate(0deg)' },
                                            '100%': { transform: 'rotate(360deg)' },
                                        },
                                    }} ><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon" width="20px" height="20px" viewBox="0 0 32 32"><path fill="currentColor" d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11.35 11.35 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.48 11.48 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11.35 11.35 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.48 11.48 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.86 8.86 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.36 9.36 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.86 8.86 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.36 9.36 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z"></path><path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6Zm0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4Z"></path></svg></Button>

                                <Button variant="contained" sx={{
                                    display: { xs: 'none', md: 'block' },
                                    borderRadius: '8px',
                                    minWidth: 'auto',
                                    color: '#fff',
                                    padding: '6px 12px',
                                    fontFamily: 'Barlow, sans-serif',
                                    textTransform: 'capitalize',
                                    fontWeight: 600,
                                    backgroundColor: '#212b36',
                                    // width: 'fit-content',
                                    '&:hover': {
                                        backgroundColor: '#454f5b',
                                    },
                                }}>Buy Now</Button>

                                <IconButton
                                    color="#212b36"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={handleDrawerToggle}
                                    sx={{ display: { md: 'none' } }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>

                        </Box>
                    </Container>
                </AppBar>

            </ElevationScroll>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(20px)' },

                    }}
                >
                    {drawer}
                </Drawer>
            </nav>


        </Box >
        </>
    );
}
export default Navbar;

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Slider from '@mui/material/Slider';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    fontFamily: 'Public Sans, sans-serif',
    '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
        background: '#fff',
    },
    '& .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
        backgroundColor: '#FA541C',
        opacity: 1,
    },
}));

const ThrSection = () => {

    // Circle Progress
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);


    // Tabs
    const [value, setValue] = React.useState(0);
    const tabshandleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [alignment, setAlignment] = React.useState('alignment left');
    const tooglebtnhandleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };


    const [Ratingvalue, setRatingValue] = React.useState(5);



    const [category, setcategory] = React.useState('Clothes');

    const handleChange = (event) => {
        setcategory(event.target.value);
    };


    return (
        <>
            <CssBaseline />
            <Container  sx={{overflow: 'hidden'}}>
                <Grid container spacing={{ md: 3, xs: 6 }} sx={{ justifyContent: {md:'space-between', xs: 'center'}, py: '60px' }}>

                    <Grid xs={12} md={4}>
                        <Box sx={{ paddingTop: '80px' }}>
                            <Stack spacing={5} sx={{ textAlign: { md: 'left', xs: 'center' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
                                <Typography
                                    variant="p"
                                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: '600', display: 'block', marginBottom: '20px', color: '#637381', fontSize: '12px', opacity: 0.7 }}>
                                    INTERFACE STARTER KIT
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{ fontFamily: 'Barlow, sans-serif', fontWeight: 'bolder', color: '#212b36', fontSize: { xs: '2rem', md: '3rem' } }}>

                                    Flexible Components
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{ fontFamily: 'Public Sans, sans-serif', color: '#637381' }}>

                                    Pre-set components are easy to customize and use. We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
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
                                    backgroundColor: 'white',
                                    border: '1px solid #212b36',
                                    width: 'fit-content',
                                    boxShadow: 'none',
                                    borderColor: '#919eab52',
                                    '&:hover': {
                                        backgroundColor: '#212b3614',
                                        boxShadow: '0 0 0 0.5px currentColor',
                                        borderColor: 'currentColor',
                                    },
                                }}>Browse Components <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-3o0h5k iconify iconify--carbon" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"></path></svg></Button>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid xs={12} md={7}>
                        <Stack gap={'40px'} sx={{ borderRadius: '24px', border: 'dashed 1px rgba(145, 158, 171, 0.2)', padding: { sm: '40px', xs: '24px' } }}>

                            <Stack sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: { md: '40px', xs: '24px' }
                            }}>

                                <Button variant="contained" sx={{
                                    display: 'flex',
                                    gap: '6px',
                                    borderRadius: '8px',
                                    minWidth: 'auto',
                                    color: 'white',
                                    padding: '8px 14px',
                                    fontFamily: 'Public Sans, sans-serif',
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 600,
                                    backgroundColor: '#FA541C',
                                    border: 'none',
                                    width: 'fit-content',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: '0 8px 16px 0 rgba(250, 84, 28, 0.24)',
                                        backgroundColor: '#B3200E',
                                    },
                                }}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon" width="18" height="18" viewBox="0 0 32 32"><path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"></path></svg> Add To Cart</Button>

                                <Button variant="contained" sx={{
                                    display: 'flex',
                                    gap: '6px',
                                    borderRadius: '25px',
                                    minWidth: 'auto',
                                    color: 'white',
                                    padding: '8px 14px',
                                    fontFamily: 'Public Sans, sans-serif',
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 600,
                                    backgroundColor: '#212B36',
                                    border: 'none',
                                    width: 'fit-content',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: '#454F5B',
                                    },
                                }}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-9uy14h iconify iconify--carbon" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m11 18l1.41 1.41L15 16.83V29h2V16.83l2.59 2.58L21 18l-5-5l-5 5z"></path><path fill="currentColor" d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22Z"></path></svg> Upload</Button>

                                <Button variant="contained" sx={{
                                    display: 'flex',
                                    gap: '6px',
                                    borderRadius: '25px',
                                    minWidth: 'auto',
                                    color: 'white',
                                    padding: '16px',
                                    fontFamily: 'Public Sans, sans-serif',
                                    fontSize: '15px',
                                    textTransform: 'capitalize',
                                    fontWeight: 600,
                                    backgroundColor: '#00B8D9',
                                    border: 'none',
                                    width: 'fit-content',
                                    boxShadow: '0 8px 16px 0 rgba(0, 184, 217, 0.24)',
                                    '&:hover': {
                                        backgroundColor: '#006C9C',
                                    },
                                }}><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M13 15v8l7-4l-7-4z"></path><path fill="currentColor" d="M26 28H6a2.002 2.002 0 0 1-2-2V12a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v14a2.002 2.002 0 0 1-2 2zM6 12v14h20V12zm0-6h20v2H6zm2-4h16v2H8z"></path></svg></Button>

                                <CircularProgress variant="determinate" value={progress} sx={{ color: '#FFAB00' }} />

                            </Stack>


                            <Stack
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: { md: '20px', xs: '24px' }
                                }}
                            >
                                <Tabs value={value} onChange={tabshandleChange} aria-label="Tabs" indicatorColor={'#212B36'}>
                                    <Tab disableRipple label="Angular"
                                        sx={{
                                            color: '#637381',
                                            textTransform: 'capitalize',
                                            minWidth: '48px',
                                            minHeight: '48px',
                                            padding: 0,
                                            fontWeight: 600,
                                            fontFamily: 'Public Sans, sans-serif',
                                            marginRight: { sm: '40px', xs: '24px' },
                                            '&.Mui-selected': {
                                                color: '#212b36',
                                            },
                                        }}
                                    />
                                    <Tab disableRipple label="React"
                                        sx={{
                                            color: '#637381',
                                            textTransform: 'capitalize',
                                            minWidth: '48px',
                                            minHeight: '48px',
                                            padding: 0,
                                            fontWeight: 600,
                                            fontFamily: 'Public Sans, sans-serif',
                                            marginRight: { sm: '40px', xs: '24px' },
                                            '&.Mui-selected': {
                                                color: '#212b36',
                                            },
                                        }}
                                    />
                                    <Tab disableRipple label="Vue"
                                        sx={{
                                            color: '#637381',
                                            textTransform: 'capitalize',
                                            minWidth: '48px',
                                            minHeight: '48px',
                                            padding: 0,
                                            fontWeight: 600,
                                            fontFamily: 'Public Sans, sans-serif',
                                            marginRight: { sm: '40px', xs: '24px' },
                                            '&.Mui-selected': {
                                                color: '#212b36',
                                            },
                                        }}
                                    />
                                </Tabs>

                                <ToggleButtonGroup
                                    sx={{
                                        border: 'solid 1px rgba(145, 158, 171, 0.08)',
                                        background: 'white',
                                        borderRadius: '8px',
                                    }}
                                    value={alignment}
                                    exclusive
                                    onChange={tooglebtnhandleChange}
                                    aria-label="Platform"
                                >
                                    <ToggleButton value="alignment left"
                                        sx={{
                                            color: '#637381',
                                            border: '1px solid rgba(145, 158, 171, 0.2)',
                                            padding: '11px',
                                            fontFamily: 'Public Sans, sans-serif',
                                            margin: '4px',
                                            '&.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
                                                borderRadius: '8px',
                                                borderColor: 'transparent',
                                            },
                                            '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
                                                borderRadius: '8px',
                                                borderColor: 'transparent',
                                            },
                                            '&.Mui-selected': {
                                                color: '#FA541C',
                                                backgroundColor: '#fa541c14',
                                            },
                                            '&.MuiToggleButtonGroup-grouped.Mui-selected:hover': {
                                                color: '#FA541C',
                                                backgroundColor: '#fa541c14',
                                            },
                                            '&:hover': {
                                                backgroundColor: '#fa541c14',
                                            },
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M26 26H11a2.002 2.002 0 0 1-2-2v-4a2.002 2.002 0 0 1 2-2h15a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2zm0-6.001L11 20v4h15zM18 14h-7a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2h7a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2zm0-6.001L11 8v4h7zM4 2h2v28H4z"></path></svg></ToggleButton>

                                    <ToggleButton value="alignment center"
                                        sx={{
                                            color: '#637381',
                                            border: '1px solid rgba(145, 158, 171, 0.2)',
                                            padding: '11px',
                                            fontFamily: 'Public Sans, sans-serif',
                                            margin: '4px',
                                            boxShadow: 'none',
                                            '&.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
                                                borderRadius: '8px',
                                                borderColor: 'transparent',
                                            },
                                            '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
                                                borderRadius: '8px',
                                                borderColor: 'transparent',
                                            },
                                            '&.Mui-selected': {
                                                color: '#FA541C',
                                                backgroundColor: '#fa541c14',
                                                boxShadow: 'none',
                                            },
                                            '&.MuiToggleButtonGroup-grouped.Mui-selected:hover': {
                                                color: '#FA541C',
                                                backgroundColor: '#fa541c14',
                                            },
                                            '&:hover': {
                                                backgroundColor: '#fa541c14',
                                            }
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M24 18h-7v-4h3a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2h-3V2h-2v4h-3a2.002 2.002 0 0 0-2 2v4a2.002 2.002 0 0 0 2 2h3v4H8a2.002 2.002 0 0 0-2 2v4a2.002 2.002 0 0 0 2 2h7v4h2v-4h7a2.002 2.002 0 0 0 2-2v-4a2.002 2.002 0 0 0-2-2ZM12 8h8v4h-8Zm12 16H8v-4h16Z"></path></svg></ToggleButton>

                                    <ToggleButton value="alignment right"
                                        sx={{
                                            color: '#637381',
                                            border: '1px solid rgba(145, 158, 171, 0.2)',
                                            padding: '11px',
                                            fontFamily: 'Public Sans, sans-serif',
                                            margin: '4px',
                                            '&.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
                                                borderRadius: '8px',
                                                borderColor: 'transparent',
                                            },
                                            '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
                                                borderRadius: '8px',
                                                borderColor: 'transparent',
                                            },
                                            '&.Mui-selected': {
                                                color: '#FA541C',
                                                backgroundColor: '#fa541c14',
                                            },
                                            '&.MuiToggleButtonGroup-grouped.Mui-selected:hover': {
                                                color: '#FA541C',
                                                backgroundColor: '#fa541c14',
                                            },
                                            '&:hover': {
                                                backgroundColor: '#fa541c14',
                                            }
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--carbon" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M4 24v-4a2.002 2.002 0 0 1 2-2h15a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2H6a2.002 2.002 0 0 1-2-2zm2 0h15v-4l-15-.001zm6-12V8a2.002 2.002 0 0 1 2-2h7a2.002 2.002 0 0 1 2 2v4a2.002 2.002 0 0 1-2 2h-7a2.002 2.002 0 0 1-2-2zm2 0h7V8l-7-.001zm14 18h-2V2h2z"></path></svg></ToggleButton>

                                </ToggleButtonGroup>


                                <Button disableRipple component={'div'} sx={{
                                    textTransform: 'capitalize',
                                    background: 'rgba(250, 84, 28, 0.16)',
                                    color: '#B3200E',
                                    fontFamily: 'Public Sans, sans-serif',
                                    padding: '4px 5px',
                                    fontSize: '12px',
                                    borderRadius: '8px',
                                    '&:hover': {
                                        background: 'rgba(250, 84, 28, 0.32)',
                                    }
                                }}>
                                    <Avatar sx={{
                                        width: 22,
                                        height: 22,
                                        fontSize: '0.7rem',
                                        color: '#FEE9D1',
                                        background: '#B3200E',
                                        marginRight: '4px',
                                        fontFamily: 'Public Sans, sans-serif',
                                    }}>P</Avatar>
                                    Pamela
                                    <Typography
                                        variant="span"
                                        sx={{
                                            fontSize: '18px',
                                            marginLeft: '4px',
                                            opacity: '0.48',
                                            '&:hover': {
                                                opacity: '1',
                                            }
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="MuiChip-deleteIcon MuiChip-deleteIconMedium MuiChip-deleteIconColorPrimary MuiChip-deleteIconSoftColorPrimary MuiBox-root css-1t9pz9x iconify iconify--solar" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10ZM8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path></svg>
                                    </Typography>
                                </Button>

                            </Stack>


                            <Stack sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: { md: '40px', xs: '24px' }
                            }}>

                                <Avatar alt="avatar 5" src="src/assets/images/avatar_5.jpg" sx={{ width: 64, height: 64 }} />

                                <AvatarGroup>
                                    <Avatar alt="avatar 1" src="src/assets/images/avatar_1.jpg" />
                                    <Avatar alt="avatar 2" src="src/assets/images/avatar_2.jpg" />
                                    <Avatar alt="avatar 3" src="src/assets/images/avatar_3.jpg" />
                                    <Avatar sx={{
                                        fontSize: '12px',
                                        color: '#B3200E',
                                        backgroundColor: '#FEE9D1',
                                        fontWeight: 600,
                                        fontFamily: 'Public Sans, sans-serif',
                                    }}>+5</Avatar>
                                </AvatarGroup>

                                <Tooltip title="Add" placement="top" arrow>
                                    <Button sx={{
                                        color: '#212B36',
                                        textTransform: 'capitalize',
                                        fontWeight: 600,
                                        fontFamily: 'Public Sans, sans-serif',
                                        borderRadius: '5px',
                                        '&:hover': {
                                            background: 'rgba(145, 158, 171, 0.08)'
                                        }
                                    }}>Hower Me</Button>
                                </Tooltip >

                                <Rating
                                    name="hover-feedback"
                                    value={Ratingvalue}
                                    precision={1}
                                    onChange={(event, newValue) => {
                                        setRatingValue(newValue);
                                    }}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                            </Stack>

                            <Stack sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: { md: '30px', xs: '24px' }
                            }}>

                                <Slider
                                    size="small"
                                    defaultValue={72}
                                    aria-label="Small"
                                    valueLabelDisplay="on"
                                    sx={{
                                        color: '#FA541C',
                                        width: { md: '50%', xs: '100%' },
                                        '& .MuiSlider-thumb': {
                                            boxShadow: "0px 0px 0px 8px rgba(250, 84, 28, 0.16)"
                                        }
                                    }}
                                />

                                <Alert
                                    onClose={() => { }}
                                    icon={
                                        <CheckCircleOutlineIcon fontSize="inherit" sx={{ color: '#36B37E' }} />
                                    }
                                    sx={{
                                        color: '#0A5554',
                                        backgroundColor: '#D8FBDE',
                                        fontFamily: 'Public Sans, sans-serif',
                                    }}
                                >
                                    This is a <strong>success</strong> alert
                                </Alert>
                            </Stack>


                            <Stack sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: { md: '40px', xs: '24px' }
                            }}>

                                <Card sx={{ maxWidth: 320, boxShadow: '-24px 24px 72px -8px rgba(145, 158, 171, 0.24)', borderRadius: '10px' }}>
                                    <CardHeader
                                        avatar={
                                            <Badge color="secondary"
                                                sx={{
                                                    '.MuiBadge-badge': {
                                                        transform: 'unset',
                                                        backgroundColor: '#36B37E'
                                                    },
                                                    fontFamily: 'Public Sans, sans-serif',
                                                }}
                                                variant="dot"
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                }}>
                                                <Avatar alt="avatar 5" src="src/assets/images/avatar_1.jpg" sx={{ width: 48, height: 48 }} />
                                            </Badge>
                                        }
                                        title="Jayvion Simon"
                                        subheader="California, United States"
                                    />
                                    <Box sx={{ px: '8px' }}>
                                        <CardMedia
                                            component="img"
                                            image="src/assets/images/cover_12.jpg"
                                            alt="Paella dish"
                                            sx={{
                                                borderRadius: '10px',
                                                height: '180px'
                                            }}
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary " sx={{
                                            fontFamily: 'Public Sans, sans-serif',
                                            color: '#637381'
                                        }}>
                                            Phasellus dolor. Fusce egestas elit eget lorem. Quisque id odio.
                                        </Typography>
                                    </CardContent>
                                    <Stack direction="row" sx={{ justifyContent: 'space-between', p: '10px' }}>

                                        <Checkbox sx={{ '&.Mui-checked': { color: '#FF5630' }, '&:hover': { background: 'rgba(255, 86, 48, 0.08)' }, color: '#637381' }} icon={<FavoriteIcon fontSize="small" />} checkedIcon={<Favorite fontSize="small" />} />

                                        <Box>
                                            <IconButton aria-label="share" sx={{ color: '#637381' }}>
                                                <ShareIcon fontSize="small" />
                                            </IconButton>

                                            <IconButton aria-label="share" sx={{ color: '#637381' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva" width="20" height="20" viewBox="0 0 24 24"><g id="iconifyReact1932"><g id="iconifyReact1933"><path id="iconifyReact1934" fill="currentColor" d="M19.07 4.93a10 10 0 0 0-16.28 11a1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09a10 10 0 0 0 11-16.28ZM8 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"></path></g></g></svg>
                                            </IconButton>
                                        </Box>
                                    </Stack>
                                </Card>

                                <Stack sx={{ gap: '20px' }} >
                                    <FormControlLabel
                                        control={<Android12Switch defaultChecked />}
                                        label="Switch"
                                    />

                                    <FormControlLabel sx={{
                                        fontFamily: 'Public Sans, sans-serif',
                                    }}
                                        control={<Checkbox defaultChecked
                                            sx={{
                                                '&.MuiButtonBase-root.MuiCheckbox-root.Mui-checked': {
                                                    color: '#FA541C'
                                                }
                                            }}
                                        />}
                                        label="Checkbox"
                                    />

                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio sx={{
                                            '&.MuiButtonBase-root.MuiRadio-root.Mui-checked': {
                                                color: '#FA541C'
                                            }
                                        }} />} label="Radio Button" />
                                    </RadioGroup>

                                    <TextField label="Full Name" variant="filled" defaultValue="Pamela Mclellan"
                                        sx={{
                                            '& .MuiFormLabel-root': {
                                                fontFamily: 'Public Sans, sans-serif',
                                                fontWeight: 600

                                            },
                                            '& .MuiInputBase-root': {
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(145, 158, 171, 0.08)',
                                                fontFamily: 'Public Sans, sans-serif',

                                            },
                                            '& .MuiInputBase-root:hover': {
                                                backgroundColor: 'rgba(145, 158, 171, 0.16)',

                                            },
                                            "& .MuiInputBase-root.MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
                                                borderBottom: "none"
                                            },
                                            "& .MuiInputBase-root:before": {
                                                borderBottom: "none"
                                            },
                                            "& .MuiInputBase-root:after": {
                                                borderBottom: "none"
                                            }

                                        }}
                                    />

                                    <FormControl variant="filled" sx={{
                                        '& .MuiFormLabel-root': {
                                            fontFamily: 'Public Sans, sans-serif',
                                            fontWeight: 600

                                        },
                                        '& .MuiInputBase-root': {
                                            borderRadius: '8px',
                                            backgroundColor: 'rgba(145, 158, 171, 0.08)',
                                            fontFamily: 'Public Sans, sans-serif',

                                        },
                                        '& .MuiInputBase-root:hover': {
                                            backgroundColor: 'rgba(145, 158, 171, 0.16)',

                                        },
                                        "& .MuiInputBase-root.MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
                                            borderBottom: "none"
                                        },
                                        "& .MuiInputBase-root:before": {
                                            borderBottom: "none"
                                        },
                                        "& .MuiInputBase-root:after": {
                                            borderBottom: "none"
                                        }

                                    }}>
                                        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={category}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'Clothes'} >Clothes</MenuItem>
                                            <MenuItem value={'Footwear'}>Footwear</MenuItem>
                                            <MenuItem value={'Jean'}>Jean</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>

                            </Stack>


                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ThrSection
import React, { useState, useEffect } from "react";
import { LinearProgress } from '@mui/material';


const ProgressBar = () => {

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollPosition / maxScroll) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return (
        <>
            <LinearProgress
                variant="determinate"
                value={scrollProgress}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                    background: 'transparent',
                    '& .MuiLinearProgress-bar':{

                        background: 'linear-gradient(135deg, #FDAB76 0%, #FA541C 100%)'
                    },
                }}
            />
        </>
    )
}

export default ProgressBar
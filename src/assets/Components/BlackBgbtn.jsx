import React from 'react'
import Button from '@mui/material/Button';

const BlackBgbtn = (props) => {
    return (
        <>
            <Button variant="contained" sx={{
                display: { xs: 'none', sm: 'block' },
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
            }}>{props.text}</Button>
        </>
    )
}

export default BlackBgbtn
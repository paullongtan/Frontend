import React from 'react';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate()

    return(
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1>Book Website</h1>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ marginLeft: 'auto' }}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    handleClose()
                    navigate('/LogIn')
                }}>LogIn</MenuItem>
                <MenuItem onClick={() => {
                    handleClose()
                    navigate('/SignUp')
                }}>SignUp</MenuItem>
                <MenuItem onClick={() => {
                    handleClose()
                    navigate('/')
                }}>Home</MenuItem>
            </Menu>
        </div>
    );
}

export default Navbar
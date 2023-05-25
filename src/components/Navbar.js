import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()

    return(
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1 onClick={() => { navigate("/"); }} style={{ marginLeft: '2%', cursor: "pointer" }}>世朋電影院</h1>
            <Button onClick={() => {}} sx={{ marginRight: '2%', marginTop: '1%', fontSize: "1.5rem", color: "#00BFFF" }}>
                LogIn
            </Button>
        </div>
    );
}

export default Navbar
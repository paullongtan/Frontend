import React from "react";
import { useState } from "react";
import { useTime } from "../containers/hooks/useTime";
import { useBook } from "../containers/hooks/useBook";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';

const CircleButton = styled(Button)`
  width: 60px;
  height: 60px;
  margin: 0 20px 0 20px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.palette.primary};
`;

const Choose = (ele, day) => {
    return ele == day
}

const Time = () => {
    const { movie, Introduce } = useTime()

    const { ShowBook } = useBook()



    const [day, setDay] = useState("5/20")
    const dates = ["5/20", "5/21", "5/22", "5/23", "5/24", "5/25", "5/26"]
    const [times, setTimes] = useState(Introduce()[day])
    const navigate = useNavigate()

    return (
        <>
            <div style={{display: 'flex', marginTop: '2%'}}>
                {dates.map((ele, i) => (
                    <CircleButton key={i} variant = {ele == day ? "contained" : "outlined"} onClick={() => {setDay(ele); setTimes(Introduce()[ele]);}}>{ele}</CircleButton>
                ))}
            </div>
            <List>
                {times ? times.map((ele, i) => (
                    <ListItem disablePadding key = {i} sx={{ backgroundColor: "#F0F0F0" }}>
                        <ListItemButton component="a" onClick={() => {navigate("/book"); ShowBook(movie, ele);}}>
                        <ListItemText primary={ele} />
                        </ListItemButton>
                    </ListItem>
                )) : <div>Not Found!</div>}
            </List>
        </>
    )
}

export default Time
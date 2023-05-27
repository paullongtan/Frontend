import React from "react";
import { useState } from "react";
import { useInfo } from "./hooks/useInfo";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';
import { useLocation } from 'react-router-dom';

const CircleButton = styled(Button)`
  width: 60px;
  height: 60px;
  margin: 0 20px 0 20px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.palette.primary};
`;

const get_dict_time = (alltimes) => {
    const length = alltimes.length
    let dict_of_time = {}
    for (let i = 0; i < length; i++){
        let month = alltimes[i].movie_starttime.getMonth()
        let day = alltimes[i].movie_starttime.getDate()
        let key = month.toString() + "/" + day.toString()
        if (dict_of_time.hasOwnProperty(key)){
            dict_of_time[key].push(alltimes[i])
        }
        else{
            dict_of_time[key] = [alltimes[i]]
        }
    }
    return dict_of_time
}

const get_first_day = (alltimes) => {
    const month = alltimes[0].movie_starttime.getMonth().toString()
    const day = alltimes[0].movie_starttime.getDate().toString()
    return month + "/" + day
}

const get_text = (element) => {
    const time = element.movie_starttime
    const hour = time.getHours().toString()
    const minute = time.getMinutes().toString().padStart(2, '0');
    return hour + ":" + minute
}

const Time = () => {
    const { getTime } = useInfo()

    const location = useLocation();
    const movie = (location.pathname + location.search).split("/")[1];
    const alltimes = getTime(movie).sort((a, b) => a.movie_starttime - b.movie_starttime)
    const dict_of_time = get_dict_time(alltimes)
    const dates = Object.keys(dict_of_time)

    const [day, setDay] = useState(get_first_day(alltimes))
    const [times, setTimes] = useState(dict_of_time[day])
    const navigate = useNavigate()

    return (
        <>
            <div style={{display: 'flex', marginTop: '2%'}}>
                {dates.map((ele, i) => (
                    <CircleButton key={i} variant = {ele === day ? "contained" : "outlined"} onClick={() => {setDay(ele); setTimes(dict_of_time[ele]);}}>{ele}</CircleButton>
                ))}
            </div>
            <List>
            {times ? times.map((ele, i) => (
                <div key={i} style={{ backgroundColor: "#F0F0F0" }}>
                    <div style={{ display: 'flex', height: 60, justifyContent: 'space-around', alignItems: 'center' }}>
                        <ListItemText primary={get_text(ele)} primaryTypographyProps={{ style: { fontSize: '20px' } }}/>
                        <Button onClick={() => navigate("../book")} sx={{fontSize: 20}}>去訂票</Button>
                    </div>
                </div>
                )) : <div>Not Found!</div>}
            </List>
        </>
    )
}

export default Time
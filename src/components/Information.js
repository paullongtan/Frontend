import React from "react";
import { useInfo } from "../containers/hooks/useInfo";
import { useLocation } from 'react-router-dom';

const Information = () => {
    const { getIntro } = useInfo()
    const location = useLocation();
    const movie = (location.pathname + location.search).slice(1);

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <h2>{getIntro(movie).title}</h2>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around', alignContent: 'center'}}>
                <div style={{width: '80%', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                    <img src={getIntro(movie).pic_url} alt="pic" style={{width: 360, height: 480}}></img>
                    <div style={{height: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 100, backgroundColor: "#E6E6FA", borderRadius: 30, boxShadow: '0 0 1em black',}}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '90%' }}>
                            <h3>電影簡介:</h3>
                        </div>
                        <div style={{ overflow: 'auto', width: '90%' }}>{getIntro(movie).description}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information
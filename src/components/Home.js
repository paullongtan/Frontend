import React from 'react';
import aqua from '../movies/aqua.jpg';
import avengers from '../movies/avengers.jpg';
import monkey from '../movies/super.jpg';
import fast from '../movies/fast.jpg';
import matrix from '../movies/matrix.jpg';
import { useNavigate } from 'react-router-dom';
import { useInfo } from '../containers/hooks/useInfo';
import { useTime } from '../containers/hooks/useTime';

const Show = () => {
    const navigate = useNavigate();

    const { ShowIntro } = useInfo()
    const { ShowTime } = useTime()

    const click = (src) => {
        navigate('/' + src + '/');
        ShowIntro(src)
        ShowTime(src)
    }
    
    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ width: 280, height: 365, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={aqua} style={{ width: 260, height: 345 }} onClick={() => {click("aqua")}}/>
            </div>
            <div style={{ width: 280, height: 365, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={avengers} style={{ width: 260, height: 345 }} onClick={() => {click("avengers")}}/>
            </div>
            <div style={{ width: 280, height: 365, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={fast} style={{ width: 260, height: 345 }} onClick={() => {click("fast")}}/>
            </div>
            <div style={{ width: 280, height: 365, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={monkey} style={{ width: 260, height: 345 }} onClick={() => {click("monkey")}}/>
            </div>
            <div style={{ width: 280, height: 365, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={matrix} style={{ width: 260, height: 345 }} onClick={() => {click("matrix")}}/>
            </div>
        </div>
    )
}

export default Show;
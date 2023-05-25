import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInfo } from '../containers/hooks/useInfo';

const Show = () => {
    const navigate = useNavigate();

    const { getAllMovies } = useInfo();
    const allmovies = getAllMovies()

    const click = (src) => {
        navigate(`/${src}`)
    }
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '80%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                {allmovies.map((ele, i) => (
                    <div style={{ width: 280, height: 365, display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={i}>
                        <img src={ele.pic_url} alt="" style={{ width: 260, height: 345, cursor: 'pointer' }} onClick={() => {click(ele.movie_id)}}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Show;
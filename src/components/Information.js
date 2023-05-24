import React from "react";
import { useState } from "react";
import { useInfo } from "../containers/hooks/useInfo";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Information = () => {
    const {Introduce} = useInfo()

    const navigate = useNavigate()

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '5%'}}>
                <div style={{width: '70%'}}>
                    {Introduce()}
                </div>
            </div>
        </>
    )
}

export default Information
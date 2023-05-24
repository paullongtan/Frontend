import React from "react";
import styled from 'styled-components';
import { useState } from "react";
import { useBook } from "../containers/hooks/useBook";

let books = []

const getColor = (number) => {
    if (number == 0)
        return "#00FA9A"
    else if (number == 1)
        return "#FFFF2C"
    else if (number == 2)
        return "#DC243C"
}

const StyledButton = styled.button`
  background-color: ${props => getColor(props.number)};
  color: white;
  cursor: pointer;
  padding: 20px 20px;
  border-radius: 20px;
  margin: 20px;
`;

const Square = ({ number, i, j }) => {
    const [num, setNum] = useState(number)

    const click = () => {
        if (num == 0){
            books.push(i+"_"+j)
            setNum(1)   
        }   
        else if (num == 1){
            books = books.filter(book => book !== i+"_"+j);
            setNum(0)
        }
    }

    return (
        <StyledButton number={num} onClick={click}/>
    )
}

const Seat = () => {
    const { Introduce } = useBook();
    const array = Introduce();
    

    return(
        <>
            {array.map((element, i) => 
                <div key = {i} style={{height: 60}}>
                    {element.map((ele, j) => 
                        <Square key = {i+j} number={ele} i={i} j={j}/>
                    )}
                </div>
            )}
        </>
    )
}

export default Seat
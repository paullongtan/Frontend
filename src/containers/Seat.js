import React from "react";
import styled from 'styled-components';
import { useState } from "react";
import { useInfo } from "./hooks/useInfo";
import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { Snackbar } from '@mui/material';
// import { useLocation } from "react-router-dom";

const getColor = (number) => {
    if (number === 0)
        return "#00BFFF"
        // return "#00FA9A"
    else if (number === 1)
        return "#FFFF2C"
    else if (number === 2)
        return "#EE2222"
        // return "#DC243C"
}

const StyledButton = styled.button`
  background-color: ${props => getColor(props.number)};
  cursor: pointer;
  padding: 10px 10px;
  border-radius: 50%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: 10px;
`;

const Unsee = styled.div`
    background-color: green
    cursor: pointer;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 5px;
`

const Seat = () => {
    const { getSeat, bookSeat } = useInfo()
    const [open, setOpen] = useState(false);

    const occupied = getSeat();

    const theme = useTheme();
    
    const navigate = useNavigate();
    let len_of_occupied = occupied.length

    const [array, setArray] = useState(() => {
        const initialArray = [];
        for (let i = 0; i < 10; i++) {
          initialArray.push([]);
          for (let j = 0; j < 20; j++) {
            initialArray[i].push(0);
          }
        }
        for (let k = 0; k < len_of_occupied; k++) {
          let id = occupied[k] - 1;
          let i = Math.floor(id / 20);
          let j = id % 20;
          initialArray[i][j] = 2;
        }
        return initialArray;
    });

    const [books, setBooks] = useState([])

    const clearSeat = () => {
        setBooks([])
        const updatedArray = [...array];
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 20; j++){
                if (updatedArray[i][j] === 1){
                    updatedArray[i][j] = 0
                }
            }
        }
        setArray(updatedArray)
    }

    const click = ( num, i, j ) => {
        const updatedArray = [...array];
        if (num === 0){
            setBooks([...books, i*20 + j + 1])
            updatedArray[i][j] = 1;
        }   
        else if (num === 1){
            setBooks(books.filter(book => book !== i*20 + j + 1))
            updatedArray[i][j] = 0;
        }
        setArray(updatedArray)
    }

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const sendBook = (books) => {
        if (books.length === 0){
            handleOpen()
        }
        else{
            bookSeat(books)
            navigate('..')
        }
    }

    const Blank = ({ele, i, j, click }) => {
        return(
            <>
                <Unsee />
                <StyledButton number={ele} i={i} j={j} width={15} height={15} onClick={() => {click(ele, i, j)}}/>
            </>
        )
    }
    
    return(
        <>
            <Snackbar
                open={open}
                onClose={handleClose}
                message="訂票不能為空"
                autoHideDuration={1500}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                <StyledButton width={5} height={5} number={0}/>
                <div>未售出</div>
                <StyledButton width={5} height={5} number={1}/>
                <div>您的位置</div>
                <StyledButton width={5} height={5} number={2}/>
                <div>已售出</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    {array.map((element, i) => (
                        (i % 10 === 4) ? 
                            <div key={"test"}>
                                <div key = {`blank-${i}`} style={{height: 45, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        {element.map((ele, j) => 
                                            <Unsee key = {`${i}-${j}`}/>
                                        )}
                                    </div>
                                <div key = {i} style={{height: 45, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    {element.map((ele, j) => 
                                        (j % 20 === 4 || j % 20 === 15) ? 
                                        <Blank key = {`blank-${i}-${j}`} ele={ele} i={i} j={j} click={click} />
                                        : <StyledButton key = {`square-${i}-${j}`} number={ele} i={i} j={j} width={15} height={15} onClick={() => {click(ele, i, j)}}/>
                                    )}
                                </div>
                            </div>
                            :
                            <div key = {i} style={{height: 45, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                {element.map((ele, j) => 
                                    (j % 20 === 4 || j % 20 === 15) ? 
                                    <Blank key = {`blank-${i}-${j}`} ele={ele} i={i} j={j} click={click}/>
                                    : <StyledButton key = {`square-${i}-${j}`} number={ele} i={i} j={j} width={15} height={15} onClick={() => {click(ele, i, j)}}/>
                                )}
                            </div>
                    ))}
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Button 
                    sx={{
                        backgroundColor: theme.palette.primary.main, 
                        color: "white",
                        marginRight: 10,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark
                        }
                    }}
                    onClick={() => { clearSeat() }}
                >重設場次</Button>
                <Button 
                    sx={{
                        backgroundColor: theme.palette.primary.main, 
                        color: "white",
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark
                        }
                    }}
                    onClick={() => { sendBook(books); }}
                >送出訂單</Button>
            </div>
        </>
    )
}

export default Seat
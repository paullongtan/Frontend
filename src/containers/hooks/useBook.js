import { createContext, useState, useContext } from "react";

const BookContext = createContext({
    ShowBook: () => {},
    Introduce: () => {},
})

const useBook = () => useContext(BookContext)

const BookProvider = (props) => {
    const [movie, setMovie] = useState("")
    const [time, setTime] = useState("")
    
    const Introduce = () => {
        switch (movie+"_"+time) {
            case "aqua_9:30":
                return [
                    [0, 2, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 0, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 2, 0, 2, 0],
                    [0, 2, 0, 2, 2, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "aqua_11:30":
                return [
                    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "aqua_15:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 2, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 2, 0, 2, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "aqua_22:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 0, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 2, 0, 0, 2, 2]
                ];
            case "avengers_9:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 0, 0, 2, 2],
                    [0, 2, 0, 0, 2, 0, 0, 2, 2, 0],
                    [2, 2, 2, 0, 0, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
                    [0, 2, 0, 2, 0, 2, 2, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "avengers_12:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "avengers_14:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "avengers_22:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "fast_8:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "fast_12:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "fast_15:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "fast_22:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "matrix_9:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "matrix_11:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "matrix_15:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "matrix_22:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "monkey_9:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "monkey_11:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "monkey_17:30":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [],
                    [2, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 0, 0, 2, 0, 2],
                    [2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 0, 2, 2]
                ];
            case "monkey_22:00":
                return [
                    [0, 0, 0, 2, 0, 0, 0, 0, 2, 2],
                    [0, 0, 2, 2, 0, 2, 0, 0, 2, 2],
                    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [],
                    [0, 0, 2, 0, 0, 2, 2, 0, 2, 2],
                    [0, 2, 0, 0, 2, 2, 0, 2, 2, 0],
                    [2, 2, 2, 0, 2, 2, 0, 2, 0, 2],
                    [2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 2, 0, 2, 2, 2, 0, 2, 2, 2]
                ];
            default:
              return [];
        }
    }

    const ShowBook = (movie, time) => {
        setMovie(movie)
        setTime(time)
    }

    return (
        <BookContext.Provider
            value={{
                movie, setMovie, time, setTime, Introduce, ShowBook
            }}
            {...props}
        />
    );
}

export { BookProvider, useBook }
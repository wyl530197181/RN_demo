
/*export const addTodo = (num) => {
    return {
        type: 'INCREMENT',
        num: num,
    }
}
export const decTodo = (num) => {
    return {
        type: 'DECREMENT',
        num: num,
    }
}
export const updateText = (text) => {
    return {
        type: 'TEXT_UPDATE',
        text: text,
    }
}  
export const addTo = (num) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'INCREMENT',
            num: num
        })
    }
}*/
export const decTodo = (num) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'DECEMENT',
            num: num
        })
    }
}
export const updateText = (text) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'TEXT_UPDATE',
            text: text,
        })
    }
}

const initialState = {c: 0};

//state store model
export const calculate = (state = initialState, action) => {

    switch (action.type) {
        case 'PLUS':
            return {c: state.c + action.number};//action.number 相当于传过来的参数
        case 'REDUCE':
            return {c: state.c - action.number};
        default:
            return state;
    }

};

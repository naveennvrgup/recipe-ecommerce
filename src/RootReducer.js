export const CHANGE_MSG='CHANGE_MSG'

export const changeMsg = () => dispatch => {
    dispatch({
        type:CHANGE_MSG
    })
}

const initialState={
    "msg":"hello"
}

export default (state=initialState, action) => {
    switch(action.type){
        case CHANGE_MSG:
            return {
                "msg":"naveen"
            }
        default: 
            return initialState
    }    
}
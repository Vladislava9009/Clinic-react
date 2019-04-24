import {SET_ERROR, REMOVE_ERROR} from "../actions/types"
const initislState ={
    error:'',
    userFailed: false
};

export default function(state=initislState,action){
    switch(action.type){
        case SET_ERROR:
            return{
                ...state,
                userFailed: true,
                error:action.payload
            }
        case REMOVE_ERROR:
        return{
            ...state,
            userFailed: false,
            error:''
        }

        default:
        return state;
    }
}
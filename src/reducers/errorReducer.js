import {SET_ERROR} from "../actions/types"
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

        default:
        return state;
    }
}
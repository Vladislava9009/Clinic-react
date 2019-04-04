import {SET_CURRENT_USER} from "../actions/types"
const initislState ={
    isAuthentificated:false,
    user:{}
};

export default function(state=initislState,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthentificated:true,
                user:action.payload
            }

        default:
        return state;
    }
}
import {SET_USERS_APPOINTMENTS} from "../actions/types"
const initislState ={
    appointents:[]
};

export default function(state=initislState,action){
    switch(action.type){
        case SET_USERS_APPOINTMENTS:

            return{
                ...state,
                appointents:action.payload
            }

        default:
        return state;
    }
}
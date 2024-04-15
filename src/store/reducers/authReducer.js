import { LOGIN, LOGOUT } from "../actions/authActions"

const initialState = {
    user: false
}

export default function authReducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
            case LOGOUT:
                return {
                    ...state,
                    user: false 
                };   
                
            default:
                return state    
   
    }
}
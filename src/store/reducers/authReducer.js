import { LOGIN, LOGOUT } from "../actions/authActions"

const storedUser = localStorage.getItem('user');
const initialState = {
    user: storedUser ? JSON.parse(storedUser)  : false  
}

export default function authReducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            localStorage.setItem('user', JSON.stringify(action.payload))
            
            return {
                ...state,
                user: action.payload
            };
            case LOGOUT:
                localStorage.removeItem('user')
                return {
                    ...state,
                    user: false 
                };   
                
            default:
                return state    
   
    }
}
import {ADDUSER,GETUSER} from '../actions/types'

const initialeState = []

const authReducer = (state = initialeState,action)=>{
     if(action.type === ADDUSER){
        return [...state,action.payload]
    }
    else if(action.type === GETUSER){
        return action.payload;
    }
    return state
}
export default authReducer
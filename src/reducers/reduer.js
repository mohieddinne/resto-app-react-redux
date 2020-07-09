import {GETITEMS,DELETEITEMS,PUTITEMS} from '../actions/types'
const initisalState = [] 

const reducer = (state = initisalState , action)=>{
    if (action.type === GETITEMS) {
        return action.payload
    }
    else if (action.type === ADDITEMS){
        return [...state,action.payload]
    }
    else if (action.type === DELETEITEMS){
        return [...state,action.payload]
    }
    else if (action.type === PUTITEMS){
        return [...state,action.payload]
    }
   
    return state
    

}

export default reducer
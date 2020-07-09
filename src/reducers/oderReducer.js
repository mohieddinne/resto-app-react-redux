import {GETCMD,ADDCMD,DELETECMD} from '../actions/types'
const initisalState = []

const panierReducer = (state = initisalState , action)=>{
    if (action.type === GETCMD) {
        return action.payload
    }
    else if (action.type === ADDCMD) {
        return action.payload
    }
    else if (action.type === DELETECMD){
        return [...state,action.payload]
    }
    
    
    return state
    

}


export default panierReducer
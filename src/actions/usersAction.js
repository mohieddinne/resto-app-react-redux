import {GETUSER, ADDUSER} from "./types"
import Axios from "axios"
export const getAllUser = (payload) =>({
  type : GETUSER,
  payload        
});
export const getUserFromApi=()=> {
return (dispatch) =>
Axios.get('http://localhost:3000/users')
    .then((res) =>{dispatch(getAllUser(res.data))
    console.log('ici get user donners',res.data)}
);


};
export const addUser = (payload)=>({
  type : ADDUSER,
  payload
})

export const postUserToApi = (res) =>{
  return(dispatch)=>(
        Axios.post('http://localhost:3000/users',res)
          .then((res) =>dispatch(addUser(res.data)))
          );
}
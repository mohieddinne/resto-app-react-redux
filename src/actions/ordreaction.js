import {GETCMD,ADDCMD,DELETECMD} from "./types"

import Axios from "axios"


/* =========pour panier======= */
export const getAllCommande = (payload) =>({
    type : GETCMD,
    payload        
});
export function getCommandeFromApi(){
return (dispatch) =>
  Axios.get('http://localhost:3000/orders')
        .then((res) =>dispatch(getAllCommande(res.data))
  );
};
export const addCommand = (payload)=>({
    type : ADDCMD,
    payload
})

export function postCommandToApi (el) {
    return(dispatch)=>(
          Axios.post('http://localhost:3000/orders',el)
            .then((res) =>dispatch(addCommand(res.data)),window.location.reload(true))
            );
}
export const deleteCommand = (payload) =>({
    type : DELETECMD,
    payload,
})
export function deleteCommandFromApi(res){
    return (dispatch)=>(
          Axios.delete(`http://localhost:3000/Orders/${res}`)
                .then((res)=>dispatch(deleteCommand(res.data)),window.location.reload(true))
    )
}
/* =======fin panier */
import {GET_ALL_FOODS,DELETE_FOOD, EDIT_FOOD, ADD_FOOD } from './types';
import Axios from 'axios';

/* get all user */

export const getallfoods = (payload) => ({
  type: GET_ALL_FOODS,
  payload,
});

export function getFoodsfromApi() {
  return (dispatch) =>
    Axios.get('http://localhost:3000/foods').then((res) =>
      dispatch(getallfoods(res.data))
    );
}
//DELETEFOOD

export const deleteFOOD = (payload) => ({
    type: DELETE_FOOD,
    payload,
  });
  export function deleteFoodsfromApi(id) {
    return (dispatch) =>
      Axios.delete(`http://localhost:3000/foods/${id}`).then((res) =>
        dispatch(deleteFOOD(res.data))
      )
     
  }

  // edit food 
  export const editFood =(payload)=> ({
type : EDIT_FOOD,
payload,
  });

  export function EditFoodInApi(el){
    return (dispatch) =>
    Axios.patch("http://localhost:3000/foods/"+el.id,el).then((res)=>{ 
    
        window.location.reload()
      });
 
  }
  //
  export const addfood = (payload) => ({
    type: ADD_FOOD,
    payload,
  });
  export function AddFoodInApi(el){
    return (dispatch) =>
    Axios.post("http://localhost:3000/foods",el).then((res)=>{ 
    dispatch(addfood(res.data))
        window.location.reload()
      });
    }
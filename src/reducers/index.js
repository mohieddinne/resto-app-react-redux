import { combineReducers } from 'redux';
import usersReducer from './usersReducers';
import FoodReducer from './FoodReducer';
import panierReducer from "./oderReducer"


const allReducers = combineReducers({
  users: usersReducer,
  foods:FoodReducer,
  panier:panierReducer,

});

export default allReducers;


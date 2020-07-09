import { GET_ALL_FOODS ,DELETE_FOOD,EDIT_FOOD, ADD_FOOD} from '../actions/types';
const initialState = [];

export default function FoodReducer(state = initialState, action) {
  if (action.type === GET_ALL_FOODS) {
    return action.payload;
  }
  if (action.type === DELETE_FOOD) {
    return state.filter((food) => food.id !== action.payload);
    
  }
  if (action.type === EDIT_FOOD){
      return [...state,action.payload];
  }
  if (action.type === ADD_FOOD) {
    return [action.payload, ...state];
  }
  return state;
}

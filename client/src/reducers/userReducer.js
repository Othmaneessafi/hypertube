import {
  UPDATE_USER_SUCCESS,
  UPDATE_IMAGE
} from "../actions/userAction";


import { CLEAR_USER_INFORMATION } from '../actions/logoutAction';
import { EDIT_INFO } from '../actions/profileAction';

export default function (state = null, action) {
 
    switch (action.type) {
      case EDIT_INFO:
        {
          return {...state, user:action.data};
        }
      case UPDATE_USER_SUCCESS:
        {
          return action.data;
        }
      case CLEAR_USER_INFORMATION:
        return null;
      case UPDATE_IMAGE:
        {
          console.log(action.data)
          return {...state,image:action.data}; 
        }
        
      default:
        return state;
    }
}
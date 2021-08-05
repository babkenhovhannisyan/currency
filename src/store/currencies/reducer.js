import {
    REQUEST_SENT,
    ADD_ERROR,
    GET_MAIN_DATA_SUCCESS,
    REMOVE_CURRENCY,
    ADD_CURRENCY
  } from './types';
  import initialState from './state';
  
  const todoList = (state = initialState, action) => {
      switch(action.type) {
        case GET_MAIN_DATA_SUCCESS:
          const ratesObj = action.payload
          const objKeys = Object.keys(ratesObj)
          const ratesArr = objKeys.map(item => {
            return {
              name: item,
              value: Math.round(ratesObj[item])
            }
          })

          return {
            ...state,
            loading: false,
            data: ratesArr,
          }
        case ADD_CURRENCY:
          return {
            ...state,
            data: [action.payload, ...state.data]
          };
        case REMOVE_CURRENCY:
          const newItems = [...state.data].filter(item => item.name !== action.payload);
          return {
            ...state,
            data: newItems
          };
        case REQUEST_SENT:
          return {
              ...state,
              loading: true
          };
        case ADD_ERROR:
          return {
              ...state,
              errorData: action.payload
          };
        default:
          return state;
      }
  }
  
  export default todoList;
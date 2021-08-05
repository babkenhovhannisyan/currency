const items = JSON.parse(localStorage.getItem('currencies'));

const initialState = {
   data: items || [],
   loading: false,
   errorData: {},
};

export default initialState;
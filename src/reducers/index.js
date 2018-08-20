
const reducer = (state = {}, action) => {
  switch (action.type) {
     case 'GET_NEWS':
        return { ...state, loading: true };
     case 'NEWS_RECEIVED':
        return { ...state, news: action.data, loading: false }
     default: 
        return state;
   }
};
export default reducer;
const reducer = (state = 1, action) => {
  switch (action.type) {
    case 'setCurrent':
      return action.payload;

    default:
      return state;
  }
};

export default reducer;

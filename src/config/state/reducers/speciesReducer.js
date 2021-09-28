const stateGlobal = {
  isLoading: true,
  data: [],
};

const reducer = (state = stateGlobal, action) => {
  switch (action.type) {
    case 'getSpecies':
      return {
        data: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;

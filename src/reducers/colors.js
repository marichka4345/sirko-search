const colors = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COLOR':
      return [
        ...state,
        action.color
      ]
    default:
      return state
  }
};

export default colors;

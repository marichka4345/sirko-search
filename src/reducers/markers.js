let counter = 1;

const markers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MARKER':
      return [
        ...state,
        { ...action.marker, id: counter++ }
      ]
    case 'REMOVE_MARKER':
      return state.filter(marker => marker.id !== action.id)
    default:
      return state
  }
};

export default markers;

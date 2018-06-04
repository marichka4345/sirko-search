const filters = (state = [], action) => {
  switch (action.type) {
    case 'SET_FILTER': {
      let isFound = false;
      let values = state.map(filter => {
        if (filter.name === action.filter.name) {
          isFound = true;
          return { ...filter, values: [...filter.values, action.filter.value] };
        }
        return filter;
      });
      if (!isFound) {
        values = [
          ...state,
          { name: action.filter.name, values: [action.filter.value] }
        ];
      }
      return values;
    }
    case 'REMOVE_FILTER':
      return state
        .map(
          item =>
            item.name === action.filter.name
              ? {
                  ...item,
                  values: item.values.filter(i => i !== action.filter.value)
                }
              : item
        )
        .filter(item => item.values.length);
    default:
      return state;
  }
};

export default filters;

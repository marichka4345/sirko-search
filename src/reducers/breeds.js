const breeds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BREED': 
      return state.map(species => 
        (species.name === action.species)
        ? {...species, breeds: [...species.breeds, action.breed]}
        : species
      )
    case 'ADD_SPECIES':
      return [
        ...state,
        { name: action.species, breeds: [] }
      ]
    default:
      return state
  }
};

export default breeds;

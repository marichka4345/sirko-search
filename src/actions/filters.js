export const SET_FILTER = (filter) => ({
  type: 'SET_FILTER',
  filter
});

export const REMOVE_FILTER = (filter) => ({
  type: 'REMOVE_FILTER',
  filter
});

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_BY_TYPE: 'SHOW_BY_TYPE',
  SHOW_BY_SPECIES: 'SHOW_BY_SPECIES',
  SHOW_BY_BREED: 'SHOW_BY_BREED',
  SHOW_BY_COLOR: 'SHOW_BY_COLOR'
}
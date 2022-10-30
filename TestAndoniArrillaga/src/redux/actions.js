export const SET_ANIMALS = 'SET_ANIMALS';

export const setAnimals = animal => dispatch => {
  dispatch({
    type: SET_ANIMALS,
    payload: animal,
  });
};

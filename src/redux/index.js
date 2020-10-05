export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export const createReducer = (initialState, reducerMap) => (
  state = initialState,
  action = {},
) => {
  const reducer = reducerMap[action.type];
  return reducer ? reducer(state, action.payload) : state;
};

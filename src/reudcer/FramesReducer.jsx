export const SELECTED_DOT = "SELECTED_DOT";

export const initialState = {
  selectedWhite: false,
  selectedBlack: false,
  selectedGray: false,
  selectedGreen: false,
  selectedPink: false,
  selectedRainbow: false,
  selectedSky: false,
  selectedYellow: false,
};

export function framesReducer(state = initialState, action) {
  switch (action.type) {
    case SELECTED_DOT:
      return Object.fromEntries(Object.keys(state).map((key) => [key, key === action.payload]));
    default:
      return state;
  }
}

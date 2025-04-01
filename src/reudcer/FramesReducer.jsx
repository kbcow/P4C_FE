const SELECTED_DOT = "SELECTED_DOT";
const SELECTED_EFFECT = "SELECTED_EFFECT";

export const setSelectedDot = (dot) => ({ type: SELECTED_DOT, payload: dot });
export const setSelectedEffect = (effect) => ({
  type: SELECTED_EFFECT,
  payload: effect,
});
console.log("setSelectedDot", setSelectedDot);
export const initialState = {
  selectedDot: "selectedBlack",
  selectedEffect: "selectedRainbow",
};

export function framesReducer(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case SELECTED_DOT:
      return {
        ...state,
        selectedDot: action.payload,
      };
    case SELECTED_EFFECT:
      return {
        ...state,
        selectedEffect: action.payload,
      };
    default:
      return state;
  }
}

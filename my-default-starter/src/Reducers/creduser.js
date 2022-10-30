import * as types from "./cactiontypes";

const initial = {
  heors: { hero1: { btn1: { count: 1 } } }
};

export const reduser = (state = initial, { type, payload }) => {
  switch (type) {
    case types.INCREMENT_COUNT: {
      // console.log(" incremant");
      return {
        ...state,
        heors: {
          ...state.heors,
          hero1: {
            ...state.heors.hero1,
            btn1: {
              ...state.heors.hero1.btn1,
              count: state.heors.hero1.btn1.count + 1
            }
          }
        }
      };
    }
    case types.DECREMENT_COUNT: {
      return {
        ...state,
        heors: {
          ...state.heors,
          hero1: {
            ...state.heors.hero1,
            btn1: {
              ...state.heors.hero1.btn1,
              count: state.heors.hero1.btn1.count - 1
            }
          }
        }
      };
    }

    default:
      return state;
  }
};

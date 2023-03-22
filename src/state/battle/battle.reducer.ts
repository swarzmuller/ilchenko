const initialState = {
  selectedLanguage: "All",
  loading: true,
  repos: [],
  error: null,
};

export const battleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    default: {
      return state;
    }
  }
};

const initialState = {
  selectedLanguage: "All",
  loading: true,
  repos: [],
  error: null,
};

export const popularReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_REPOS":
      return {
        ...state,
        loading: false,
        repos: action,
      };

    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

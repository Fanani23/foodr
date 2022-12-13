const initialState = {
  user: {
    id: "",
    email: "",
    username: "",
    photo: "",
    phone: "",
    token: "",
  },
  isLoading: false,
};

const userReducers = (state = initialState, action) => {
  if (action.type === "LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "LOGIN_SUCCESS") {
    return {
      user: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default userReducers;

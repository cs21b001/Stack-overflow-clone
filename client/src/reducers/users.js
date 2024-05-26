const userReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
    case "UPDATE_PROFILE":
      return state.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    default:
      return state;
  }
};

export default userReducer;

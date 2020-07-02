const books = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_BOOK":
      console.log("2a", action);
      return [
        ...state,
        {
          id: action.id,
          title: action.title
        }
      ];
    case "REMOVE_BOOK":
      console.log("del", action);

      // return state.map(book => (book.id === action.id ? { ...book } : todo));
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default books;

// import getId from "../utils/getId";

export const addBook = title => ({
  type: "ADD_BOOK",
  id: Date.now(),
  title
});

export const removeBook = id => ({
  type: "REMOVE_BOOK",
  id
});

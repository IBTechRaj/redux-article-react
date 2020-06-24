import React from "react";
// import PropTypes from "prop-types";

const Book = props => {
  const { book, removeBook } = props;
  const handleRemoveBook = () => removeBook(book.id);
  // console.log(todo.text, "hh");
  return (
    <div>
      <div>{book.title}</div>
      {/* <div>{book.category}</div> */}
      <div>
        <button type="button" onClick={handleRemoveBook} className="remove">
          Remove
        </button>
      </div>
    </div>
  );
};

// Todo.propTypes = {
//   book: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired
//   }).isRequired,
//   removeBook: PropTypes.func.isRequired
// };

export default Book;

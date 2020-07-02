import React from "react";

const Book = props => {
  const { book, removeBook } = props;
  const handleRemoveBook = () => removeBook(book.id);

  return (
    <div>
      <div>
        {book.title} <button onClick={handleRemoveBook}>Delete</button>
      </div>
    </div>
  );
};

export default Book;

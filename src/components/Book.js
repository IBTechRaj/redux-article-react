import React from "react";

const Book = props => {
  const { book } = props;
  return (
    <div>
      <div>
        {book.title} <button onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Book;

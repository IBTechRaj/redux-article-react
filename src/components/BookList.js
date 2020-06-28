import React from "react";
import Book from "./Book";

const BookList = props => {
  return (
    <div>
      {props.books.map(book => (
        <ul key={book.id.toString()}>
          <Book book={book} onDelete={() => props.removeBook(book.id)} />
        </ul>
      ))}
    </div>
  );
};

export default BookList;

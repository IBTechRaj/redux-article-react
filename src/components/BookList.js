import React from "react";

// export default class BookList extends React.Component {
const BookList = props => {
  return (
    <ul>
      {props.books.map(book => (
        <div>{book}</div>
      ))}
    </ul>
  );
};
export default BookList;

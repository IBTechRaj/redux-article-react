import React from "react";

// export default class BookList extends React.Component {
const BookList = props => {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   books: this.props.books
  //   // };
  // }

  // render() {
  // let looks = [];
  // looks = this.props.books;
  // console.log("3", looks[0]);
  return (
    <ul>
      <h2>{props.books.title}</h2>
      {props.books.map(book => ({ book }))}
    </ul>
  );
  // }
};
export default BookList;

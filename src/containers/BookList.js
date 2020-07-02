import React from "react";
import Book from "../components/Book";

//redux
import { connect } from "react-redux";
import { removeBook } from "../actions";

function mapStateToProps(state) {
  const { books } = state;
  // console.log("1b", books);
  return { books };
}

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id))
});

const BookList = ({ books, removeBook }) => {
  // books = { books };
  return (
    <div>
      here
      {books.map(book => (
        <ul key={book.id}>
          {/* <Book book={book} onDelete={() => removeBook(book.id)} /> */}
          <Book book={book} removeBook={removeBook} />
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

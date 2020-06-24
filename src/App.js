import React from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

class App extends React.Component {
  state = {
    books: []
  };

  addBook = book => {
    this.setState(state => ({
      books: [book, ...state.books]
    }));
  };

  render() {
    // let books = [];
    // let books = this.state.books;
    return (
      <div>
        <h1> React to Redux</h1>
        <BookForm onSubmit={this.addBook} />
        <BookList books={this.state.books} />
        <h5> {console.log("1", this.state.books)}</h5>
      </div>
    );
  }
}

export default App;
//bookName="" onSubmit={this.addBook}

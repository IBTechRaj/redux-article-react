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
  removeBook = id => {
    this.setState({
      books: this.state.books.filter(book => book.id !== id)
    });
  };

  render() {
    return (
      <div>
        <h1> React to Redux</h1>
        <BookForm onSubmit={this.addBook} />
        <BookList books={this.state.books} removeBook={this.removeBook} />
      </div>
    );
  }
}

export default App;

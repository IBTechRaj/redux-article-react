import React from "react";
import BookForm from "../containers/BookForm";
import BookList from "../containers/BookList";

// class App extends React.Component {
const App = () => (
  // state = {
  //   books: []
  // };

  // addBook = book => {
  //   this.setState(state => ({
  //     books: [book, ...state.books]
  //   }));
  // };
  // removeBook = id => {
  //   this.setState({
  //     books: this.state.books.filter(book => book.id !== id)
  //   });
  // };

  // render() {
  // return (
  <div>
    <h1> This is Redux</h1>
    {/* <BookForm onSubmit={this.addBook} /> */}
    <BookList />
    <BookForm />
    {/* <BookList books={this.state.books} removeBook={this.removeBook} /> */}
  </div>
  // );
  // }
);

export default App;

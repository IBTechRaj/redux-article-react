import React from "react";
// import { connect } from "react-redux";
// import { createBook } from "../actions";
// import CATEGORIES from "../utils/categories";
// import PropTypes from "prop-types";

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };

    this.handleChange = this.handleChange.bind(this);
    // this.addBook = this.addBook.bind(this);
    // this.addBook = this.addBook.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value

      //[event.target.name]: event.target.value
      //in the form name='title'

      //value: e.target.value
    });
  }

  handleSubmit(book) {
    // e.preventDefault();
    // const { title } = this.state;
    // const { createBook } = this.props;
    // console.log("1", title, "2", category);
    if (book) {
      this.props.addBook(book);
      console.log(book);
      // console.log("1", title, "2", category);
      // createBook(title, category);
      this.setState({
        value: ""
      });
    }
  }

  render() {
    // console.log("1", title, "2", category);
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            value={this.state.title} // ok
            onChange={this.handleChange}
            placeholder="Book Title"
          />
          {/* <select
            className="twenty-five"
            name="category"
            value={category}
            onChange={this.handleChange}
            id=""
          >
            <option defaultValue="">Choose a category</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select> */}
          <button type="submit" onClick={this.handleSubmit}>
            Add Book
          </button>
        </form>
      </div>
    );
  }
}
// BooksForm.propTypes = {
//   createBook: PropTypes.func.isRequired
// };
export default BookForm;
// connect( null, { createBook } )( BooksForm );

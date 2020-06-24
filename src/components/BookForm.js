import React from "react";

export default class BookForm extends React.Component {
  constructor() {
    super();
    this.state = { title: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.title);
    event.preventDefault();
    this.props.onSubmit({
      title: this.state.title
    });
    this.setState({
      title: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          name="title"
          placeholder="Book Title"
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
        <h1>{this.state.title}</h1>
      </form>
    );
  }
}

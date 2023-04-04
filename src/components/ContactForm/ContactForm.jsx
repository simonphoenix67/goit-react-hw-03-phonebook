import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class ContactForm extends Component {

  state = {
    name: '',
    number: '',
  };

   handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;

     const isNameExist = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

     if (isNameExist) {
       alert(`${name} is already in contacts`);
       return;
    }

    this.props.onSubmit({ name, number });
    // this.reset();
    this.setState({ name: '', number: '' });
  };

    reset = () => {
    this.setState({ name: '', number: '' });
  };


  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

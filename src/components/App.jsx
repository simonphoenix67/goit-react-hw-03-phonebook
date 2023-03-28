import { render } from "@testing-library/react";
import React, { Component } from "react";
import { nanoid } from 'nanoid';
// model.id = nanoid()

export class App extends Component {

  state = {
  contacts: [],
  name: ''
  }

   handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
  event.preventDefault();
  const { name, contacts } = this.state;
  const newContact = {
    id: nanoid(),
    name: name
  };
  this.setState({
    contacts: [...contacts, newContact],
    name: ''
  });
    //  console.log(this.state.name);
}

  render() {

    return (
      <>
         <form action="">
       <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={this.state.name}
        onChange={this.handleNameChange}
        />
        <button type="submit">Add contact</button>
        </form>


      </>

  )
 }


};

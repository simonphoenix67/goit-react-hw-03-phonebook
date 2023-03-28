import { render } from "@testing-library/react";
import React, { Component } from "react";
import { nanoid } from 'nanoid';
// model.id = nanoid()
import {ContactList} from './contacts/ContactList';

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

    handleAddContact = () => {
    const { name, contacts } = this.state;
    const newContact = { id: nanoid(), name };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: ''
    });
  }

  render() {
    const { contacts } = this.state;

    return (
      <>
         <form onSubmit={this.handleSubmit}>
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
          <label htmlFor="name">Number:</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
/>
        <button type="submit">Add contact</button>
        </form>
        <ContactList contacts={this.state.contacts} />
        {/* <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul> */}

      </>

  )
 }


};

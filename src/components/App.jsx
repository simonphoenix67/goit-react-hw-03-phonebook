import React, { Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm';
import {Filter} from './filter/filter';
import { ContactList } from './contacts/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };


  addContact = ({ name, number }) => {

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isContactExists = this.state.contacts.some(
      i => (i.name.toLowerCase() === contact.name.toLowerCase() && i.number === contact.number)
    );

    if (isContactExists) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }

 };

  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contacts={this.state.contacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}


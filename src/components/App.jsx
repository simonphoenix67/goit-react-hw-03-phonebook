// import { render } from "@testing-library/react";
// import React, { Component } from "react";
// import { nanoid } from 'nanoid';
// // model.id = nanoid()
// import {ContactList} from './contacts/ContactList';

// export class App extends Component {

//  state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: '',
//   name: '',
//   number: ''
//  }




//    handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//    }

//   handleNumberChange = (event) => {
//     this.setState({ number: event.target.value });
//   }

//   handleSubmit = (event) => {
//   event.preventDefault();
//   const { name, number, contacts } = this.state;
//   const newContact = {
//     id: nanoid(),
//     name,
//     number
//   };
//   this.setState({
//     contacts: [...contacts, newContact],
//     name: '',
//     number: ''
//   });
//     //  console.log(this.state.name);
//   }

//     handleAddContact = () => {
//     const { name, contacts } = this.state;
//     const newContact = { id: nanoid(), name };
//     this.setState({
//       contacts: [...contacts, newContact],
//       name: '',
//       number: ''
//     });
//     }

//    handleFilterChange = (event) => {
//     this.setState({ filter: event.target.value });
//   }

//   render() {
//     const { contacts, filter, name, number } = this.state;
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     )

//     return (
//       <>
//          <form onSubmit={this.handleSubmit}>
//        <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         value={this.state.name}
//         onChange={this.handleNameChange}
//           />
//           <label htmlFor="name">Number:</label>
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
// />
//         <button type="submit">Add contact</button>
//         </form>
//         <label htmlFor="filter">Find contacts by name:</label>
//         <input
//           type="text"
//           name="filter"
//           value={filter}
//           onChange={this.handleFilterChange}
//         />
//         <ContactList contacts={filteredContacts} />
//         {/* <ul>
//           {contacts.map(contact => (
//             <li key={contact.id}>{contact.name}</li>
//           ))}
//         </ul> */}

//       </>

//   )
//  }


// };


import React, { Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm';
import {Filter} from './filter/filter';
import {ContactList} from './contacts/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
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

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}


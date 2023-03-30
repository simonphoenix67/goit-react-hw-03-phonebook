// import React from "react";
// import { Component } from "react";

// export class ContactList extends Component {
//   render() {
//     const { contacts } = this.props;

//     return (
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>{contact.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }


import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};


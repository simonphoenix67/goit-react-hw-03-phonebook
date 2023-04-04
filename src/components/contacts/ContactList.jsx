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

// _____________________________________________________________________

// import React from 'react';
// import PropTypes from 'prop-types';

// export const ContactList = ({ contacts, deleteContact }) => (
//   <ul>
//     {contacts.map((contact) => (
//       <li key={contact.id}>
//         <p>
//           {contact.name}: {contact.number}
//         </p>
//         <button type="button" onClick={() => deleteContact(contact.id)}>
//             Del
//           </button>
//       </li>

//     ))}
//   </ul>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

//______________________________________________

import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => deleteContact(id)}>
            Del
          </button>
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


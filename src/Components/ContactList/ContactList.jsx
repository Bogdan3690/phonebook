export const ContactList = ({ filterContacts, handleDelete }) => {
  return (
    <ul>
      {filterContacts.map((contact) => {
        return (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button onClick={() => handleDelete(contact.id)}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

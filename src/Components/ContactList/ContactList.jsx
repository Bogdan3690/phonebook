export const ContactList = ({filterContacts}) => {
    return (
                <ul>
          {filterContacts.map((contact) => {
            return <li key={contact.id}>
              {contact.name} : {contact.number}
            </li>
          })}
        </ul>
    )
}
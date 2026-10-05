import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts]
    }));
    this.reset()
  };

  reset = (e) => {
    this.setState({
      name: '',
      number: '',
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  }

  getContactsByName = (e) => {
    const {filter, contacts} = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  handleDelete = (id) => {
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id)
  }));
}

  render() {
    const { name, number, filter, contacts} = this.state;
    const filterContacts = this.getContactsByName()

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            Name
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label> Number
            <input
              type="tel"
              value={number}
              name="number"
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
    {contacts.length > 0 && (
      <>
      <Filter filter={filter} changeFilter={this.changeFilter}/>
        <ContactList filterContacts={filterContacts}
        handleDelete={this.handleDelete}/>
        </>
    )}
      {contacts.length === 0 && (
        <p>No contacts</p>
      )}
      </div>
    );
  }
}

export default App;

import { Component } from "react";
import "./App.css";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";
import { ContactForm } from "./Components/ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleSubmit = (newContact) => {
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts]
    }));
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
    const {filter, contacts} = this.state;
    const filterContacts = this.getContactsByName()

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit}/>
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

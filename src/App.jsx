import { Component } from "react";
import "./App.css";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";
import { ContactForm } from "./Components/ContactForm/ContactForm";

const STORAGEDATA = 'contacts'

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

  componentDidMount(){
    const savedContacts = localStorage.getItem(STORAGEDATA)
    console.log(savedContacts);
    if(savedContacts){
      try{
        const parsedContacts = JSON.parse(savedContacts)
        this.setState({contacts: parsedContacts})
      }
      catch(error){
        console.log(error);
        this.setState({contacts: [] })
      }
    }
    }

    


  componentDidUpdate(_, prevState){
    const prevContacts = prevState.contacts
    const currentContacts = this.state.contacts
    console.log(currentContacts)
    console.log(JSON.stringify(currentContacts))
    if(prevContacts !== currentContacts){
      localStorage.setItem(STORAGEDATA, JSON.stringify(currentContacts))
    }
  }



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

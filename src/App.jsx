import { Component } from "react";
import { nanoid } from 'nanoid'
import "./App.css";

class App extends Component {

state = {
  contacts: [],
  name: ''
}

 handleSubmit = (e) => {
  e.preventDefault()
     const newContact = {
      name: this.state.name,
      id: nanoid(),
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
      name: "",
    }));
  };
  
  handleChange = (e) => {
    const {name, value} = e.target
   this.setState({[name]: value })
  }

  render() {
    
    const {name} = this.state

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Name 
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
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            return(
            <li key={contact.id}>
              {contact.name}
              </li>
              )})}
        </ul>
      </div>
    );
  }}

export default App;

import { nanoid } from "nanoid";
import { Component } from "react";

export class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    }

      handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

      reset = (e) => {
    this.setState({
      name: '',
      number: '',
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

        const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.props.onSubmit(newContact)
    
    this.reset()
  }
    render() {

            const {name, number} = this.state;

  return (
        <form onSubmit={this.handleSubmit}>
          <label>
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

  );
}}
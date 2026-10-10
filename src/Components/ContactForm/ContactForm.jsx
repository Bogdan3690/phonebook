import { nanoid } from "nanoid";
import { Component } from "react";
import { Button, Form, Input, Label } from "./ContactForm.styled"

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
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label> Number
            <Input
              type="tel"
              value={number}
              name="number"
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button  type="submit">Add contact</Button>
        </Form>

  );
}}
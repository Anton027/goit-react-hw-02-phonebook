import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid'
// import { ContactForm } from "./ContactForm/ContactForm";

export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: '',

  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  handleChange = evnt => {
        console.log(evnt.currentTarget.value);
        const { name, value } = evnt.currentTarget
        this.setState({
        // name: evnt.currentTarget.value,
            [name] : value
        })
    }

    handleSubmitForm = e => {
        e.preventDefault();
        const { contacts, name } = this.state;

        contacts.push({name, id: nanoid()});

      console.log(this.state);
      this.reset()

    }
  formSubmitHandler = data => {
    console.log(data);
  }

  render() {
    // let nameContact = "";
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm onSubmit={this.formSubmitHandler} /> */}
        <form onSubmit={this.handleSubmitForm}>
                <label>
                    Name
                    <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                </label>
                {/* <input type="password" name="password" /> */}
                <button type="submit">Add contact</button>
            </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li>{}</li>
          </ul>
        </div>
        <GlobalStyle />
      </div>
      
    );
  }
}

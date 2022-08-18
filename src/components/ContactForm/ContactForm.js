import React, { Component } from "react";
import { nanoid } from 'nanoid'

class ContactForm extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
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
        const { contacts, name, number } = this.state;
        contacts.push({name, number, id: nanoid()});
        console.log(this.state);

        this.reset()

    }

    render() {
        return (
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
        )
    }
}

export default ContactForm;
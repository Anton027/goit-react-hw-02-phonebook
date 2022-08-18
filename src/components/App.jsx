import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';

import Filter from "./Filter";
import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  

  handleChange = evnt => {
        console.log(evnt.currentTarget.value);
        const { name, value } = evnt.currentTarget
        this.setState({
          [name] : value
        })
    }
  
  handleChangeFilter = e => {
    console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
  };

  formSubmitHandler = data => {
    console.log(data);
  }

  getVisibleNameFilter = () => {
    const { filter,contacts } = this.state
    const normalFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    )
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    const filterName = this.getVisibleNameFilter();
    return (
      
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleChangeFilter} />
          <ul>
            <ContactsList contacts={filterName} onDelContact={this.deleteContact} />
          </ul>
        </div>
        <GlobalStyle />
      </div>
    );
  }
}

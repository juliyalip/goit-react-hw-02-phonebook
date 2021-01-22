import { Component } from "react";
import "./index.css";
import Contacts from "./component/Contacts";
import Filter from "./component/Filter";
import Form from "./component/Form";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleAddContact = (newContact) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  handleCheckUnicue = (name) => {
    const { contacts } = this.state;
    const duplicete = !!contacts.find((contact) => contact.name === name);
    duplicete && alert("Contact is already axist");
    return !duplicete;
  };

  hangleDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <>
        <h1>Phonebook</h1>

        <div className="container">
          <Form
            onAdd={this.handleAddContact}
            onCheckUnigue={this.handleCheckUnicue}
          />

          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changleFilter} />
          <Contacts persons={visibleContacts} onDelete={this.hangleDelete} />
        </div>
      </>
    );
  }
}

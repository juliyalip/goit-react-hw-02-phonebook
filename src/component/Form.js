import { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

import s from "./form.module.css";

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  static propTypes = {
    handleChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
    validateForm: PropTypes.func,
    reset: PropTypes.func,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;
    const isValedeForm = this.validateForm();
    if (!isValedeForm) return;
    onAdd({ id: shortid.generate(), name, number });
    this.reset();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnigue } = this.props;

    if (!name || !number) {
      alert("filed is empti");
      return false;
    }
    return onCheckUnigue(name);
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit} className={s.form}>
        <label className={s.input}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="enter name"
            onChange={this.handleChange}
          />
        </label>
        <label className={s.input}>
          Number
          <input
            type="text"
            name="number"
            value={number}
            placeholder="enter number"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

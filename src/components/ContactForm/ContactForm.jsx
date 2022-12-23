import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  submitForm = evt => {
    evt.preventDefault();
    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <form className={css.phonebook__form} onSubmit={this.submitForm}>
          <label className={css.phonebook__formLabel}>
            Name
            <input
              className={css.phonebook__formInput}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.inputChange}
            />
          </label>
          <label className={css.phonebook__formLabel}>
            Number
            <input
              className={css.phonebook__formInput}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.inputChange}
            />
          </label>
          <button className={css.phonebook__formButton} type="submit">
            Add to Contacts
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";
import style from "./contact.module.css";

const Contacts = ({ persons, onDelete }) => (
  <ul>
    {persons.map(({ id, name, number }) => (
      <li key={id} className={style.contactItem}>
        <p>
          {name} {number}
        </p>
        <button
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;

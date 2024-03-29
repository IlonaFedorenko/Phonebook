import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { selectorfilteredContacts } from '../../redux/contacts/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectorfilteredContacts);
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filterContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>
            {name}:{number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => handleDeleteContact(id)}
            value="delete"
          >
            DELETE CONTACT
          </button>
        </li>
      ))}
      
    </ul>
  );
}

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

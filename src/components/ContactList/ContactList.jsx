import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

import ContactItem from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <p className={css.message}>No contacts in phonebook.</p>
      )}
    </ul>
  );
};
export default ContactList;

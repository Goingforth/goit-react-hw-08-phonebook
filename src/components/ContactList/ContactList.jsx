import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

import ContactItem from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/contacts/selectors';

import { Typography } from '@mui/material';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          display: { xs: 'none', md: 'flex' },
          mt: 2,
          mb: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Contacts list
      </Typography>

      <ul className={css.list}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))
        ) : (
          <p className={css.message}>No contacts in phonebook.</p>
        )}
      </ul>
    </>
  );
};
export default ContactList;

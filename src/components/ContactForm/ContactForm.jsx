import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations';

import { selectNameContacts } from 'redux/contacts/selectors';

import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

//import { toast } from 'react-toastify';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsName = useSelector(selectNameContacts);
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.phone.value;

    contactsName.includes(name)
      ? // ? toast.error(`${name} is already in contacts`)
        alert(`${name} is already in contacts`)
      : // <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
        // <Stack sx={{ width: '100%' }} spacing={2}>
        //   <Alert severity="warning">
        //     <AlertTitle>Warning</AlertTitle>
        //     This is a warning alert — <strong>check it out!</strong>
        //   </Alert>
        // </Stack>
        dispatch(addContact({ name, number }));

    form.reset();
  };

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          display: { xs: 'none', md: 'flex' },
          mt: 3,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Enter a new contact
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: { xs: 'flex', alignItems: 'center', gap: 20 } }}>
          <div>
            <TextField
              label="Name"
              type="text"
              name="name"
              size="small"
              variant="standard"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>

          <div>
            <TextField
              label="Number"
              type="tel"
              name="phone"
              size="small"
              variant="standard"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>

          <div>
            <Button
              variant="contained"
              type="submit"
              sx={{ my: 2, color: 'white', display: 'block', ml: 6 }}
            >
              Add contact
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
};
export default ContactForm;

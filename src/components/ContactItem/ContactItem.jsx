import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

import css from './Contactitem.module.css';
const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <Typography>{name}:</Typography>
      <Typography>{number}</Typography>

      <DeleteIcon
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      />
    </li>
  );
};
export default ContactItem;

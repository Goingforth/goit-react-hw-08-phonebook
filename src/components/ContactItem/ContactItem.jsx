import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
//import css from './Contactitem.module.css';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    // <li className={css.item}>
    <li>
      <span>{name}:</span> <span>{number}</span>
      <IconButton aria-label="delete">
        <DeleteIcon
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        />
      </IconButton>
    </li>
  );
};
export default ContactItem;

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './Contactitem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <span>{name}:</span> <span>{number}</span>
      <button
        className={css.buttonDelete}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;

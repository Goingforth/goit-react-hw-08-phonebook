import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import css from './Contactitem.module.css';
const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <Box>
        <Typography>{name}:</Typography>
      </Box>
      <Box
        sx={{
          display: {
            xs: 'flex',
            alignItems: 'center',
            gap: 80,
            justifyContent: 'space-between',
          },
        }}
      >
        <Typography>{number}</Typography>
        <DeleteIcon
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        />
      </Box>
    </li>
  );
};
export default ContactItem;
{
  /* <li className={css.item}>
  <Typography>{name}:</Typography>
  <Typography>{number}</Typography>

  <DeleteIcon
    onClick={() => {
      dispatch(deleteContact(id));
    }}
  />
</li>; */
}

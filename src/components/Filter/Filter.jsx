import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = evt => {
    dispatch(updateFilter(evt.target.value));
  };
  return (
    <div>
      <h4 className={css.titleFind}>Find contacts by name</h4>
      <input
        className={css.FieldFind}
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;

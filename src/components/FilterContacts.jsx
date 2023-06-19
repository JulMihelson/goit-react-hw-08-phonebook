import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selector';
import { applyFilter } from '../redux/pbSlice';

const FilterContacts = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={event => dispatch(applyFilter(event.target.value))}
      />
    </>
  );
};

export default FilterContacts;

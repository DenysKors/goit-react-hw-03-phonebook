import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label className={css.phonebook__filterLabel}>
      Find contacts by name
      <input
        className={css.phonebook__filterInput}
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

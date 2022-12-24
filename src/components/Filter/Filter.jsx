import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={onFilterChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

import { FILTER } from "../../constans/filter.constans";
import  { Wrapper } from "./Filter.styled.js"
import PropTypes from "prop-types";

export const Filter = ({ setSelectedSortOption }) => {
  const handleOnChange = (evt) => {
    setSelectedSortOption(evt.target.value);
  };
 

  return (
    <Wrapper>
      <label htmlFor="sort-select">Filter:</label>
      <select name="sort" id="sort-select" onChange={handleOnChange}>
        {Object.entries(FILTER).map(([id, value]) => (
          <option value={value} key={id}>
            {value}
          </option>
        ))}
        
      </select>
    </Wrapper>
  );
};

Filter.propTypes = {
  setSelectedSortOption: PropTypes.func.isRequired,
};

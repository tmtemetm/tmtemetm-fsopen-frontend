const Filter = ({ filterName, handleFilterNameChange }) => (
  <div>
    filter shown with&nbsp;
    <input
      value={filterName}
      onChange={handleFilterNameChange}
    />
  </div>
)

export default Filter

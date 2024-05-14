const PersonForm = ({
  newName,
  handleNewNameChange,
  newNumber,
  handleNewNumberChange,
  addName
}) => (
  <form onSubmit={addName}>
    <div>
      name:&nbsp;
      <input
        value={newName}
        onChange={handleNewNameChange}
      />
    </div>
    <div>
      number:&nbsp;
      <input
        value={newNumber}
        onChange={handleNewNumberChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm

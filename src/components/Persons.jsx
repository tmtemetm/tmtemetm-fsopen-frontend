const Person = ({ person, handleDelete }) => (
  <div>
    {person.name} {person.number}&nbsp;
    <button onClick={() => handleDelete(person)}>
      delete
    </button>
  </div>
)

const Persons = ({ persons, filterName, handleDelete }) => {
  const filteredPersons = filterName.length === 0
    ? persons
    : persons.filter(person =>
      person.name.toLowerCase()
        .includes(filterName.toLowerCase()))

  return (
    <div>
      {filteredPersons.map(person =>
        <Person
          key={person.id}
          person={person}
          handleDelete={handleDelete}
        />
      )}
    </div>
  )
}

export default Persons

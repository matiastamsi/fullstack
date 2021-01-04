import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNew = (event) => {
    event.preventDefault()
    if (persons.filter(p => p.name === newName).length > 0) {
      window.alert(`${newName} is already added to phonebook`)
      return;
    }
    if (persons.filter(p => p.number === newNumber).length > 0) {
      window.alert(`${newNumber} is already added to phonebook`)
      return;
    }

    const newObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
  
    setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNew}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { persons.map(person =>
        <Person key={person.id} name={person.name} number={person.number}/>)}
    </div>
  )

}

export default App
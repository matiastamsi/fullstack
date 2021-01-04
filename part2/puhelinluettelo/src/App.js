import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearchWord, setNewSearchWord] = useState('')

  const addNew = (event) => {
    event.preventDefault()
    if (persons.filter(p => p.name === newName).length > 0) {
      window.alert(`${newName} is already added to phonebook`)
      return;
    } else if (persons.filter(p => p.number === newNumber).length > 0) {
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
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearchWord(event.target.value)
  }

  const personsToShow = newSearchWord === ''
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(newSearchWord.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newSearchWord= {newSearchWord} handleSearchChange= {handleSearchChange}/>

      <h3>Add a new</h3>

      <PersonForm addNew={addNew} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>

      <Persons persons={personsToShow} />

    </div>
  )

}

export default App
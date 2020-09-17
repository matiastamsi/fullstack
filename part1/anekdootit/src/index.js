import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * 6))
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

  const randomAnecdote = () => setSelected(Math.floor(Math.random() * 6))

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  function findMostPopular() {
    let max = 0
    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > votes[max]) {
        max = i
      }
    }
    return max
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes </p>
      <button onClick={vote}>
        vote
      </button>
      <button onClick={randomAnecdote}>
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[findMostPopular()]}
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
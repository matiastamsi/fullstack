import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part name={course.parts[0].name} count={course.parts[0].exercises} />
        <Part name={course.parts[1].name} count={course.parts[1].exercises} />
        <Part name={course.parts[2].name} count={course.parts[2].exercises} />
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <p>{props.name} {props.count}</p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.parts[0].exercises
          + props.parts[1].exercises
          + props.parts[2].exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
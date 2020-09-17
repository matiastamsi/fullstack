import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

  const goodLine =  {StatisticLine}
  goodLine.text = "good"
  goodLine.value = props.good
  const neutralLine = { StatisticLine }
  neutralLine.text = "neutral"
  neutralLine.value = props.neutral
  const badLine = { StatisticLine }
  badLine.text = "bad"
  badLine.value = props.bad
  const allLine = { StatisticLine }
  allLine.text = "all"
  allLine.value = props.all
  const averageLine = { StatisticLine }
  averageLine.text = "average"
  averageLine.value = props.average
  const positiveLine = { StatisticLine }
  positiveLine.text = "positive"
  positiveLine.value = props.positive

  if (props.all === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{goodLine.text}</td><td>{goodLine.value}</td>
          </tr>
          <tr>
            <td>{neutralLine.text}</td><td>{neutralLine.value}</td>
          </tr>
          <tr>
            <td>{badLine.text}</td><td>{badLine.value}</td>
          </tr>
          <tr>
            <td>{allLine.text}</td><td>{allLine.value}</td>
          </tr>
          <tr>
            <td>{averageLine.text}</td><td>{averageLine.value}</td>
          </tr>
          <tr>
            <td>{positiveLine.text}</td><td>{positiveLine.value}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Button = (props) => (
  <button onClick={props.function}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  const text = props.text
  const value = props.value
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good * 1 + bad * -1) / all
  const positive = good / all * 100 + "%"

  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)

  return (
    <>
      <h1>give feedback</h1>
      <Button function={increaseGoodByOne} text="good" />
      <Button function={increaseNeutralByOne} text="neutral" />
      <Button function={increaseBadByOne} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive} />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
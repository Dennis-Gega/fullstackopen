import { useState } from 'react'


const StatisticLine = ({ text, value }) => {
    return <p>{text} {value}</p>
}
const Statistics = (props) => {
    if (props.all === 0) {
        return (
            <>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </>
        ) 
    } else {
        return (
            <>
                <StatisticLine text={'good'} value={props.good} />
                <StatisticLine text={'neutral'} value={props.neutral} />
                <StatisticLine text={'bad'} value={props.bad} />
                <StatisticLine text={'all'} value={props.all} />
                <StatisticLine text={'average'} value={props.average} />
                <StatisticLine text={'positive'} value={props.positive} />
            </>
        )
    }
}
  
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good => good += 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral => neutral += 1)
  }
  const handleBad = () => {
    setBad(bad => bad += 1)
  }

  return (
    <div>
        <h1>give feedback</h1>
        <div>
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
        </div>
        <h1>statistics</h1>
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            all={good + neutral + bad}
            average={(good - bad) / (good + neutral + bad)}
            positive={good / (good + neutral + bad)}
        />
    </div>
  )
}

export default App
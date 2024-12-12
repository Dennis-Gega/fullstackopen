import { useState } from 'react'
import Statistics from "./Statistics.jsx";
import Button from "./Button.jsx";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {setGood(prev => prev + 1)}
    const handleNeutral = () => {setNeutral(prev => prev + 1)}
    const handleBad = () => {setBad(prev => prev + 1)}

    return (
        <div>
            <h2>give feedback</h2>
            <Button handleButton={handleGood} text='good'></Button>
            <Button handleButton={handleNeutral} text='neutral'></Button>
            <Button handleButton={handleBad} text='bad'></Button>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
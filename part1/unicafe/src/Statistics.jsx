import StatisticLine from "./StatisticLine.jsx";

const Statistics = ({good, neutral, bad}) => {

    const all = good + neutral + bad
    const total = good - bad
    const average = all > 0 ? total / all : 0
    const positive = all > 0 ? good / all : 0

    if (all <= 0) {
        return (
            <>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </>
        )
    } else {
        return (
            <>
                <h2>statistics</h2>
                <StatisticLine text='good' value={good} />
                <StatisticLine text='neutral' value={neutral} />
                <StatisticLine text='bad' value={bad} />
                <StatisticLine text='all' value={all} />
                <StatisticLine text='average' value={average} />
                <StatisticLine text='positive' value={positive} />
            </>
        )
    }
}

export default Statistics
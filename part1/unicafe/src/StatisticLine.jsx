const StatisticLine = ({text, value}) => {
    return (
        <table>
            <tr>
                <th>{text}</th>
                <th>{value}</th>
            </tr>
        </table>
    )
}

export default StatisticLine
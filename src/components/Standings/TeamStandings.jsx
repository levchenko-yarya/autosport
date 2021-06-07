const TeamStandings = (props) => {
    let races = props.races.map(r => <th>{r.race}</th>)
    let teams = props.teams.map(d =>
        <tr>
            <td>{d.team}</td>
            <td>{d.r1}</td>
            <td>{d.r2}</td>
            <td>{d.r3}</td>
            <td>{d.r4}</td>
            <td>{d.r5}</td>
            <td>{d.r6}</td>
            <td>{d.total}</td>
        </tr>
    )

    return (
        <>
            <h4>Командный чемпионат</h4>
            <table border='2'>
                <tr>
                    <th>Команда</th>
                    {races}
                    <th>Итого</th>
                </tr>
                {teams}
            </table>
        </>
    )
}

export default TeamStandings
const TeamStandings = () => {

    let racesData = [
        {id: 1, race: 'Бахрейн'},
        {id: 1, race: 'Имола'},
        {id: 1, race: 'Португалия'},
        {id: 1, race: 'Испания'},
        {id: 1, race: 'Монако'}
    ]
    let races = racesData.map(r => <th>{r.race}</th>)

    let teamData = [
        {id: 1, team: 'Ред Булл', r1: '28', r2: '25', r3: '30', r4: '29', r5: '37', total: '149'},
        {id: 2, team: 'Мерседес', r1: '41', r2: '19', r3: '41', r4: '40', r5: '7', total: '148'},
        {id: 3, team: 'Макларен', r1: '18', r2: '23', r3: '12', r4: '12', r5: '15', total: '80'},
        {id: 4, team: 'Феррари', r1: '12', r2: '22', r3: '8', r4: '18', r5: '18', total: '78'},
        {id: 5, team: 'Астон Мартин', r1: '1', r2: '4', r3: '-', r4: '-', r5: '14', total: '19'},
        {id: 6, team: 'Альфа Таури', r1: '2', r2: '6', r3: '1', r4: '1', r5: '8', total: '18'},
        {id: 7, team: 'Альпин', r1: '-', r2: '3', r3: '10', r4: '2', r5: '2', total: '17'},
        {id: 8, team: 'Альфа Ромео', r1: '-', r2: '-', r3: '-', r4: '-', r5: '1', total: '1'},
        {id: 9, team: 'Вильямс', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', total: '0'},
        {id: 10, team: 'Хаас', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', total: '0'}
    ]
    let teams = teamData.map(d =>
        <tr>
            <td>{d.team}</td>
            <td>{d.r1}</td>
            <td>{d.r2}</td>
            <td>{d.r3}</td>
            <td>{d.r4}</td>
            <td>{d.r5}</td>
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
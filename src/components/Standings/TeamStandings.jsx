const TeamStandings = () => {

    let racesData = [
        {id: 1, race: 'Бахрейн'},
        {id: 2, race: 'Имола'},
        {id: 3, race: 'Португалия'},
        {id: 4, race: 'Испания'},
        {id: 5, race: 'Монако'},
        {id: 6, race: 'Баку'}
    ]
    let races = racesData.map(r => <th>{r.race}</th>)

    let teamData = [
        {id: 1, team: 'Ред Булл', r1: '28', r2: '25', r3: '30', r4: '29', r5: '37', r6: '25', total: '174'},
        {id: 2, team: 'Мерседес', r1: '41', r2: '19', r3: '41', r4: '40', r5: '7', r6: '-', total: '148'},
        {id: 3, team: 'Феррари', r1: '12', r2: '22', r3: '8', r4: '18', r5: '18', r6: '16', total: '94'},
        {id: 4, team: 'Макларен', r1: '18', r2: '23', r3: '12', r4: '12', r5: '15', r6: '12', total: '92'},
        {id: 5, team: 'Альфа Таури', r1: '2', r2: '6', r3: '1', r4: '1', r5: '8', r6: '21', total: '39'},
        {id: 6, team: 'Астон Мартин', r1: '1', r2: '4', r3: '-', r4: '-', r5: '14', r6: '18', total: '37'},
        {id: 7, team: 'Альпин', r1: '-', r2: '3', r3: '10', r4: '2', r5: '2', r6: '8', total: '25'},
        {id: 8, team: 'Альфа Ромео', r1: '-', r2: '-', r3: '-', r4: '-', r5: '1', r6: '1', total: '2'},
        {id: 9, team: 'Вильямс', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', r6: '-', total: '0'},
        {id: 10, team: 'Хаас', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', r6: '-', total: '0'}
    ]
    let teams = teamData.map(d =>
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
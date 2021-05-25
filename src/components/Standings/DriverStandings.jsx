const DriverStandings = () => {

    let racesData = [
        {id: 1, race: 'Бахрейн'},
        {id: 1, race: 'Имола'},
        {id: 1, race: 'Португалия'},
        {id: 1, race: 'Испания'},
        {id: 1, race: 'Монако'}
    ]
    let races = racesData.map(r => <th>{r.race}</th>)
    let driverData = [
        {id: 1, driver: 'Ферстаппен', r1: '18',r2: '25',r3: '18',r4: '19',r5: '25', total: '105'},
        {id: 2, driver: 'Хемильтон', r1: '25',r2: '19',r3: '25',r4: '25',r5: '7', total: '101'},
        {id: 3, driver: 'Норрис', r1: '12',r2: '15',r3: '10',r4: '4',r5: '15', total: '56'},
        {id: 4, driver: 'Боттас', r1: '16',r2: '-',r3: '16',r4: '15',r5: '-', total: '47'},
        {id: 5, driver: 'Перес', r1: '10',r2: '-',r3: '12',r4: '10',r5: '12', total: '44'},
        {id: 6, driver: 'Леклер', r1: '8',r2: '12',r3: '8',r4: '16',r5: '-', total: '40'},
        {id: 7, driver: 'Сайнс', r1: '4',r2: '10',r3: '-',r4: '6',r5: '18', total: '38'},
        {id: 8, driver: 'Риккьярдо', r1: '6',r2: '8',r3: '2',r4: '8',r5: '-', total: '24'},
        {id: 9, driver: 'Гасли', r1: '',r2: '6',r3: '1',r4: '1',r5: '8', total: '16'},
        {id: 10, driver: 'Окон', r1: '-',r2: '2',r3: '6',r4: '2',r5: '2', total: '12'},
        {id: 11, driver: 'Феттель', r1: '-',r2: '-',r3: '-',r4: '-',r5: '10', total: '10'},
        {id: 12, driver: 'Стролл', r1: '1',r2: '4',r3: '-',r4: '-',r5: '4', total: '9'},
        {id: 13, driver: 'Алонсо', r1: '-',r2: '1',r3: '4',r4: '-',r5: '-', total: '5'},
        {id: 14, driver: 'Цунода', r1: '2',r2: '-',r3: '-',r4: '-',r5: '0', total: '2'},
        {id: 15, driver: 'Джовинацци', r1: '-',r2: '-',r3: '-',r4: '-',r5: '1', total: '1'},
        {id: 16, driver: 'Райкконен', r1: '-',r2: '-',r3: '-',r4: '-',r5: '-', total: '0'},
        {id: 17, driver: 'Расселл', r1: '-',r2: '-',r3: '-',r4: '-',r5: '-', total: '0'},
        {id: 18, driver: 'Латифи', r1: '-',r2: '-',r3: '-',r4: '-',r5: '-', total: '0'},
        {id: 19, driver: 'Шумахер', r1: '-',r2: '-',r3: '-',r4: '-',r5: '-', total: '0'},
        {id: 20, driver: 'Мазепин', r1: '-',r2: '-',r3: '-',r4: '-',r5: '-', total: '0'}
    ]
    let drivers = driverData.map(d =>
        <tr>
            <td>{d.driver}</td>
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
            <h4>Личный зачёт</h4>
            <table border='2'>
                <tr>
                    <th>Пилот</th>
                    {races}
                    <th>Итого</th>
                </tr>
                {drivers}
            </table>
        </>
    )
}

export default DriverStandings
const DriverStandings = (props) => {
    let races = props.races.map(r => <th>{r.race}</th>)
    let drivers = props.drivers.map(d =>
        <tr>
            <td>{d.driver}</td>
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
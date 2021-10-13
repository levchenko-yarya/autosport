import Rating from "../Rating/Rating";

const Duel = (props) => {
    let duels = props.duelPage.duels.map(d =>
        <tr>
            <td>{d.team}</td>
            <td>{d.driver1}</td>
            <td>{d.duel}</td>
            <td>{d.driver2}</td>
            <td>{d.difference}</td>
        </tr>
    )

    return (
        <div>
            <h3>Дуэли пилотов в квалификации</h3>
            <table border='1'>
                <tr>
                    <th>Команда</th>
                    <th>Пилот 1</th>
                    <th>Дуэль</th>
                    <th>Пилот 2</th>
                    <th>Разрыв (первые 5 этапов)</th>
                </tr>
                {duels}
            </table>
            <Rating/>
        </div>
    )
}

export default Duel
const Duel = () => {

    let duelData = [
        {id: 1, team: 'Мерседес', driver1: 'Хемильтон', duel: '4 - 2', driver2: 'Боттас', difference: '0.064'},
        {id: 2, team: 'Ред Булл', driver1: 'Ферстаппен', duel: '5 - 1', driver2: 'Перес', difference: '0.471'},
        {id: 3, team: 'Макларен', driver1: 'Риккьярдо', duel: '3 - 3', driver2: 'Норрис', difference: '0.229'},
        {id: 4, team: 'Феррари', driver1: 'Леклер', duel: '5 - 1', driver2: 'Сайнс', difference: '0.167'},
        {id: 5, team: 'Альпин', driver1: 'Алонсо', duel: '2 - 4', driver2: 'Окон', difference: '0.354'},
        {id: 6, team: 'Альфа Таури', driver1: 'Гасли', duel: '6 - 0', driver2: 'Цунода', difference: '0.579'},
        {id: 7, team: 'Астон Мартин', driver1: 'Феттель', duel: '3 - 3', driver2: 'Стролл', difference: '0.063'},
        {id: 8, team: 'Альфа Ромео', driver1: 'Джовинацци', duel: '4 - 2', driver2: 'Райкконен', difference: '0.356'},
        {id: 9, team: 'Вильямс', driver1: 'Расселл', duel: '6 - 0', driver2: 'Латифи', difference: '0.513'},
        {id: 10, team: 'Хаас', driver1: 'Шумахер', duel: '5 - 1', driver2: 'Мазепин', difference: '0.623'},
    ]
    let duels = duelData.map(d =>
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
        </div>
    )
}

export default Duel
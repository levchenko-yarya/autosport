const Schedule = () => {

    let scheduleData = [
        {id: 1, race: 'Бахрейн'},
        {id: 2, race: 'Имола'},
        {id: 3, race: 'Португалия'},
        {id: 4, race: 'Испания'},
        {id: 5, race: 'Монако'},
        {id: 6, race: 'Баку'}
    ]

    let races = scheduleData.map(r => <p>Гран-при {r.race}</p>)

    return (
        <div>
            <p>{races}</p>
        </div>
    )
}

export default Schedule
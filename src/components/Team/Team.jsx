
const Team = () => {

    let teamsData = [
        { id: 1, name: 'Мерседес' },
        { id: 2, name: 'Ред Булл' },
        { id: 3, name: 'Макларен' },
        { id: 4, name: 'Феррари' },
        { id: 5, name: 'Альпин' },
        { id: 6, name: 'Альфа Таури' },
        { id: 7, name: 'Астон Мартин' },
        { id: 8, name: 'Альфа Ромео' },
        { id: 9, name: 'Вильямс' },
        { id: 10, name: 'Хаас' }
    ]

    let teams = teamsData.map(t => <p>{t.name}</p>)

    return (
        <div>
            { teams}
        </div>
    )
}

export default Team
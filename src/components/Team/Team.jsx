import team from './Team.module.css'

const Team = () => {

    let teamsData = [
        {id: 1, name: 'Мерседес', img: '../../../../assets/team/mersedes.jpg'},
        {id: 2, name: 'Ред Булл', img: '../../../../assets/team/redbull.jpg'},
        {id: 3, name: 'Макларен', img: '../../../../assets/team/mclaren.jpg'},
        {id: 4, name: 'Феррари', img: '../../../../assets/team/ferrari.jpg'},
        {id: 5, name: 'Альпин', img: '../../../../assets/team/alpine.jpg'},
        {id: 6, name: 'Альфа Таури', img: '../../../../assets/team/tauri.jpg'},
        {id: 7, name: 'Астон Мартин', img: '../../../../assets/team/aston.jpg'},
        {id: 8, name: 'Альфа Ромео', img: '../../../../assets/team/romeo.jpg'},
        {id: 9, name: 'Вильямс', img: '../../../../assets/team/williams.jpg'},
        {id: 10, name: 'Хаас', img: '../../../../assets/team/haas.jpg'}
    ]

    let teams = teamsData.map(t =>
        <div className={team.team}>
            <p>{t.name}</p>
            <img src={t.img} alt={'bolid'}/>
        </div>
    )

    return (
        <div className={team.wrapper}>
            {teams}
        </div>
    )
}

export default Team
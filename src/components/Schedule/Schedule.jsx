import s from "./Schedule.module.css";
import Track from "./Track/Track";

const Schedule = () => {

    let scheduleData = [
        {id: 1, race: 'Бахрейн'},
        {id: 2, race: 'Имола'},
        {id: 3, race: 'Португалия'},
        {id: 4, race: 'Испания'},
        {id: 5, race: 'Монако'},
        {id: 6, race: 'Баку'}
    ]
    let tracksData = [
        {
            id: 1,
            name: 'Сахир',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bahrain_International_Circuit--Grand_Prix_Layout.svg/280px-Bahrain_International_Circuit--Grand_Prix_Layout.svg.png'
        },
        {
            id: 2,
            name: 'Имола',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Imola.svg/274px-Imola.svg.png'
        }
    ]

    let races = scheduleData.map(r => <h4>Гран-при {r.race}</h4>)
    let tracks = tracksData.map(t => <Track name={t.name} url={t.url}/>)

    return (
        <div className={s.wrapper}>
            <div className={s.races}>{races}</div>
            <div className={s.tracks}>{tracks}</div>
        </div>
    )
}

export default Schedule
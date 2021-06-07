import s from "./Schedule.module.css";
import Track from "./Track/Track";

const Schedule = (props) => {
    let races = props.schedulePage.schedule.map(r => <h4>Гран-при {r.race}</h4>)
    let tracks = props.schedulePage.tracks.map(t => <Track name={t.name} url={t.url}/>)

    return (
        <div className={s.wrapper}>
            <div className={s.races}>{races}</div>
            <div className={s.tracks}>{tracks}</div>
        </div>
    )
}

export default Schedule
import s from './Standings.module.css'
import DriverStandings from "./DriverStandings";
import TeamStandings from "./TeamStandings";

const Standings = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.driver}>
                <DriverStandings/>
            </div>
            <div className={s.team}>
                <TeamStandings/>
            </div>
        </div>
    )
}

export default Standings
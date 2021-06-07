import s from './Standings.module.css'
import DriverStandings from "./DriverStandings";
import TeamStandings from "./TeamStandings";

const Standings = (props) => {

    return (
        <div className={s.wrapper}>
            <div className={s.driver}>
                <DriverStandings
                    races={props.standingsPage.races}
                    drivers={props.standingsPage.drivers}
                />
            </div>
            <div className={s.team}>
                <TeamStandings
                    races={props.standingsPage.races}
                    teams={props.standingsPage.teams}
                />
            </div>
        </div>
    )
}

export default Standings
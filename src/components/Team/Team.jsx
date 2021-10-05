import team from './Team.module.css'
import TeamChart from "../Chart/TeamChart";

const Team = (props) => {
    let teams = props.teamPage.teams.map(t =>
        <div className={team.team}>
            <p>{t.name}</p>
            <img src={t.img} alt={'bolid'}/>
        </div>
    )

    return (
        <>
            <div className={team.wrapper}>
                {teams}
            </div>
            <TeamChart/>
        </>

    )
}

export default Team
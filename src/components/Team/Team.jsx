import team from './Team.module.css'

const Team = (props) => {
    let teams = props.teamPage.teams.map(t =>
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
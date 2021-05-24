import t from './Track.module.css'

const Track = (props) => {
    return (
        <div className={t.track}>
            <h3>{props.name}</h3>
            <img src={props.url} />
        </div>
    )
}

export default Track
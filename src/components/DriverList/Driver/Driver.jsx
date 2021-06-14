import d from './Driver.module.css'

const Driver = (props) => {
    return (
        <div className={d.driver}>
            <p>{props.name}</p>
            <img src={props.img} alt='driver' />
        </div>
    )
}

export default Driver
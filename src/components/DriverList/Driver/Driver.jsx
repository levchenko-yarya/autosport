import d from './Driver.module.css'

const Driver = (props) => {
    return (
        <div className={d.driver}>
            <p>{props.name}</p>
        </div>
    )
}

export default Driver
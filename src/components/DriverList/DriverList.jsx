import Driver from "./Driver/Driver";
import d from './DriverList.module.css'

const DriverList = (props) => {

    let drivers = props.driverPage.drivers.map(d =>
        <Driver name={d.name} img={d.img}/>
    )
    return (
        <div className={d.wrapper}>
            {drivers}
        </div>
    )
}

export default DriverList
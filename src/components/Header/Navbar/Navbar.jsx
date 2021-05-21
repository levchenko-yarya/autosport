import { NavLink } from 'react-router-dom'
import n from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={n.nav}>
            <div className={`${n.item} ${n.active}`}>
                <NavLink to='/drivers' activeClassName={n.activeLink}>Drivers</NavLink>
            </div>
            <div className={`${n.item} ${n.active}`}>
                <NavLink to='/teams' activeClassName={n.activeLink}>Teams</NavLink>
            </div>
            <div className={`${n.item} ${n.active}`}>
                <NavLink to='/schedule' activeClassName={n.activeLink}>Schedule</NavLink>
            </div>
            <div className={`${n.item} ${n.active}`}>
                <NavLink to='/standings' activeClassName={n.activeLink}>Standings</NavLink>
            </div>
        </div>
    )
}

export default Navbar
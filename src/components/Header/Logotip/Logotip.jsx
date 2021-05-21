import { NavLink } from 'react-router-dom'
import l from './Logotip.module.css'

const Logotip = () => {
    return (
        <div className={l.logo}>
            <img src='https://cdn3.iconfinder.com/data/icons/bold-f1/512/F1_9-512.png'/>
            <NavLink to='/' className={l.item}>Autosport</NavLink>
        </div>
    )
}

export default Logotip
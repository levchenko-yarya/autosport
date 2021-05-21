import { Route } from 'react-router'
import h from './Header.module.css'
import Logotip from './Logotip/Logotip'
import Navbar from './Navbar/Navbar'

const Header = (props) => {
    return (
        <header className={h.header}>
            <Route path='/' component={Logotip} />
            <Navbar />
        </header>

    )
}
export default Header
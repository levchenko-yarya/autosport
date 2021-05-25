import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Team from './components/Team/Team'
import DriverList from './components/DriverList/DriverList'
import Schedule from './components/Schedule/Schedule'
import Standings from './components/Standings/Standings'
import Duel from './components/Duel/Duel'

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <div className='app-wrapper-content'>
                    <Route exact path='/' render={()=><h2>Добро пожаловать в мир Формулы-1</h2>} />
                    <Route path='/drivers' component={DriverList} />
                    <Route path='/teams' component={Team} />
                    <Route path='/schedule' component={Schedule} />
                    <Route path='/standings' component={Standings} />
                    <Route path='/duels' component={Duel} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
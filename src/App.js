import './App.css'
import Header from './components/Header/Header'
import {BrowserRouter, Route} from 'react-router-dom'
import Team from './components/Team/Team'
import DriverList from './components/DriverList/DriverList'
import Schedule from './components/Schedule/Schedule'
import Standings from './components/Standings/Standings'
import Duel from './components/Duel/Duel'

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-content'>
                    <Route exact path='/' render={() => <h2>Добро пожаловать в мир Формулы-1</h2>}/>
                    <Route path='/drivers' render={() => <DriverList driverPage={props.state.driverPage}/>}/>
                    <Route path='/teams' render={() => <Team teamPage={props.state.teamPage}/>}/>
                    <Route path='/schedule' render={() => <Schedule schedulePage={props.state.schedulePage}/>}/>
                    <Route path='/standings' render={() => <Standings standingsPage={props.state.standingsPage}/>}/>
                    <Route path='/duels' render={() => <Duel duelPage={props.state.duelPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
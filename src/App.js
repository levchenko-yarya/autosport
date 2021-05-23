import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Team from './components/Team/Team';
import DriverList from './components/DriverList/DriverList';
import Schedule from './components/Schedule/Schedule';

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
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Driver from './components/Driver/Driver';
import Team from './components/Team/Team';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <div className='app-wrapper-content'>
                    <Route exact path='/' render={()=><h2>Добро пожаловать в мир Формулы 1</h2>} />
                    <Route path='/drivers' component={Driver} />
                    <Route path='/teams' component={Team} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

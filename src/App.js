import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import Header from './components/Header/Header'
import Team from './components/Team/Team'
import DriverList from './components/DriverList/DriverList'
import Schedule from './components/Schedule/Schedule'
import Standings from './components/Standings/Standings'
import Duel from './components/Duel/Duel'
import NewsList from "./components/News/NewsList"

const data = [
    {name: 'Старт сезона', Хемильтон: 0, Ферстаппен: 0},
    {name: 'Бахрейн', Хемильтон: 25, Ферстаппен: 18},
    {name: 'Имола', Хемильтон: 44, Ферстаппен: 43},
    {name: 'Испания', Хемильтон: 69, Ферстаппен: 61},
    {name: 'Монако', Хемильтон: 94, Ферстаппен: 80},
    {name: 'Баку', Хемильтон: 101, Ферстаппен: 105},
    {name: 'Франция', Хемильтон: 101, Ферстаппен: 105},
    {name: 'Штирия', Хемильтон: 119, Ферстаппен: 131},
    {name: 'Австрия', Хемильтон: 137, Ферстаппен: 156},
    {name: 'Англия', Хемильтон: 149, Ферстаппен: 182},
    {name: 'Венгрия', Хемильтон: 176, Ферстаппен: 185},
    {name: 'Бельгия', Хемильтон: 195, Ферстаппен: 187},
    {name: 'Голландия', Хемильтон: 202.5, Ферстаппен: 199.5},
    {name: 'Италия', Хемильтон: 221.5, Ферстаппен: 224.5},
    {name: 'Россия', Хемильтон: 221.5, Ферстаппен: 226.5}
]

const SimpleLineChart = () => {
    return (
        <LineChart width={1200} height={500} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="Хемильтон" stroke="blue" activeDot={{r: 5}}/>
            <Line type="monotone" dataKey="Ферстаппен" stroke="red"/>
        </LineChart>
    )
}

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-content'>
                    <Route exact path='/' render={() =>
                        <div>
                            <h2>Добро пожаловать в мир Формулы-1</h2>
                            <p>эта страница будет посвящена миру Формулы-1, а возможно и всему автоспорту.</p>
                            <SimpleLineChart/>
                        </div>
                    }/>
                    <Route path='/news' render={() => <NewsList/>}/>
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
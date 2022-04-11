import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const team = [
    {name: 'Старт сезона', 'mercedes': 0, 'red bull': 0, 'mclaren': 0, 'ferrari': 0, 'alpine': 0, 'alpha tauri': 0, 'aston martin': 0, 'alfa romeo': 0, 'haas': 0, 'williams': 0},
    {name: 'Бахрейн', 'mercedes': 27, 'red bull': 0, 'mclaren': 0, 'ferrari': 44, 'alpine': 8, 'alpha tauri': 4, 'aston martin': 0, 'alfa romeo': 9, 'haas': 10, 'williams': 0},
    {name: 'Джидда', 'mercedes': 38, 'red bull': 37, 'mclaren': 6, 'ferrari': 78, 'alpine': 16, 'alpha tauri': 8, 'aston martin': 0, 'alfa romeo': 9, 'haas': 12, 'williams': 0},
    {name: 'Австралия', 'mercedes': 65, 'red bull': 55, 'mclaren': 24, 'ferrari': 104, 'alpine': 22, 'alpha tauri': 10, 'aston martin': 0, 'alfa romeo': 13, 'haas': 12, 'williams': 1}
]

const TeamChart = () => {
    const divStyle = {
        backgroundColor: 'black'
    }
    return (
        <div>
            <h3>Противостояние команд Ф1 по ходу сезона 2021</h3>
            <div style={divStyle}>
                <LineChart width={1200} height={700} data={team} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="mercedes" stroke="#00d2be"/>
                    <Line type="monotone" dataKey="red bull" stroke="#0600ef"/>
                    <Line type="monotone" dataKey="mclaren" stroke="#ff9800"/>
                    <Line type="monotone" dataKey="ferrari" stroke="#dc0000"/>
                    <Line type="monotone" dataKey="alpine" stroke="#0090ff"/>
                    <Line type="monotone" dataKey="alpha tauri" stroke="#2b4562"/>
                    <Line type="monotone" dataKey="aston martin" stroke="#006f62"/>
                    <Line type="monotone" dataKey="alfa romeo" stroke="#006f62"/>
                    <Line type="monotone" dataKey="haas" stroke="#ffffff"/>
                    <Line type="monotone" dataKey="williams" stroke="#006f62"/>


                </LineChart>
            </div>
        </div>
    )
}

export default TeamChart
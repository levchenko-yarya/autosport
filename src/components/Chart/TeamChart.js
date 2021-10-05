import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const team = [
    {name: 'Старт сезона', 'mercedes': 0, 'red bull': 0, 'mclaren': 0, 'ferrari': 0, 'alpine': 0, 'alpha tauri': 0, 'aston martin': 0},
    {name: 'Бахрейн', 'mercedes': 41, 'red bull': 28, 'mclaren': 18, 'ferrari': 12, 'alpine': 0, 'alpha tauri': 2, 'aston martin': 1},
    {name: 'Имола', 'mercedes': 60, 'red bull': 53, 'mclaren': 41, 'ferrari': 34, 'alpine': 3, 'alpha tauri': 6, 'aston martin': 4},
    {name: 'Испания', 'mercedes': 0, 'red bull': 0, 'mclaren': 0, 'ferrari': 0, 'alpine': 0, 'alpha tauri': 0, 'aston martin': 0},
    {name: 'Монако', 'mercedes': 0, 'red bull': 0, 'mclaren': 0, 'ferrari': 0, 'alpine': 0, 'alpha tauri': 0, 'aston martin': 0},
    {name: 'Баку', 'mercedes': 0, 'red bull': 0, 'mclaren': 0, 'ferrari': 0, 'alpine': 0, 'alpha tauri': 0, 'aston martin': 0}
]

const TeamChart = () => {
    const divStyle = {
        backgroundColor: 'black'
    }
    return (
        <div>
            <h3>Противостояние команд Ф1 по ходу сезона 2021</h3>
            <div style={divStyle}>
                <LineChart width={1200} height={500} data={team} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
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

                </LineChart>
            </div>
        </div>
    )
}

export default TeamChart
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {name: 'Бахрейн', рейтинг: 92},
    {name: 'Имола', рейтинг: 97},
    {name: 'Портимао', рейтинг: 38},
    {name: 'Испания', рейтинг: 58},
    {name: 'Монако', рейтинг: 65},
    {name: 'Баку', рейтинг: 97},
    {name: 'Франция', рейтинг: 85},
    {name: 'Штирия', рейтинг: 49},
    {name: 'Австрия', рейтинг: 73},
    {name: 'Англия', рейтинг: 63},
    {name: 'Венгрия', рейтинг: 90},
    {name: 'Бельгия', рейтинг: 23},
    {name: 'Голландия', рейтинг: 66},
    {name: 'Италия', рейтинг: 95},
    {name: 'Россия', рейтинг: 96},
    {name: 'Турция', рейтинг: 69},
]

const Rating = ()=> {
    return (
        <>
            <h3>Рейтинг гонок</h3>
            <LineChart width={1250} height={500} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="рейтинг" stroke="blue" activeDot={{r: 5}}/>
            </LineChart>
        </>
    )
}

export default Rating
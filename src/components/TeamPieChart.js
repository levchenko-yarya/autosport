import React, {PureComponent} from "react";
import {PieChart, Pie, Tooltip} from 'recharts'

const data = [
    {name: 'Mercedes', value: 362.5},
    {name: 'Red Bull', value: 344.5},
    {name: 'McLaren', value: 215},
    {name: 'Ferrari', value: 201.5},
    {name: 'Alpine', value: 95},
    {name: 'Alpha Tauri', value: 84},
    {name: 'Aston Martin', value: 59},
    {name: 'Williams', value: 22},
    {name: 'Alfa Romeo', value: 3},
    {name: 'Haas', value: 0}
]

export default class TeamPieChart extends PureComponent {
    render() {
        return (
            <div>
                <h3>круговая диаграмма заработанных очков среди команд</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={data}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip/>
                </PieChart>
            </div>
        )
    }
}


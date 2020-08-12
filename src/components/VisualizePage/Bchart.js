import React, { Component } from 'react'
import { Scatter } from 'react-chartjs-2'
import { w3cwebsocket as W3Cwebsocket } from 'websocket'
import 'chartjs-plugin-streaming'

export default class Bchart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Seal Intactness',
                        fill: false,
                        backgroundColor: [],
                        data: [],
                    },
                ],
            },
            options: {
                title: {
                    display: true,
                    text: 'Live Feed',
                },
                scales: {
                    xAxes: [
                        {
                            type: 'realtime',
                            realtime: {
                                duration: 20000,
                                // refresh: 1000,
                                // delay: 2000,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                suggestedMax: 1,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Confidence',
                            },
                        },
                    ],
                },
                tooltips: {
                    mode: 'nearest',
                    intersect: true,
                },
            },
        }
    }

    componentDidMount() {
        this.connection = new W3Cwebsocket(process.env.REACT_APP_SOCKET_URL)
        this.connection.onmessage = (message) => {
            var updatedData = JSON.parse(message.data)
            if ('result' in updatedData) {
                // taking keys for now which are usefull
                var newData = {}
                newData.Confidence = updatedData.confidence
                newData.Sealintact = updatedData.result
                newData.Date = updatedData.time

                this.setState((state) => {
                    console.log(state)
                    let tempData = [...state.data.datasets[0].data]
                    let tempChartColors = [
                        ...state.data.datasets[0].backgroundColor,
                    ]
                    tempData.push({ x: newData.Date, y: newData.Confidence })
                    tempChartColors.push(
                        newData.Sealintact
                            ? 'rgb(75, 192, 192)'
                            : 'rgb(255, 99, 132)'
                    )
                    let tempDataSets = []
                    tempDataSets.push({
                        label: 'Seal Intactness',
                        fill: false,
                        backgroundColor: tempChartColors,
                        data: tempData,
                    })
                    return {
                        data: Object.assign({}, state.data, {
                            datasets: tempDataSets,
                        }),
                    }
                })
            }
        }
    }

    componentWillUnmount() {
        this.connection.close()
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Scatter data={this.state.data} options={this.state.options} />
            </div>
        )
    }
}

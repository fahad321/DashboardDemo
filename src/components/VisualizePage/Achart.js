import React, { Component } from 'react'
import { Scatter } from 'react-chartjs-2'
import { w3cwebsocket as W3Cwebsocket } from 'websocket'
import 'chartjs-plugin-streaming'

export default class Achart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            chartColors: [],
        }
    }

    // backgroundColors = []
    // allData = []
    // config = {
    //     type: 'scatter',
    //     data: {
    //         datasets: [
    //             {
    //                 label: 'Seal Intactness',
    //                 fill: false,
    //                 backgroundColor: this.backgroundColors,
    //                 data: this.allData,
    //             },
    //         ],
    //     },
    //     options: {
    //         title: {
    //             display: true,
    //             text: 'Live Feed',
    //         },
    //         scales: {
    //             xAxes: [
    //                 {
    //                     type: 'realtime',
    //                     realtime: {
    //                         duration: 20000,
    //                         refresh: 1000,
    //                         delay: 2000,
    //                         onRefresh: this.onRefresh,
    //                     },
    //                 },
    //             ],
    //             yAxes: [
    //                 {
    //                     ticks: {
    //                         suggestedMax: 1,
    //                     },
    //                     scaleLabel: {
    //                         display: true,
    //                         labelString: 'Confidence',
    //                     },
    //                 },
    //             ],
    //         },
    //         tooltips: {
    //             mode: 'nearest',
    //             intersect: false,
    //         },
    //         // hover: {
    //         //   mode: 'nearest',
    //         //   intersect: false
    //         // }
    //     },
    // }

    // onRefresh = () => {
    //     this.config.data.datasets.forEach(function (dataset) {
    //         dataset.data.push({
    //             x: Date.now(),
    //             y: Math.random(),
    //         })
    //     })
    // }

    componentDidMount() {
        let connection = new W3Cwebsocket(process.env.REACT_APP_SOCKET_URL)
        connection.onmessage = (message) => {
            var updatedData = JSON.parse(message.data)
            if (updatedData != null) {
                // taking keys for now which are usefull
                var newData = {}
                newData.Confidence = updatedData.confidence
                newData.Sealintact = updatedData.result
                newData.Date = updatedData.time
                console.log('cnumber', newData.Confidence)
                console.log('Sealintact', newData.Sealintact)
                console.log(newData.Date)
              
                if( newData.Sealintact)
                {
                let tempData = [...this.state.data]
                tempData.push({
                    x: Date.now(),
                    y: newData.Confidence,
                })
                this.setState({
                    data: tempData,
                })
                let tempChartColor = [...this.state.chartColors]
                tempChartColor.push(
                    newData.Sealintact
                        ? 'rgb(255, 99, 132)'
                        : 'rgb(75, 192, 192)'
                )
                
                tempChartColor.map(name => (
                 
                 
                    this.setState({
                        chartColors: {name},
                    })   
                 
                   
                 
                      ))
                
            }
            
                // window.LiveChart.config.data.datasets.forEach(function (dataset) {
                //     dataset.data.push({
                //       x: Date.now(),
                //       y: newData.Confidence,
                //     });

                //     // if (dataset.data[dataset.data.length-1].y === 0) {
                //     if (newData.Sealintact == false) {
                //       chartColors.push("rgb(255, 99, 132)");
                //     } else {
                //       chartColors.push("rgb(75, 192, 192)");
                //     }
                //   });
                // }
            }



        }
    }
    render() {
        // var backgroundColors = []
        // var allData = []
        var config = {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Seal Intactness',
                        fill: false,
                        backgroundColor: this.state.chartColors,
                        data: this.state.data,
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
                                refresh: 1000,
                                delay: 2000,
                                // refresh: 1000,
                                // delay: 2000,
                                //     onRefresh: function (chart) {
                                //         config.data.datasets.forEach(function (
                                //             dataset
                                //         ) {
                                //             dataset.data.push({
                                //                 x: Date.now(),
                                //                 y: Math.random(),
                                //             })
                                //         })
                                //     },
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
                    intersect: false,
                },
                // hover: {
                //  mode: 'nearest',
                //  intersect: false
                // }
            },
        }
var i=1;
i=i=1;
        return (
            <div>
                <Scatter  data={config.data} options={config.options} />
            </div>
        )
    }
}
import { binanceWebSocket } from "./modules/webSocketClass.js"
import { coinbaseWebSocket } from "./modules/webSocketClass.js"
import {updateDashbord } from "./modules/arbtriageSpread.js"
import { getSpread } from "./modules/arbtriageSpread.js"

import 'chartjs-adapter-date-fns'
import { da, enUS } from "date-fns/locale"
import { Chart, TimeScale, LinearScale, LineController, LineElement, PointElement } from "chart.js";
Chart.register(TimeScale,LinearScale,LineController,LineElement,PointElement)


const ctx = document.querySelector("#graph").getContext('2d')

// websockets
const binanceWS = new binanceWebSocket()
binanceWS.connect()
const coinbaseWS = new coinbaseWebSocket()
coinbaseWS.connect()
function updateData() {
    updateDashbord(coinbaseWS.getPrice(),binanceWS.getPrice())
    setTimeout(updateData,500)
    console.log(`The Spread is: ${getSpread()}`)
}
updateData()

const spreadChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], 
        datasets: [{
            label: 'Stock Price', 
            data: [], 
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            borderWidth: 1, 
            fill: false 
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time', 
                time: {
                    unit: 'second', 
                    tooltipFormat: 'HH:mm:ss' 
                },
                adapters: {
                    date: {
                        locale: enUS 
                    }
                },
                parsing: false 
            },
            y: {
                beginAtZero: false
            }
        }
    }
});

// Function to update the chart with new data
function updateChart(chart, label, data) {
    chart.data.labels.push(label); // Add new timestamp
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data); // Add new stock price
    });
    chart.update(); // Redraw the chart
}

setInterval(async() => {
    const latestSpread = getSpread()
    const currentTime = new Date()
    updateChart(spreadChart,currentTime,latestSpread)
},3000)





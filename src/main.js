import { binanceWebSocket } from "./modules/webSocketClass.js"
import { coinbaseWebSocket } from "./modules/webSocketClass.js"
import {updateDashbord } from "./modules/arbtriageSpread.js"

const binanceWS = new binanceWebSocket()
binanceWS.connect()


const coinbaseWS = new coinbaseWebSocket()
coinbaseWS.connect()


function updateData() {
    updateDashbord(coinbaseWS.getPrice(),binanceWS.getPrice())
    setTimeout(updateData,500)
}


updateData()





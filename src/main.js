import { binanceWebSocket } from "./modules/webSocketClass.js"
import { coinbaseWebSocket } from "./modules/webSocketClass.js"
import { inputPrices } from "./modules/arbtriageSpread.js"

const binanceWS = new binanceWebSocket()
binanceWS.connect()


const coinbaseWS = new coinbaseWebSocket()
coinbaseWS.connect()


function updatePrices() {
    inputPrices(binanceWS.getPrice(),coinbaseWS.getPrice())
    setTimeout(updatePrices,100)
}


updatePrices()





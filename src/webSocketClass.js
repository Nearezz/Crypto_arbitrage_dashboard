const BinancePriceText = document.querySelector(".binBTCText");
const coinbasePriceText = document.querySelector(".coinBTCText")

class webSocketManager {
    constructor(url) {
        this.url = url
        this.webSocketManager = null;

        this._reconnectAttempts = 0 
        this._maxReconnectAttempts = 10 
        this._lastUpdated = 0
        this._updateInterval = 100
    }

    connect() {
        this.ws = new WebSocket(this.url)

        this.ws.onopen = () => this.onOpen()
        this.ws.onmessage = (event) => this.onMessage(event)
        this.ws.onerror = (error) => this.onError(error)
        this.ws.onclose = (event) => this.onClose(event)
    
    } // setting the websockets methods to the class


    onOpen() {
        console.log(`connected to ${this.url}`)
    }

    onMessage(event) {
        const data = JSON.parse(event.data)
        const currentTime = Date.now()

        if ((currentTime - this._lastUpdated) > this._updateInterval){
            if (data.e === "24hrTicker") { // Binance
                BinancePriceText.textContent = parseFloat(data.c).toFixed(2)
            } else if (data.type === "ticker") {
                coinbasePriceText.textContent = parseFloat(data.price).toFixed(2)
            }

            this._lastUpdated = currentTime
        }
    }
 

}

export class binanceWebSocket extends webSocketManager {
    constructor() {
        super('wss://stream.binance.us:9443/ws/btcusdt@ticker'); 
    }
}



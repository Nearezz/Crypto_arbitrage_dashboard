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

        this._price = 0 
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

    onError = (error) => {
        console.error("binance web socket has an error: ",error)
        this.ws.close()
    }

    onClose = () => {
        console.warn("coin base websocket has closed")
        if(reconnectAttempts < maxReconnectAttempts){
            let retryDelay = Math.min(5000 * (reconnectAttempts + 1),30000)
            setTimeout(connectBinanceWebSocket,retryDelay)
            reconnectAttempts++
        } else {
            console.warn("Could not reconnect to coinbase socket")
     }

    }

    getPrice = () => {
        return this._price
    }

}

export class binanceWebSocket extends webSocketManager {
    constructor() {
        super('wss://stream.binance.us:9443/ws/btcusdt@ticker'); 
    }

    onMessage(event) {
        const data = JSON.parse(event.data)
        const currentTime = Date.now()
        if ((currentTime-this._lastUpdated)> this._updateInterval) {
            if (data.e === "24hrTicker") { // Binance
                BinancePriceText.textContent = parseFloat(data.c).toFixed(2)
                this._price =  parseFloat(data.c).toFixed(2)
            } 
        }
    }
}

export class coinbaseWebSocket extends webSocketManager {
    constructor() {
        super('wss://ws-feed.exchange.coinbase.com')
    }

    onOpen() {
        const subScribeMessage = {
            type:"subscribe",
            channels: [{ name: "ticker", product_ids: ["BTC-USDT"] }]
        }
        this.ws.send(JSON.stringify(subScribeMessage))
    }

    onMessage(event) {
        const data = JSON.parse(event.data)
        const currentTime = Date.now() 

        if ((currentTime-this._lastUpdated)>this._updateInterval) {
            if (data.type === "ticker") {
                coinbasePriceText.textContent = parseFloat(data.price).toFixed(2)
                this._price =  parseFloat(data.price).toFixed(2)
            }
        }
    }
} 



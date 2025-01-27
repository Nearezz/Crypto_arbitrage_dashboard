const binanceEndpoint = 'wss://stream.binance.us:9443/ws/btcusdt@ticker'
let binanceSocket; 

let reconnectAttempts = 0
const maxReconnectAttempts = 10
let lastUpdated = 0 
const updateInterval = 100 

const BinancePriceText = document.querySelector(".binBTCText");

export function startBinanceWebSocket(updatePriceCallback) {
    binanceSocket = new WebSocket(binanceEndpoint)
    binanceSocket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        if (data.e === "24hrTicker") {
            const currentTime = Date.now()
            if((currentTime - lastUpdated) > updateInterval) {
                BinancePriceText.textContent = parseFloat(data.c).toFixed(2)
                lastUpdated = currentTime
            }
        }

    }
    binanceSocket.onerror = (error) => {
        console.error("binance web socket has an error: ",error)
        binanceSocket.close()
    }

    binanceSocket.onclose = () => {
        console.warn("Binance WebSocket Closed")

        if (reconnectAttempts < maxReconnectAttempts) {
            let retryDelay = Math.min(5000 * (reconnectAttempts + 1),30000)
            setTimeout(connectBinanceWebSocket,retryDelay)
            reconnectAttempts++
        } else {
            console.error("maximum amount of reconnect attempts reached. Binance Websocket closing")
        }
    }
}
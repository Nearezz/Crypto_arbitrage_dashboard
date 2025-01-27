const coinbaseEndpoint = 'wss://ws-feed.exchange.coinbase.com'
let coinbaseSocket

let reconnectAttempts = 0
const maxReconnectAttempts = 10
let lastUpdated = 0 
const updateInterval = 100 

const coinbasePriceText = document.querySelector(".coinBTCText")


export function startCoinbaseWebSocket(){
    coinbaseSocket = new WebSocket(coinbaseEndpoint)
    coinbaseSocket.onopen = () => {
        console.log("connection success")
        const subScribeMessage = {
            type:"subscribe",
            channels: [{ name: "ticker", product_ids: ["BTC-USDT"] }]
        }
        coinbaseSocket.send(JSON.stringify(subScribeMessage))
    }
    coinbaseSocket.onmessage = (event) => {
       let data = JSON.parse(event.data)
       if (data.type === "ticker") {
            const currentTime = Date.now()

            if ((currentTime - lastUpdated)>updateInterval) {
                coinbasePriceText.textContent = parseFloat(data.price).toFixed(2)
                lastUpdated = currentTime
            }
            
       }
    }
    coinbaseSocket.onerror = (error) => {
        console.error("coinbase web socket has an error: ",error)
    }
    coinbaseSocket.onclose = () => {
        console.warn("coin base websocket has closed")
        if(reconnectAttempts < maxReconnectAttempts){
            let retryDelay = Math.min(5000 * (reconnectAttempts + 1),30000)
            setTimeout(connectBinanceWebSocket,retryDelay)
            reconnectAttempts++
        } else {
            console.warn("Could not reconnect to coinbase socket")
        }

    }

}

const binanceSoccet = new WebSocket('wss://stream.binance.us:9443/ws/btcusdt@aggTrade');
const coinSoccet = new WebSocket('wss://ws-feed.exchange.coinbase.com')

const BinancePriceText = document.querySelector(".binBTCText")
const CoinPriceText = document.querySelector(".coinBTCTEXT")

let binanceBTCPrice = 0
let coinBTCPrice = 0



// Binance Code
binanceSoccet.onopen = () => {
    const subscribeMessage = {
        method: "SUBSCRIBE",
        params: ["btcusdt@trade"],
        id:1,
    }

    binanceSoccet.send(JSON.stringify(subscribeMessage))
}
 
binanceSoccet.onmessage = (event) => {
    console.log(event);
    const data = JSON.parse(event.data);

    if (data.e === "trade") {  // Ensure it's a trade update
        console.log("price changed binance")
        binanceBTCPrice = data.p;  // Use 'p' instead of 'c'
        BinancePriceText.textContent = binanceBTCPrice;
    }
};

// Coinbase
coinSoccet.onopen = () => {

    const subscribeMessage = {
        type: "subscribe",
        channels: [{ name: "ticker", product_ids: ["BTC-USDT"] }]
    };

    coinSoccet.send(JSON.stringify(subscribeMessage))
}

coinSoccet.onmessage = (event) => {
    console.log("price changed cb")
    const data = JSON.parse(event.data)
    coinBTCPrice = data.price
    CoinPriceText.textContent = coinBTCPrice

  
}









// if websocet closes it reloads the page 
binanceSoccet.onclose = () => {
    setTimeout(() => location.reload(),50000)
}

coinSoccet.onclose = () => {
    setTimeout(() => location.reload(),50000)
}
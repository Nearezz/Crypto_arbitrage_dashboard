const alertText = document.querySelector(".alert");
const exchangeData = new Map([
    ["coinbasePrice", 0],
    ["binancePrice", 0],
    ["buyPrice", 0], 
    ["sellPrice", 0] 
]);



export function updateDashbord(coinbasePrice, binancePrice) {
    exchangeData.set("coinbasePrice", coinbasePrice);
    exchangeData.set("binancePrice", binancePrice);
    let spread = ((exchangeData.get("sellPrice") - exchangeData.get("buyPrice")) / exchangeData.get("buyPrice")) * 100;

    if (coinbasePrice > binancePrice) {
        exchangeData.set("buyPrice", binancePrice);
        exchangeData.set("sellPrice", coinbasePrice);
        alertText.textContent = `🔔 Profit Opportunity: Buy on Binance ${binancePrice} and Sell on Coinbase ${coinbasePrice}. Spread: ${spread.toFixed(2)}%.`;
    } else if (coinbasePrice < binancePrice) {
        exchangeData.set("buyPrice", coinbasePrice);
        exchangeData.set("sellPrice", binancePrice);
        alertText.textContent = `🔔 Profit Opportunity: Buy on Coinbase ${coinbasePrice} and Sell on Binance ${binancePrice}. Spread: ${spread.toFixed(2)}%.`;
    }
}

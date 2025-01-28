const exchangeData = new Map([
    ["coinbasePrice", 0],
    ["binancePrice", 0],
    ["buyPrice", 0], 
    ["sellPrice", 0] 
]);

export function inputPrices(coinbasePrice, binancePrice) {
    exchangeData.set("coinbasePrice", coinbasePrice);
    exchangeData.set("binancePrice", binancePrice)
    exchangeData.set("buyPrice",Math.max(coinbasePrice,binancePrice))
    exchangeData.set("sellPrice",Math.min(coinbasePrice,binancePrice))

    console.log(exchangeData)
}


 
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

    if (coinbasePrice > binancePrice) {
        exchangeData.set("buyPrice", binancePrice);
        exchangeData.set("sellPrice", coinbasePrice);
    } else if (coinbasePrice < binancePrice) {
        exchangeData.set("buyPrice", coinbasePrice);
        exchangeData.set("sellPrice", binancePrice);
    } else {
        alertText.textContent = "No arbitrage opportunity.";
        return;
    }

    // Calculate spread after updating buyPrice & sellPrice
    let spread = ((exchangeData.get("sellPrice") - exchangeData.get("buyPrice")) / exchangeData.get("buyPrice")) * 100;
    
    alertText.textContent = `🔔 Profit Opportunity: Buy at ${exchangeData.get("buyPrice")} and Sell at ${exchangeData.get("sellPrice")}. Spread: ${spread.toFixed(2)}%.`;
}

// Function to get the spread
export function getSpread() {
    let buyPrice = exchangeData.get("buyPrice");
    let sellPrice = exchangeData.get("sellPrice");

    if (buyPrice === 0) return 0; // Avoid division by zero
    return ((sellPrice - buyPrice) / buyPrice) * 100;
}

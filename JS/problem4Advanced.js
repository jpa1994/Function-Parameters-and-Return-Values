// Problem 4: Currency Converter with Default Parameter
//TODO  Write a function that converts an amount in US dollars to another currency, defaulting to Euros if no currency code is provided.

function convertCurrency(amountUSD, toCurrency = "EUR") {
  
    let rates = {
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110
      };
    
      let conversionRate = rates[toCurrency];
    
      if (!conversionRate) {
        return "Unsupported currency";
      }

  let convertedAmount = (amountUSD * conversionRate).toFixed(2);
  return `${convertedAmount} ${toCurrency}`;
}

console.log(convertCurrency(100));           // defaults to EUR: e.g. "85.00 EUR"
console.log(convertCurrency(100, "GBP"));    // "75.00 GBP"
console.log(convertCurrency(100, "JPY"));    // "11,000.00 JPY"
console.log(convertCurrency(100, "AUD"));    // "Unsupported currency"
// Problem 1: Convert Kilometers to Miles

function convertKilometersToMiles(kilometers) {
    let miles = kilometers * 0.621371; // 1 kilometer = 0.621371 miles
    return miles;
}
let miles = convertKilometersToMiles(10);
console.log(`${10} kilometers equals ${miles} miles.`);
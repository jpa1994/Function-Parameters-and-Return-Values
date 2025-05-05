// Problem 3: Calculate the Area of a Circle

function calculateCircleArea(radius) { 
    let area =  Math.PI * radius * radius; // Area = π * radius * radius
    return area;
}

let totalArea = calculateCircleArea(6);
console.log(`A circle with a radius of ${6} has an area of ${totalArea}.`);
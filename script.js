// площадь круга
function squareCircle(radius) {
    return Math.PI * radius * radius;
}
let result = squareCircle(10)
alert(result);


// длина окружности
function circumference(radius) {
    return 2 * Math.PI * radius;
}
let result = circumference(10) 
alert(result);


// cреднее арифметическое 
function average(a, b) {
    return (a + b) / 2;
}
let result = average(2, 5)
alert(result);

// четвертое задание
function calc(x, y, action) {
     if (action === '+') {
        return x + y;
     }
     if (action === '-') {
        return x - y;
     }
     if (action === '*') {
        return x * y;
     }
     if (action === '/') {
        return x / y;
     }
     if (action === '%') {
        return x % y;
     }
     if (action === '^') {
        return Math.pow(x, y);
     }
}

let result = calc(2, 3, '^')
alert(result);
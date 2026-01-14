"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funtion co Return, params
function add(a, b) {
    return a + b;
}
const addResult = (a, b) => a + b;
add(2, 3); //5
addResult(4, 5); // 9
// add(undefined, null); // error
// Funtion khong co Return: kieu void
function logMessage(message) {
    console.log("Message:", message);
}
// props trong react sang  component : onClick: () => void
// props trong react sang  component : onSearch: (keyword: string) => string
// 3. Tham số mặc định (Default Parameter)
function greetUser(name, greeting = "hello") {
    return `${greeting}, ${name}!`;
}
greetUser("Alice"); // "hello, Alice!"
greetUser("Alice", "Xin Chao"); // "Xin Chao, Alice!"
// 4. Tham số tùy chọn (Optional Parameter)
function describePerson(name, age) {
    if (age) {
        return `${name} is ${age} years old.`;
    }
    return `${name} has no age specified.`;
}
// 5. Toán tử spread (Spread Operators)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2);
sum(1, 2, 3, 4, 5);
// 6. Rest Parameter
function multiply(factor, ...numbers) {
    return numbers.map((num) => num * factor);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
function logStatus(status) {
    if (status === "loading") {
        console.log("Đang tải...");
    }
    else if (status === "success") {
        console.log("Thành công");
    }
    else if (status === "error") {
        console.log("Có lỗi xảy ra");
    }
}
console.log(add(2, 3));
console.log(multiply(4, 5));
logStatus("loading");
logStatus("success");
logStatus("error");

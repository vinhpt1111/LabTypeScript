"use strict";
// Tạo type Product có các trường sau:
Object.defineProperty(exports, "__esModule", { value: true });
// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
// Tạo mảng listProducts có các phần tử có kiểu Product
// Nhập ít nhất 5 phần tử
// Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description, có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)
// Viết hàm hiển thị danh sách sản phẩm: (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)
// Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)
// Viết hàm lọc những sản phẩm đang Sale và đánh giá từ Trung bình trở lên (Sử dụng filter)
// Enum đánh giá
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
let danhSachSanPham = [
    { name: "Shirt", price: 4, sale: true, rate: Rate.medium },
    { name: "Jeans", price: 6, sale: false, rate: Rate.hight },
    { name: "Shoes", price: 10, sale: true, rate: Rate.hight },
    { name: "Hat", price: 3, sale: true, rate: Rate.low },
    { name: "Jacket", price: 8, sale: false, rate: Rate.medium },
];
const themMoTa = (products) => {
    return products.map((item) => ({
        ...item,
        description: item.price > 5 ? "Tốt" : "Bình thường",
    }));
};
const hienThiDanhSach = (products) => {
    products.forEach((item) => {
        console.log(`Name: ${item.name} | Price: ${item.price} | Sale: ${item.sale} | Rate: ${item.rate}`);
    });
};
const tinhTongGia = (products) => {
    return products.reduce((tong, item) => tong + item.price, 0);
};
const locSanPhamSale = (products) => {
    return products.filter((item) => item.sale === true &&
        (item.rate === Rate.medium || item.rate === Rate.hight));
};
let danhSachMoi = themMoTa(danhSachSanPham);
hienThiDanhSach(danhSachMoi);
console.log("Tổng giá:", tinhTongGia(danhSachSanPham));
console.log("Sản phẩm sale & đánh giá >= Trung bình:", locSanPhamSale(danhSachSanPham));

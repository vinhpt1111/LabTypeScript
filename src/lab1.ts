// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
// Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
// Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
function ChuViHCN(chieuDai : number , chieuRong : number): { chuVi : number ; dienTich : number}{
    const chuVi = 2 * (chieuDai + chieuRong);
    const dienTich = chieuDai * chieuRong ;
    return {chuVi , dienTich};
}

function TinhTong(...numbers : number[]) : number {
    return numbers.reduce((sum , num) => sum + num  , 0);
}

function demKyTu(chuoi : string , kyTu : string) : number {
    let count = 0;
    for(const char of chuoi){
        if(char === kyTu){
            count++;
        }
    }
    return count;
}

function laSoNguyenTo(n : number) : boolean {
    if(n < 2) return false;
    for (let i  = 2 ;  i <= Math.sqrt(n); i++ ){
        if(n % i === 0 ) return false;
    }
    return true;
}
console.log(ChuViHCN(5, 3));
console.log(TinhTong(1, 2, 3, 4));
console.log(demKyTu("typescript", "t"));
console.log(laSoNguyenTo(11));
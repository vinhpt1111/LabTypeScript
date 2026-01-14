// File lab3.ts xứ lý theo yêu cầu, build lab3.js (dist)
// - Hàm tính điểm trung bình (Return type + Arrow Function)
// - Định nghĩa kiểu hàm kiểm tra số chẵn lẻ (Function as Type)
// - Hàm tạo thông tin người dùng (Default + Optional Parameter)
// - Hàm xử lý danh sách sản phẩm (Spread + Rest)

const tinhDiemTrungBinh = (toan: number, ly: number, hoa: number): number => {
    return (toan + ly + hoa) / 3;
  };
  
  type KiemTraChanLe = (so: number) => string;
  
  const kiemTraSo: KiemTraChanLe = (so) => {
    if (so % 2 === 0) {
      return 'Chẵn';
    }
    return 'Lẻ';
  };
  
  function taoThongTinNguoiDung(
    ten: string,
    tuoi: number = 18,
    diaChi?: string
  ): string {
    if (diaChi) {
      return `Tên: ${ten}, Tuổi: ${tuoi}, Địa chỉ: ${diaChi}`;
    }
    return `Tên: ${ten}, Tuổi: ${tuoi}`;
  }
  
  type SanPham = {
    ten: string;
    gia: number;
  };
  
  function xuLyDanhSachSanPham(
    ...danhSach: SanPham[]
  ): SanPham[] {
    return danhSach.map(sp => {
      return {
        ...sp,
        gia: sp.gia + 100,
      };
    });
  }
  
  console.log('Điểm TB:', tinhDiemTrungBinh(7, 8, 9));
  console.log(kiemTraSo(10));
  console.log(taoThongTinNguoiDung('Nam'));
  console.log(taoThongTinNguoiDung('Hùng', 20, 'Đà Nẵng'));
  
  const sp1 = { ten: 'Áo', gia: 200 };
  const sp2 = { ten: 'Quần', gia: 300 };
  
  console.log(xuLyDanhSachSanPham(sp1, sp2));
  
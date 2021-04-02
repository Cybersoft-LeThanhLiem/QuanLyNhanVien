var danhsachNV = new DanhSachNhanVien();
var validation = new Validation();

document.getElementById("btnThemNV").addEventListener("click", function () {
    var txtTK = document.getElementById("tknv").value;
    var txtTenNV = document.getElementById("name").value;
    var txtEmail = document.getElementById("email").value;
    var txtPassword = document.getElementById("password").value;
    var txtNgayLam = document.getElementById("datepicker").value;
    var txtLuongCB = parseInt(document.getElementById("luongCB").value);
    var txtChucVu = document.getElementById("chucvu").value;
    var txtGioLam = parseInt(document.getElementById("gioLam").value);

    var isValid = true;

    // Kiểm tra tài khoản nhân viên
    isValid &= validation.checkEmpty(txtTK, "tbTKNV", "Tài khoản nhân viên không được để trống!") && validation.checkAcc(txtTK, "tbTKNV", "Tài khoản chỉ được bao gồm chữ và số, 4 - 6 ký tự");

    // Kiểm tra họ tên
    isValid &= validation.checkEmpty(txtTenNV, "tbTen", "Họ tên không được để trống!") && validation.checkName(txtTenNV, "tbTen", "Tên không hợp lệ");

    if (isValid) {
        var nv = new NhanVien(txtTK, txtTenNV, txtEmail, txtPassword, txtNgayLam, txtLuongCB, txtChucVu, txtGioLam);
        nv.tinhLuong();
        nv.xepLoai();

        danhsachNV.themNV(nv);
        hienthiDS(danhsachNV.mangNV);
        console.table(danhsachNV.mangNV);
    }
});

function hienthiDS(dsnv) {
    var content = "";
    dsnv.forEach(function (nv) {
        content += `
            <tr>
                <td>${nv.tk}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.loai}</td>
                <td>
                    <button class="btn btn-info">Xem</button>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.tk}')">Xóa</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(acc) {
    danhsachNV.xoaNV(acc);
    hienthiDS(danhsachNV.mangNV);
}
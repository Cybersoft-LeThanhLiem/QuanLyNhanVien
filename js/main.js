var danhsachNV = new DanhSachNhanVien();

document.getElementById("btnThemNV").addEventListener("click", function () {
    var txtTK = document.getElementById("tknv").value;
    var txtTenNV = document.getElementById("name").value;
    var txtEmail = document.getElementById("email").value;
    var txtPassword = document.getElementById("password").value;
    var txtNgayLam = document.getElementById("datepicker").value;
    var txtLuongCB = parseInt(document.getElementById("luongCB").value);
    var txtChucVu = document.getElementById("chucvu").value;
    var txtGioLam = parseInt(document.getElementById("gioLam").value);

    if (true) {
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
                </td>
            </tr>
        `;
    });

    document.getElementById("tableDanhSach").innerHTML = content;
}
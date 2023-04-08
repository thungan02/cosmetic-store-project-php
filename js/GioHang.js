$(document).ready(function () {

    function kiemTraHoTen() {
        let hoTen = $("#txtHoTen").val();
        let regexHoTen = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;
        if (hoTen.trim() == "") {
            alert("Họ tên là bắt buộc.");
            return false;
        }
        if (!regexHoTen.test(hoTen)) {
            alert("Họ tên chỉ chứa chữ cái và khoảng trắng, chữ đầu tiên mỗi từ phải viết hoa");
            return false;
        }
        return true;
    };

    function kiemTraSDT() {
        let sdt = $("#txtSDT").val();
        let regexSDT = /^0\d{9}$/;
        if (sdt.trim() == "") {
            alert("Số điện thoại là bắt buộc.");
            return false;
        }
        if (!regexSDT.test(sdt)) {
            alert("Số điện thoại gồm 10 số và bắt đầu bằng 0");
            return false;
        }
        return true;
    };

    function kiemTraDiaChi() {
        let diaChi = $("#txtDiaChi").val();
        let regexDiaChi = /^[\w\s]+$/;
        if (diaChi.trim() == "") {
            alert("Địa chỉ là bắt buộc.");
            return false;
        }
        if (!regexDiaChi.test(diaChi)) {
            alert("Địa chỉ không hợp lệ");
            return false;
        }
        return true;
    }

    $("#btnDatHang").click(function () {
        if (!kiemTraHoTen() || !kiemTraSDT() || !kiemTraDiaChi()) {
            return false;
        }
        alert("Đặt hàng thành công.")
        return true;
    });


    $("#soluong").change(function () {
        render();
    });

    const SHIPPING = 30000;
    const DISCOUNT = 0;
    function render() {
        let subTotal = 0;
        let soluong = $("#soluong").val();
        var giatien = soluong * 270000;
        let shipping = SHIPPING.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        let giamgia = DISCOUNT.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        giatien = giatien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        $("#giatien").html(giatien);
        $("#tongtien").html(giatien);
        $("#shipping").html(shipping);
        $("#giamgia").html(giamgia);
    };

    render();
});

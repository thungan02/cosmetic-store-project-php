

$(document).ready(function() {
    function kiemtratendangnhap() {
        var kttendangnhap = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
        var txtten = $("#txtten").val();
        if(txtten == "") {
            $("#tbten").html("Không được để trống");
            return false;
        }
        if(!kttendangnhap.test(txtten)) {
            $("#tbten").html("Nhập sai cú pháp");
            return false;
        }
        $("#tbten").html("");
        return true;
    };
    $("#txtten").blur(kiemtratendangnhap);

    function kiemtraemail() {
        var ktemail = /^[a-zA-Z.0-9-_]+(@gmail.com){1}$/;
        var txtmail = $("#txtmail").val();
        if(txtmail == "") {
            $("#tbmail").html("Không được để trống");
            return false;
        }
        if(!ktemail.test(txtmail)) {
            $("#tbmail").html("Nhập sai cú pháp");
            return false;
        }
        $("#tbmail").html("");
        return true;
    };
    $("#txtmail").blur(kiemtraemail);

    function kiemtrapass() {
        var ktpass = /^[A-Za-z0-9]/;
        var txtpass = $("#txtpass").val();
        if(txtpass == "") {
            $("#tbpass").html("Không được để trống");
            return false;
        }
        if(!ktpass.test(txtpass)) {
            $("#tbpass").html("Nhập sai cú pháp");
            return false;
        }
        $("#tbpass").html("");
        return true;
    };
    $("#txtpass").blur(kiemtrapass);

    function kiemtrarepass() {
        var txtpass = $("#txtpass").val();
        var txtrepass = $("#txtrepass").val();
        if(txtrepass == "") {
            $("#tbrepass").html("Không được để trống");
            return false;
        }
        if(txtrepass == txtpass) {
            $("#tbrepass").html("");
            return true;
        }
        else {
            $("#tbrepass").html("Nhập lại đúng mật khẩu trên");
            return false;
        }
    };
    $("#txtrepass").blur(kiemtrarepass);

    function kiemtrahovaten() {
        var kthoten = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
        var txthoten = $("#txthoten").val();
        if(txthoten == "") {
            $("#tbhoten").html("Không được để trống");
            return false;
        }
        if(!kthoten.test(txthoten)) {
            $("#tbhoten").html("Nhập sai cú pháp");
            return false;
        }
        $("#tbhoten").html("");
        return true;
    };
    $("#txthoten").blur(kiemtrahovaten);

    function kiemtrasdt() {
        var ktsdt = /^[0-9]/;
        var txtsdt = $("#txtsdt").val();
        if(txtsdt == "") {
            $("#tbsdt").html("Không được để trống");
            return false;
        }
        if(!ktsdt.test(txtsdt)) {
            $("#tbsdt").html("Nhập sai cú pháp");
            return false;
        }
        $("#tbsdt").html("");
        return true;
    };
    $("#txtsdt").blur(kiemtrasdt);

    $("#dangky").click(function () {
        if(!kiemtratendangnhap()||!kiemtraemail()||!kiemtrapass()||!kiemtrarepass()||!kiemtrahovaten()||!kiemtrasdt()){
            alert("Đăng ký không thành công");
            return false;
        }
        else {
            alert("Đăng ký thành công");
            return true;
        }
            
      })
})
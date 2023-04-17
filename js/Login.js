
$(document).ready(function() {
    function kiemtrauser() {
        var ktuser = /^[A-Za-z0-9](5,)$/;
        var textuser = $("#txtuser").val();
        if(textuser == "") {
            $("#lbluser").html("Không được để trống");
            return false;
        }
        if(!ktuser.test(textuser)) {
            $("#lbluser").html("Nhập trên 5 kí tự");
            return false;
        }
        $("#lbluser").html("*");
        return true;
    };
    $("#txtuser").blur(kiemtrauser);

    function kiemtrapass() {
        var ktpass = /^[A-Za-z0-9]$/;
        var textpass = $("#txtpass").val();
        if(textpass == "") {
            $("#lblpass").html("Không được để trống");
            return false;
        }
        if(!ktpass.test(textpass)) {
            $("#lblpass").html("Phải nhập vào");
            return false;
        }
        $("#lblpass").html("*");
        return true;
    };
    $("#txtpass").blur(kiemtrapass);
})
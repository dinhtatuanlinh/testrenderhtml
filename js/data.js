// var lh = "https://dttl-phuc.herokuapp.com/";
var lh = 'http://localhost:1000/';
// var lh = "https://demo.noteatext.com/";
// var hostname = 'https://noteatext.com/portfolio/phuc/';
var hostname = 'http://127.0.0.1:5500/newview/';
// console.log(currentUrl);

function lay_thong_tin_cong_ty(Tham_so, id) {
    var Du_lieu = {};
    var Dia_chi_Xu_ly;
    var Xu_ly_HTTP = new XMLHttpRequest();
    id == null ? Dia_chi_Xu_ly = `${lh}${Tham_so}` : Dia_chi_Xu_ly = `${lh}req=${Tham_so}&id=${id}`;
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send("");
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    // if (Chuoi_JSON = "xoa member thanh cong") { location.reload() }
    if (Chuoi_JSON != "") Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;

}

function deletearecord(Tham_so, data) {
    var Dia_chi_Xu_ly;
    var Xu_ly_HTTP = new XMLHttpRequest();
    Dia_chi_Xu_ly = `${lh}${Tham_so}`;

    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send(data);
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    var Du_lieu = {};
    if (Chuoi_JSON != "") Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
}

function getsession(id) {
    // console.log(id);
    var Du_lieu = {};
    var Dia_chi_Xu_ly = `${lh}req=getsession&id=${id}`
    var Xu_ly_HTTP = new XMLHttpRequest();
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false);
    Xu_ly_HTTP.send("");
    var Chuoi_JSON = Xu_ly_HTTP.responseText;
    // console.log(Chuoi_JSON);
    // if (Chuoi_JSON = "xoa member thanh cong") { location.reload() }
    if (Chuoi_JSON != "") Du_lieu = JSON.parse(Chuoi_JSON);
    return Du_lieu;
}
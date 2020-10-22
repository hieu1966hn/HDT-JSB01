let soDauTien;
let soThuHai;
let toanTu;


let display = function (n) {
    let result = document.getElementById("result");
    if (result.value == "+" || result.value == "-" || result.value == "*" || result.value == "/") {
        result.value = "";
    }
    result.value = result.value + n;
}
let setOperator = function (n) {
    let result = document.getElementById("result");
    soDauTien = result.value;
    result.value = n;//n la toan tu     
    toanTu = n;
}

let tinhToan = function () {
    let result = document.getElementById("result");
    soThuHai = result.value;
    let ketQua = 0;
    soDauTien = parseFloat(soDauTien);
    soThuHai = parseFloat(soThuHai);
    if (toanTu === "+") {
        ketQua = soDauTien + soThuHai;
    }
    if (toanTu === "-") {
        ketQua = soDauTien - soThuHai;
    }
    if (toanTu === "*") {
        ketQua = soDauTien * soThuHai;
    }
    if (toanTu === "/") {
        ketQua = soDauTien / soThuHai;
    }
    result.value = ketQua;

}
let Clear = function () {
    document.getElementById("result").value = "";
}


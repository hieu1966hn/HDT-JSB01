// nhap vao 1 so n nguyen duong: in ra tich n*n;
let n;
do {
     n = Number(prompt("nhap vao 1 so n nguyen duong n"));

}
while (n < 0 || !isInterger(n));
console.log(n);




function isInterger(n) { /// xet xem n  co phai la so nguyen?
    if (parseInt(n) == n) {
        return true;
    }
    return false;
}
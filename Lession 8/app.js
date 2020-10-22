let n = Number(prompt("nhap vao so phan tu cua mang"));
let a = []
for (let i = 0; i < n; i++) {
    a.push(Number(prompt(`nhap vao a[${i + 1}] = `)));
}
console.log(a);
console.log("cac phan tu chan trong mang a la: ");
for (i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0){
        console.log((a[i]+ "\t"));
    }
}
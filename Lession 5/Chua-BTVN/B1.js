// // Viết một chương trình hỏi người dùng chiều cao (cm) và cân nặng (kg), sau đó tính chỉ số BMI (Chỉ số khối cơ thể) của họ:
// // BMI = khối lượng (kg) / (chiều cao (m) x chiều cao (m))
// // Lưu ý: bạn phải thực hiện chuyển đổi từ cm sang m trước khi tính

// // Sau đó, dựa trên chỉ số BMI, hãy nói với họ rằng họ:
// // Nhẹ cân nghiêm trọng nếu BMI <16
// // Thiếu cân nếu BMI từ 16 đến 18,5
// // Bình thường nếu BMI từ 18,5 đến 25
// // Thừa cân nếu BMI từ 25 đến 30
// // Béo phì nếu BMI trên 30
// let height = Number(prompt("please input your height: (cm)")) / 100;
// let weight = Number(prompt("please input your weight (kg)"));
// let BMI = (weight / (height * height)).toFixed(2);
// if (BMI < 16) {
//     console.log("your BMI is: " + BMI + "\nand you are Severely  ");
// }
// else if (BMI >= 16 && BMI <= 18.5) {
//     console.log("your BMI is: " + BMI + "\nand you are Underweight");
// }
// else if (BMI >= 18.5 && BMI <= 25) {
//     console.log("your BMI is: " + BMI + "\nand you are Normal");
// }
// else if (BMI >= 25 && BMI <= 30) {
//     console.log("your BMI is: " + BMI + "\nand you are Overweight");
// }
// else if (BMI > 30) {
//     console.log("your BMI is: " + BMI + "\nand you are Obese ");
// }
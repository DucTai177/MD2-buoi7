
function identity<T>(arg: T): T {
  return arg;
}

interface Box<T> {
  content: T;
}



// Gọi hàm với các kiểu dữ liệu khác nhau (string, number)
let stringResult = identity<string>("Xin chào, đây là TypeScript!");
let numberResult = identity<number>(2026);

console.log("Kết quả hàm identity (string):", stringResult);
console.log("Kết quả hàm identity (number):", numberResult);


let stringBox: Box<string> = {
  content: "Dữ liệu dạng chuỗi trong hộp",
};

let numberBox: Box<number> = {
  content: 999,
};

console.log("Nội dung stringBox:", stringBox.content);
console.log("Nội dung numberBox:", numberBox.content);

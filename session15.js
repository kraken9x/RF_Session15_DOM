// console.log("Hello world");

// DOM
// console.log(document);
// console.dir(document);

// 1. query HMTL element
// getElementById()

// let div = document.getElementById("demo-id"); // div#demo-id
// console.log(div);

// getElementsByClassName()

// let elements = document.getElementsByClassName("demo-class"); // [p, h6, div];
// console.log(elements);
// console.log(elements[0]); // p
// console.log(elements[elements.length - 1]); // div

// for (let i = 0; i <= elements.length - 1; i = i + 1) {
//   console.log(elements[i]);
// }

//
// let b = document.getElementsByClassName("demo-class2"); // [b]
// console.log(b[0]);

// getElementsByTagName()
// let divs = document.getElementsByTagName("div"); // [div, div]
// console.log(divs);
// console.log(divs[0]);

// querySelector()
// tagname
// let input = document.querySelector("input");
// id
// let input = document.querySelector("#demo-selector");
// class
// let input = document.querySelector(".demo-selector");
// attribute
// let input = document.querySelector(`input[type="text"]`);
// descendant selector
// let input = document.querySelector("form input");
// console.log(input);

// 2. Thao tác với các phần tử HTML được chọn

let div = document.getElementById("demo-dom");
console.log(div);
console.log(div.innerText); // Nội dung của thẻ HTML
console.log(div.textContent); // Nội dung của thẻ HTML
console.log(div.innerHTML); // Nội dung của thẻ HTML

div.innerText = "Nội dung mới vừa cập nhật";
div.textContent = "Nội dung được cập nhật bởi textContent";
div.innerHTML = "<b>Hello world</b> <i>How are you????</i>";

//
console.log(div.style);
div.style.color = "red";
div.style.backgroundColor = "blue";
div.style.fontSize = "30px";
div.style.width = "400px";
div.style.height = "400px";
div.style.borderRadius = "50%";
div.style.lineHeight = "400px";
div.style.textAlign = "center";

function handleClick() {
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

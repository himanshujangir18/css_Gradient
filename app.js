let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let bgColor = document.querySelector("section");
let copySec = document.getElementById("copyDiv");
let rgb1 = "#24c6dc";
let rgb2 = "#514a9d";
btn1.style.backgroundColor = "#24c6dc";
btn2.style.backgroundColor = "#514a9d";

const hexValue = () => {
  let values = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors += values[Math.floor(Math.random() * 16)];
  }

  return colors;
};

const handlebtn1 = () => {
  rgb1 = hexValue();
  btn1.innerText = rgb1;
  btn1.style.backgroundColor = `${rgb1}`;
  bgColor.style.backgroundImage = `linear-gradient(to right, ${rgb1}, #514a9d)`;
  copySec.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};
const handlebtn2 = () => {
  rgb2 = hexValue();
  btn2.innerText = rgb2;
  bgColor.style.backgroundImage = `linear-gradient(to right, #24c6dc, ${rgb2})`;
  copySec.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
  btn2.style.backgroundColor = `${rgb2}`;
};

btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);

btn3.addEventListener("click", () => {
  navigator.clipboard.writeText(copySec.innerText);
  alert("Copied to Clipboard");
});

const studentName = "Kuan Amirlan";
const studentGroup = "SE-2528";

console.log("Name:", studentName);
console.log("Group:", studentGroup);
alert("Hello, JavaScript World!");

const language = "JavaScript";
const firstNumber = 12;
const isLearning = true;

console.log("String:", language);
console.log("Number:", firstNumber);
console.log("Boolean:", isLearning);
console.log("Addition:", firstNumber + 4);
console.log("Subtraction:", firstNumber - 4);
console.log("Multiplication:", firstNumber * 4);
console.log("Division:", firstNumber / 4);
console.log("Concatenation:", language + " basics");

document.querySelector("#greeting-button").addEventListener("click", () => {
  alert("Hello, JavaScript World!");
});

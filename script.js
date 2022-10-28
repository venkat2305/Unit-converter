/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("button");
const len = document.getElementById("len");
const vol = document.getElementById("vol");
const mass = document.getElementById("mass");

convertBtn.addEventListener("click", function () {
  let inputValue = document.getElementById("input-btn").value;
  len.textContent = `${inputValue} meters = ${(3.281 * inputValue).toFixed(
    3
  )} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`;
  vol.textContent = `${inputValue} liters = ${(0.264 * inputValue).toFixed(
    3
  )} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(
    3
  )} liters`;
  mass.textContent = `${inputValue} kilos = ${(2.204 * inputValue).toFixed(
    3
  )} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`;
});

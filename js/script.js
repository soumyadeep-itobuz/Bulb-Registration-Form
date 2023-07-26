const inputArray = JSON.parse(localStorage.getItem("inputArray")) || [];
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const inputAddress = document.querySelector("#input-address");
const bulbOn = document.querySelector(".bulb-on");
const bulbOff = document.querySelector(".bulb-off");
const bulbInfo = document.querySelector(".bulb-info");
const oncountInfo = document.querySelector(".onCount-info");
const offcountInfo = document.querySelector(".offCount-info");

let onCount = localStorage.getItem("onCount") || 0;
let offCount = localStorage.getItem("offCount") || 0;

function submitForm() {
  if (
    !inputName.value ||
    !inputEmail.value ||
    !inputPassword.value ||
    !inputAddress.value
  )
    alert("Empty Field Not Allowed");
  else {
    window.location.href = "bulb.html";
    inputArray.push({
      name: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
      address: inputAddress.value,
    });
    localStorage.setItem("inputArray", JSON.stringify(inputArray));
  }
}

function showBulb() {
  bulbInfo.innerHTML = `<div class="text-center"><h1>Welcome!!!</h1>
  <p class="fs-2">${inputArray[inputArray.length - 1].name}</p></div>`;
}

function buttonOff() {
  bulbOn.classList.remove("hidden");
  bulbOff.classList.add("hidden");
  offCount++;
  localStorage.setItem("offCount", offCount);
  oncountInfo.innerHTML = `<span>No.of On-Counts are: ${localStorage.getItem(
    "offCount"
  )}</span>`;
}
oncountInfo.innerHTML = `<span>No.of On-Counts are: ${Number(localStorage.getItem(
  "offCount"
))}</span>`;

function buttonOn() {
  bulbOn.classList.add("hidden");
  bulbOff.classList.remove("hidden");
  onCount++;
  localStorage.setItem("onCount", onCount);
  offcountInfo.innerHTML = `<span>No.of Off-Counts are: ${localStorage.getItem(
    "onCount"
  )}</span>`;
}
offcountInfo.innerHTML = `<span>No.of Off-Counts are: ${Number(localStorage.getItem(
  "onCount"
))}</span>`;

function logOut(){
  localStorage.setItem("offCount", 0);
  localStorage.setItem("onCount", 0);
  window.location.href = 'index.html';
}

showBulb();

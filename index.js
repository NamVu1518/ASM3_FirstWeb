"use strict";

let formSubmit = document.querySelector(".form-submit");
let textDesSubmit = document.querySelector(".submit-description");
let inputSubmit = document.querySelector(".input-submit");
let btnSubmit = document.querySelector(".btn-submit");

let formInfo = document.querySelector(".form-info-contact");

let allDivInfo = document.querySelectorAll(".div-info");
let allContentInfo;
let allBtnViewMore;

// ------------------------------------------------------------ //

const regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

Main();

function Main() {
  btnSubmit.addEventListener("click", CheckEmailSubmit);

  BtnViewMoreSetUp();
}

// Info behavior
function DisplayInfo() {
  formSubmit.classList.add("d-none");
  formInfo.classList.remove("d-none");
}

function CheckEmailSubmit() {
  let inputStr = inputSubmit.value;

  if (regexEmail.test(inputStr)) {
    DisplayInfo();
  } else {
    textDesSubmit.textContent =
      "Email có thể đang sai cú pháp, xin hãy kiểm tra lại!";
  }

  return inputStr;
}

//Funtion collapse the info
function ViewExpand(contentInfo) {
  contentInfo.classList.remove("d-none");
}

function ViewCollapse(contentInfo) {
  contentInfo.classList.add("d-none");
}

function BtnViewMoreAddEvent(btnViewMore, contentInfo) {
  btnViewMore.addEventListener("click", () => {
    btnViewMore.textContent = "View Less";
    ViewExpand(contentInfo);
    btnViewMore.removeEventListener("click", this);
    BtnViewLessAddEvent(btnViewMore, contentInfo);
  });
}

function BtnViewLessAddEvent(btnViewLess, contentInfo) {
  btnViewLess.addEventListener("click", () => {
    btnViewLess.textContent = "View More";
    ViewCollapse(contentInfo);
    btnViewLess.removeEventListener("click", this);
    BtnViewMoreAddEvent(btnViewLess, contentInfo);
  });
}

function BtnViewMoreSetUp() {
  for (let i = 0; i < allDivInfo.length; i++) {
    let btnViewMore = allDivInfo[i].querySelector(".btn-view-more");
    let contentInfo = allDivInfo[i].querySelector(".content-info");
    BtnViewMoreAddEvent(btnViewMore, contentInfo);
  }
}

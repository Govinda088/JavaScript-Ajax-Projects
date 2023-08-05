import get from "./utils/getElement.js";
import getUser from "./utils/getUser.js";

const img = get(".user-img");
const tittle = get(".user-title");
const value = get(".user-value");
const btns = [...document.querySelectorAll(".icon")];
const btn = get(".btn");

const displayUSer = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  tittle.textContent = "My name is";
  // btns.forEach((btn) => {
  //   btn.classList.remove("active");
  // });

  btns[0].classList.add("active");

  btns.forEach((btn) => {
    const label = btn.dataset.label;

    btn.addEventListener("click", () => {
      tittle.textContent = `My ${label} is`;
      value.textContent = person[label];
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });
};

const showUser = async () => {
  //   get data from api
  const person = await getUser();

  //display data on window

  displayUSer(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);

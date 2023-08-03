const btn = document.querySelector(".btn");
const URL = "https://api.chucknorris.io/jokes/random";
const content = document.querySelector(".content");
const img = document.querySelector(".container img");

btn.addEventListener("click", () => {
  fetch(URL).then((data) =>
    data
      .json()
      .then((response) => {
        displayData(response);
      })
      .catch((err) => {
        console.log(err);
      })
  );
});

function displayData({ value: Joke }) {
  img.classList.add("shake-img");

  content.textContent = Joke;
  const randomValue = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, randomValue);
}

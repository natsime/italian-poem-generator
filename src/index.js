function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Sempre caro mi fu quest'ermo colle",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-genetator-form");
poemFormElement.addEventListener("submit", generatePoem);

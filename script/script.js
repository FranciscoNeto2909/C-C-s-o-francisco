const button = document.querySelector("#button");
const voices = document.querySelector("#voices");
const person = document.querySelector("#person");
const place = document.querySelector("#place");
let selectedVoice = 0;
let talking = false;

window.speechSynthesis.addEventListener("voiceschanged", (voice) => {
  const speachVoices = window.speechSynthesis.getVoices();
  for (const i in speachVoices) {
    const option = document.createElement("option");
    option.setAttribute("value", i);
    option.innerText = speachVoices[i].name;
    voices.appendChild(option);
  }
});

voices.addEventListener("change", () => {
  selectedVoice = parseInt(voices.value);
});

button.addEventListener("click", () => {
  if (talking == false) {
    talking = true;
    const speachVoices = window.speechSynthesis.getVoices();
    const text = `${person.value} por favor comparecer ao ${place.value}`;
    let ut = new SpeechSynthesisUtterance(text);
    ut.rate = 1.6;
    ut.voice = speachVoices[selectedVoice];
    window.speechSynthesis.speak(ut);
    button.classList.add("disabled");
    setTimeout(() => {
      button.classList.remove("disabled");
      talking = false;
    }, 2500);
  }
});

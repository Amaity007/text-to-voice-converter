//creates a new SpeechSynthesisUtterance object, which is used to represent the speech request.
let speech = new SpeechSynthesisUtterance();

// an empty array that will  hold the available voices from the speechsynthesis API.
let moreVoices = [];

let voiceSelect = document.querySelector("select");//target the select

window.speechSynthesis.onvoiceschanged = () => {
    moreVoices = window.speechSynthesis.getVoices();// get all the voices
    speech.voice = moreVoices[0];//by default the first voice

    moreVoices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))); //for more voice options
};

voiceSelect.addEventListener("change", () => {
    speech.voice = moreVoices[voiceSelect.value];//helps to change the options
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);//after clicking the button speech will be start
});




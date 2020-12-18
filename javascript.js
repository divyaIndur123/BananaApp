/* wiring click button*/
var translateButton = document.querySelector(".button-primary");
var outputText = document.querySelector(".content-area.main-output");
var inputText = document.querySelector("textarea");

//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function buildUrl(textInput) {
  return serverUrl + "?" + "text=" + textInput;
}

function errorHandler(error){
    console.log("Server is Down! Try after some time");
}

function clickHandler() {
  var input = inputText.value;
  fetch(buildUrl(input))
    .then((response) => response.json())
    .then((json) => (outputText.innerText = json.contents.translated))
    .catch(errorHandler);
}
 translateButton.addEventListener("click", clickHandler);

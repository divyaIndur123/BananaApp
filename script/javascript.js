/* input*/
var translateButton = document.querySelector(".button-primary");
var outputText = document.querySelector(".content-area.main-output");
var inputText = document.querySelector("textarea");

//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

//building url with message to translate
function buildUrl(textInput) {
  return serverUrl + "?" + "text=" + textInput;
}

// to handle the  server error 
function errorHandler(error){
    console.log("Server is Down! Try after some time");
}

// processing - to fetch the data from server
function clickHandler() {
  var input = inputText.value;
  fetch(buildUrl(input))
    .then((response) => response.json())
    .then((json) => (outputText.innerText = json.contents.translated))
    .catch(errorHandler);
}

 translateButton.addEventListener("click", clickHandler);

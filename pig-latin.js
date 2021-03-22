

function searchpigTalk(){

  var textInputArea = document.querySelector(".inputTextArea").value;

  var search = "https://api.funtranslations.com/translate/pig-latin.json" + "?text=" + textInputArea;

  fetch(search).then(response => response.json()).then(json => document.querySelector(".textOutputArea").innerHTML = json.contents.translated).catch(errorChecker);
}
function errorChecker(error){
  alert("error");
}

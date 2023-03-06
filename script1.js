function getSelectedText() {
    var text = "";
  
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && this.document.selection.type != "Control") {
      text = document.selection.createRange().text;
    }
  
    return text;
  }
  
  var flag = false;
  var speechSynthesisUtterance = new SpeechSynthesisUtterance();
  
  speechSynthesisUtterance.lang = 'en-US';
  speechSynthesisUtterance.voice = speechSynthesis.getVoices().find(function(voice) { return voice.name === 'Microsoft David Desktop - English (United States)'; });
  speechSynthesisUtterance.rate = 0.7;

  $(document).ready(function() {
    $(document).mouseup(function(e) {
      var selectedText = getSelectedText();
  
      if (selectedText !== "") {
        if (!flag) {
          speechSynthesisUtterance.text = selectedText;
          speechSynthesis.speak(speechSynthesisUtterance);
          flag = true;
        } else {
          speechSynthesis.cancel();
          flag = false;
        }
      }
    });
  });
  
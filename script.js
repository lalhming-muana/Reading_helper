window.addEventListener('DOMContentLoaded', function() {
    // Your code here
    $('p').each(function() {
        var $this = $(this);
        $this.html($this.text().replace(/\b(\w+)\b/g, "<span>$1</span>"));
    });
    
    $('p span').hover(
        function() {
          var highlightedText = $(this).text();
          $('#word').text($(this).css('background-color','#ffff66').text());
          var msg = new SpeechSynthesisUtterance();
          msg.text = highlightedText;
          window.speechSynthesis.speak(msg);
        },
        function() {
          $('#word').text(''); 
          $(this).css('background-color','');
          window.speechSynthesis.cancel();
        }
      );
      
    

});


 /*
window.addEventListener('DOMContentLoaded', function() {
    // Your code here
  
document.getElementById('editable-text').addEventListener('click', function(event) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var text = range.startContainer.textContent;
    var startIndex = range.startOffset;
    var endIndex = range.endOffset;
    var clickedWord = text.substring(startIndex, endIndex);
    alert('You clicked on the word "' + clickedWord + '", which starts at index ' + startIndex + '!');
  });

});
 
  This code adds an event listener to the div element with the id of editable-text. When the user clicks on a word inside the div, the function gets called with an event object that contains information about the click.
  
  The function first gets the current selection using window.getSelection(). It then gets the range of the selected text using selection.getRangeAt(0) and gets the text content of the range's start container using range.startContainer.textContent.
  
  Next, the function gets the start and end indices of the selected text using range.startOffset and range.endOffset. It then uses these indices to extract the clicked word from the text using text.substring(startIndex, endIndex).
  
  Finally, the function displays an alert message to the user with the clicked word and its start index in the text.
  
  With this code, each word in the input text element can be clicked and its index will be displayed to the user.
  */
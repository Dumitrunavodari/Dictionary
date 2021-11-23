function addWord() {
  var word = document.getElementById("word").value;
  // next code (lines: 4-16) is meant for verifying if text is an word and to change caps
  /*for (var x = 0; x < word.length; x++) {
    var characterCode = word.charCodeAt(x);
    if(characterCode < 65 || (90 < characterCode && characterCode < 97) || 122 < characterCode) {
      alert('This is not an word.');
      return false;
    } else if (64 < characterCode && characterCode < 91) {
      characterCode = characterCode + 32;
      word = word.substring(0, x) + String.fromCharCode(characterCode) + word.substring(x + 1);
    }
  }*/
  var writingPosition = 0;
  if(window.localStorage.length)
    writingPosition = window.localStorage.length;
  if(!window.localStorage.getItem(word)) {
    window.localStorage.setItem(word , writingPosition);
    alert('The word ' + word +' has been added to Dictionary.')
  } else {
    alert('The word has previously been included in the Dictionary.');
  }
   return false;
}

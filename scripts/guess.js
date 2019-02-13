// When using this script, you must have the correct dom elements
// and a global variable answer.

(function() {
  const guessForm = document.getElementById('guess-form');
  const result = document.getElementById('result');

  guessForm.addEventListener('submit', function(ev) {
    ev.preventDefault();

    var value = this['guess'].value;
    var correct = value === answer;

    if (value)
      result.innerText = 
        `${
          correct ? 'Correct' : 'Wrong'
        }! This poem was written by ${author}.`;
    else
      result.innerText =
        'Please make a guess...';
  });
})();

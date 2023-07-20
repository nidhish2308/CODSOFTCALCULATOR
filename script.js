function appendValue(value) {
    document.getElementById('result').value += value;
  }
  
  function calculate() {
    const result = document.getElementById('result').value;
    const answer = eval(result);
    document.getElementById('result').value = answer;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
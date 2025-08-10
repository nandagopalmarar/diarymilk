const outputDiv = document.getElementById('output');
const printBtn = document.getElementById('changeBtn');

printBtn.addEventListener('click', () => {
  const fixedText = "Buy me some DIARYMILK!😭!";
  outputDiv.textContent = fixedText;
  console.log(fixedText);
  alert('Printed to console: "' + fixedText + '"');
});


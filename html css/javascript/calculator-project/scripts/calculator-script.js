let calculation = localStorage.getItem('calculation')||'';
      
function updateCalculation(value) {
  calculation += value;
  document.querySelector('.calculation-content').innerHTML=calculation;
   calculation;
}
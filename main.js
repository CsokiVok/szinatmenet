import './style.css'

const szin1 = document.getElementById('szin1');
   const szin2 = document.getElementById('szin2');
   const szinbox = document.getElementById('szinbox');
   function updateGradient() {
       const colorValue1 = szin1.value;
       const colorValue2 = szin2.value;
       szinbox.style.background = `linear-gradient(to right, ${colorValue1}, ${colorValue2})`;
   }
   szin1.addEventListener('input', updateGradient);
   szin2.addEventListener('input', updateGradient);

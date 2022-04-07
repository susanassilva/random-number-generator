const number = document.querySelector('.count');
const randomNumber = document.querySelector('.btn-number');

randomNumber.addEventListener("click", () => {
  // gera números de 0 até 100
  number.innerHTML = Math.round(Math.random() * 100);
  
});
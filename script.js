const number = document.querySelector('.count');
const randomNumber = document.querySelector('.btn-number');


const generateRandomInteger = () => {
  const random = Math.round(Math.random() * 100);
  number.innerHTML = random;
}

randomNumber.addEventListener("click", generateRandomInteger);
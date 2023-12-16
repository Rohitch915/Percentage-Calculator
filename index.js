let number = document.querySelectorAll('.number');
let button = document.querySelector('.button');
let result1 = document.querySelector('.result');

function calc(event) {
   event.preventDefault();
   let sum = 0;
   if (Number(number[0].value) >= 0 && Number(number[1].value) >= 0 && Number(number[2].value) >= 0 && Number(number[3].value) >= 0) {
      for (let i = 0; i < 4; i++) {
         sum += Number(number[i].value);
      }

      result1.innerHTML = "You have got " + sum + " marks out of 400 and your percentage is " + Math.round((sum / 400) * 100) + "%";
   }


}
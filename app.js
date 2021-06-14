const weatherapi = new Weather;
const ui = new UI;

document.addEventListener('DOMContentLoaded', weatherapi.defaultCity('Niamey'));

document.querySelector('.card').addEventListener('click',ui.changeLocation);
document.getElementById('cancel').addEventListener('click', ui.closePrompt);
let input = document.querySelector('.cityInput');
document.querySelector('.changeLocationCard').addEventListener('click',function(e){
  if (e.target.id === 'searchLocation'){
    weatherapi.getTemp(input.value);
  }
});

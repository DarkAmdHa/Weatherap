class UI{
  constructor(){

  }
  showWeather(data){
    console.log(data);
    const toFarhenheit = cels => {
      return (cels*9/5)+32;
    }
    const farhenheit = toFarhenheit(data.main.temp);
    const feels_like_fr = toFarhenheit(data.main.feels_like);
    document.querySelector('.card').innerHTML = `<p class='location'>${data.name}, ${data.sys.country}</p>
    <p class='weather'>${(data.weather[0].description)[0].toUpperCase()}${data.weather[0].description.slice(1)}</p>
    <p class='temp'>${data.main.temp}&deg C (${farhenheit.toFixed(2)}&deg F)</p>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather" class='weatherpic'></img>
    <table>
      <tbody>
      <tr><td>Relative Humidity: ${data.main.humidity}%</td></tr>
        <tr><td>Feels like: ${data.main.feels_like.toFixed(2)}&deg C (${feels_like_fr}&deg F)</td></tr>
        <tr><td>Visisbility: ${data.visibility}</td></tr>
        <tr><td>Wind:${data.wind.deg}&deg at ${data.wind.speed} m/s</td></tr>
      </tbody>
    </table>
    <div class='btn'>
      <button id='changeLocation'>Change Location</button>
    </div>`
  }

  changeLocation(e){
    if (e.target.id === 'changeLocation'){
        console.log(e.target);
        document.querySelector('.card').classList.toggle('cardblur');
        document.querySelector('.changeLocationCard').classList.toggle('innactive');
        document.querySelector('.content').classList.toggle('innactive');
    }
  }

  closePrompt(){
    document.querySelector('.card').classList.toggle('cardblur');
    document.querySelector('.changeLocationCard').classList.toggle('innactive');
    document.querySelector('.content').classList.toggle('innactive');
    document.querySelector('.cityInput').value = '';
  }

  showAlert(message){
    while(!document.querySelector('.alert')){
      const alert = document.createElement('div');
      alert.className = 'alert';
      alert.innerText = message;
      const input = document.querySelector('.cityInput');
      document.querySelector('.content').insertBefore(alert,input);
      setTimeout(()=>{document.querySelector('.alert').remove()},3000);
    }
}
}

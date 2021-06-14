class Weather{
    constructor(){
      this.appid='341b6f12f665f1a231f5f01934c1f8ea';
      const ui = new UI();
    }
    async defaultCity(city){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appid}&units=metric`);
        const data = await response.json();
        if(data.message === 'city not found'){
          ui.showAlert('City not found. Please check the name of the city');
        }else if(data.message === 'Nothing to geocode')
          ui.showAlert('Please enter the name of your city');
        else {
          ui.showWeather(data);
        }
    }
    async getTemp(city){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appid}&units=metric`);
        const data = await response.json();
        if(data.message === 'city not found'){
          ui.showAlert('City not found. Please check the name of the city');
        }else if(data.message === 'Nothing to geocode')
          ui.showAlert('Please enter the name of your city');
        else {
          ui.showWeather(data);
          ui.closePrompt();
        }
  }
}

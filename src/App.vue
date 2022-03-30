
<template>
  <div class="container">
    <AppHeader :lang="currentLang" />
    <AppControlPanel :isExist="false" @change-lang="changeLanguage" :name="currentLang" />
    <AppDefaultCity :city-by-default="cityDefault" :city-by-getting="currentCity" :city-d="currentLang" />
    <AppSelectCity :name="currentLang" />
    <AppControlPanel :isExist="true" @change-lang="changeLanguage" :name="currentLang"/>
    <AppInfoBlock :first-param="forecast.main.temp + ' C'" :first-title="$translate('block.temperature', currentLang)"
                  :second-param="forecast.main.feels_like + ' C'" :second-title="$translate('block.feelsTemp', currentLang)" />
    <AppInfoBlock :first-param="forecast.weather[0].description" :first-title="$translate('block.condition', currentLang)"
                  :second-param="forecast.wind.speed + ' m/c'" :second-title="$translate('block.wind', currentLang)" />
    <AppInfoBlock :first-param="forecast.main.pressure + ' mm'" :first-title="$translate('block.pressure', currentLang)"
                  :second-param="forecast.main.humidity + ' %'" :second-title="$translate('block.humidity', currentLang)" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppDefaultCity from './components/control-app/AppDefaultCity.vue'
import AppSelectCity from './components/control-app/AppSelectCity.vue'
import AppControlPanel from './components/control-app/AppControlPanel.vue'
import AppInfoBlock from './components/AppInfoBlock.vue'
import axios from 'axios'
export default {
  data() {
    return {
      cityDefault: 'Нижний Новгород',
      currentCity: '',
      coordsDefault: { lat: 55.7878944, lot: 49.1233293 },
      coords: { lat: null, lot: null },
      isPosition: '',
      errorPosition: { code: 0, message: '' },
      paramRequest: 'q=',
      switchLang: false,
      currentLang: 'En',
      forecast: {
        main: { temp: 0, feels_like: 0,  },
        wind: { speed: 0 },
        weather: [ { description: '' } ]
      },
      vocabulary: {
        temperature: 'Temperature',
        feelsTemp: 'Fells like',
        condition: 'Weather description',
        wind: 'Speed of wind',
        pressure: 'Pressure',
        humidity: 'Humidity'
      }
    }
  }, 

  mounted() {
    navigator.geolocation.getCurrentPosition( this.getCoordsSuccess, this.getCoordsFailure );
  },

  methods: {
    getCoordsSuccess( position ) {
      const lat = position.coords.latitude;
      const lot = position.coords.longitude;
      this.isPosition = true;
      this.paramRequest = `lat=${lat}&lon=${lot}`;
      this.getWeather( this.paramRequest );
    },
    getCoordsFailure( positionError ) {
      console.log('error', positionError.code, positionError.message);
      // if(positionError.code == 1) { result.innerHTML = "Вы решили не предоставлять данные о своем местоположении" 
          // } else if(positionError == 2) { result.innerHTML = "Проблемы с сетью или нельзя связаться со службой определения "
          // } else if(positionError == 3) { result.innerHTML = "He удалось определить местоположение " + "в течение установленного времени. "
          // } else { result.innerHTML = "Загадочная ошибка."}
      this.isPosition = false;
      this.paramRequest += this.cityDefault;
      this.getWeather( this.paramRequest );
    },
    async getWeather( param ) {
      let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?${param}&lang=ru&units=metric&appid=861920433ae1e17f7b3c0c16649d8d79`);
      this.currentCity = data.name;
      this.forecast = {...data};
    },
    changeLanguage() {
      this.switchLang = !this.switchLang;
      if( this.switchLang ) { 
        this.currentLang = 'Ru';
      } else this.currentLang = 'En';
    }
  },

  components: {
    AppHeader, AppDefaultCity, AppSelectCity, AppControlPanel, AppInfoBlock
  }
}

</script>

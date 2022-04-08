
<template>
  <div class="container">
    <AppHeader :lang="currentLang" />
    <AppControlPanel :isExist="displayType.firstPanel" @change-lang="changeLanguage" :name="currentLang" :theme="currentTheme" @change-theme="chngThm"/>
    <AppShowCity :city-by-default="cityDefault" :city-by-getting="currentCity" :city-d="currentLang" :city-by-chosen="chosenCity" :get-error="errorPosition.message"/>
    <AppSelectCity :name="currentLang" @select-city="selectCity"/>
    <AppControlPanel :isExist="displayType.secondPanel" @change-lang="changeLanguage" :name="currentLang" :theme="currentTheme" @change-theme="chngThm"/>
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
import AppShowCity from './components/control-app/AppShowCity.vue'
import AppSelectCity from './components/control-app/AppSelectCity.vue'
import AppControlPanel from './components/control-app/AppControlPanel.vue'
import AppInfoBlock from './components/AppInfoBlock.vue'
import axios from 'axios'
export default {
  data() {
    return {
      sizeWindow: null,
      cityDefault: 'Нижний Новгород',
      currentCity: '',
      chosenCity: '',
      flagCity: 0,
      isPosition: '',
      errorPosition: { code: 0, message: '' },
      paramRequest: 'q=',
      switchLang: false,
      currentLang: 'En',
      switchTheme: false,
      currentTheme: 'Dark',
      displayType: { firstPanel: false, secondPanel: true },
      idTracker: null,
      forecast: {
        main: { temp: 0, feels_like: 0,  },
        wind: { speed: 0 },
        weather: [ { description: '' } ],
        name: ''
      }
    }
  }, 

  mounted() {
    this.measure();
    navigator.geolocation.getCurrentPosition( this.getCoordsSuccess, this.getCoordsFailure );
  },

  beforeUnmount() {
    clearInterval( this.idTracker );
  },

  methods: {
    getCoordsSuccess( position ) {
      const lat = position.coords.latitude;
      const lot = position.coords.longitude;
      this.isPosition = true;
      this.flagCity = 1;
      this.getWeather( `lat=${lat}&lon=${lot}`, this.flagCity );
    },
    measure() {
      this.sizeWindow = window.innerWidth;
      this.idTracker = setInterval( () => { this.sizeWindow = window.innerWidth }, 1000 );
    },
    getCoordsFailure( positionError ) {
      console.log('error', positionError.code, positionError.message);
      // if(positionError.code == 1) { result.innerHTML = "Вы решили не предоставлять данные о своем местоположении" 
          // } else if(positionError == 2) { result.innerHTML = "Проблемы с сетью или нельзя связаться со службой определения "
          // } else if(positionError == 3) { result.innerHTML = "He удалось определить местоположение " + "в течение установленного времени. "
          // } else { result.innerHTML = "Загадочная ошибка."}
      this.isPosition = false;
      this.flagCity = 2;
      this.getWeather( this.paramRequest + this.cityDefault, this.flagCity );
    },
    async getWeather( param, flag ) {
      let { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?${param}&lang=ru&units=metric&appid=861920433ae1e17f7b3c0c16649d8d79`);
      if( flag === 1 ) { 
        this.currentCity = data.name 
      } else if( flag === 3 ) {
        this.chosenCity = data.name
      }
      this.forecast = {...data};
    },
    changeLanguage() {
      this.switchLang = !this.switchLang;
      if( this.switchLang ) { 
        this.currentLang = 'Ru';
      } else this.currentLang = 'En';
    },
    chngThm() {
      this.switchTheme = !this.switchTheme;
      if( this.switchTheme ) { 
        this.currentTheme = 'Light';
        this.$changeTheme( this.currentTheme );
      } else {
        this.currentTheme = 'Dark';
        this.$changeTheme( this.currentTheme );
      }
    },
    selectCity( city ) {
      this.flagCity = 3;
      this.getWeather( this.paramRequest + city, this.flagCity );
    }
  },

  watch: {
    sizeWindow(newValue) {
      if( newValue < 1025 ) {
        this.displayType.firstPanel = true;
        this.displayType.secondPanel = false;
      } else {
        this.displayType.firstPanel = false;
        this.displayType.secondPanel = true;
      }
    }
  },

  components: {
    AppHeader, AppShowCity, AppSelectCity, AppControlPanel, AppInfoBlock
  }
}

</script>
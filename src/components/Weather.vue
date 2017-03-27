<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="weather">
    <div class="location">{{location}}</div>
    <div class="date">{{date}}</div>
    <div class="description">{{description}}</div>
    <div class="current">
      <div class="visual">
        <div class="icon cloudy" alt="cloudy"></div>
        <div class="temp">{{temp}}</div>
        <div class="scale">ºF</div>
      </div>
      <div class="text">
        <div class="precipitation">Precipitation: <span>{{precipitation}}</span></div>
        <div class="humidity">Humidity: <span>{{humidity}}</span></div>
        <div class="wind">Wind: <span>{{wind}}</span></div>
        <div class="pollen">Pollen Count: <span>{{pollen}}</span></div>
      </div>
    </div>
    <div class="forecast">
      <div class="forecast-day" v-for="forecast in forecast">
        <div class="date">{{forecast.date}}</div>
        <div v-bind:class="'icon ' + forecast.icon"></div>
        <div class="forecast-temperature">
          <div class="high-temp">{{forecast.highTemp}}°</div>
          <div class="low-temp">{{forecast.lowTemp}}°</div>
        </div>
        <div class="pcount">Pollen {{pollen}}</div>
      </div>
    </div>
    <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
      <span>Connection error. Ensure the database is open.</span>
    </md-snackbar>
  </div>
</template>

<script>
  export default {
    name: 'weather',
    data () {
      return {
        location: 'New York, NY',
        date: 'Tuesday, April 15th',
        description: 'Overcast',
        temp: 58,
        precipitation: '100%',
        humidity: '97%',
        wind: '4mph SW',
        pollen: 36,
        forecast: [
          { 'date': 'Monday', 'icon': 'thunderstorms', 'lowTemp': 36, 'highTemp': 68 },
          { 'date': 'Tuesday', 'icon': 'sunny', 'lowTemp': 39, 'highTemp': 50 },
          { 'date': 'Wednesday', 'icon': 'sunny', 'lowTemp': 38, 'highTemp': 55 },
          { 'date': 'Thursday', 'icon': 'partly', 'lowTemp': 42, 'highTemp': 54 },
          { 'date': 'Friday', 'icon': 'raincloudy', 'lowTemp': 45, 'highTemp': 62 },
          { 'date': 'Saturday', 'icon': 'raincloudy', 'lowTemp': 50, 'highTemp': 64 },
          { 'date': 'Sunday', 'icon': 'partly', 'lowTemp': 52, 'highTemp': 63 }
        ]
      }
    },
    methods: {
      fetchWeather: function () {
        console.log('TODO')
      }
    },
    created: function () {
      this.fetchWeather()
    },
    showConnectionError: function () {
      this.$refs.connectionError.open()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    font-size: 1.0em;
  }
  /* CONTENIDOR Principal */
  .weather {
    width: 100%;
    display: inline-block;
    padding: 20px;
    box-shadow: 0 7px 10px rgba(0,0,0,0.2);
    transition: box-shadow 0.3s;
  }
  .weather:hover {
    box-shadow: 0 50px 40px rgba(0,0,0,0.2);
  }
  /* Pantalles més grans de 700px */
  @media (min-width: 700px) {
    .weather {
      width: 700px;
    }
  }

  /* INFO Principal */
  /* Títol */
  .location {
    font-size: 3em;
    color: #333;
  }
  /* Data */
  .date {
    font-size: 0.9em;
    color: #333;
  }
  /* Descripció */
  .description {
    font-size: 0.9em;
    color: #333;
  }

  /* Contenidor Dades */
  .current {
    overflow: auto;
    width: 100%;
    margin-bottom: 20px;
  }
  /* Contenidor Dades IMG i Temp. */
  .visual {
    float: left;
    width: 50%;
  }
  /* IMG */
  .visual .icon{
    width: 64px;
    height: 64px;
  }
  /* Temperatura */
  .visual .temp {
    font-size: 2.0em;
    display: inline-block;
    vertical-align: top;
    color: #333;
  }
  .visual .scale {
    font-size: 0.9em;
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    color: #888;
  }
  /* Contenidor Dades Text */
  .text {
    float: right;
    width: 50%;
  }
  .text > div {
    font-size: 0.9em;
    color: #999;
    line-height: 18px;
  }
  .text span {
    font-size: 0.9em;
    color: #666;
  }

  /* Contenidor Dies */
  .forecast {
    margin-bottom: 15px;
  }
  .forecast-day {
    display: inline-block;
    width: 14.285%;
    text-align: center;
  }
   /* Dia */
  .forecast-day .date {
    font-size: 0.6em;
    text-align: center;
    font-weight: 600;
    color: #333;
  }
  /* Icona */
  .forecast-day .icon {
    width: 64px;
    height: 64px;
  }
  /* Temperatures Max. i Min. */
  .forecast-day .forecast-temperature {
    text-align: center;
    font-size: 0.9em;
  }
  .forecast-day .high-temp,
  .forecast-day .low-temp {
    display: inline-block;
  }
  /* Max. */
  .forecast-day .high-temp {
    color: #bc5a45;
  }
  /* Min. */
  .forecast-day .low-temp {
    color: #36486b;
  }
  /* Comptador Polen */
  .forecast-day .pcount {
    font-size: 0.7em;
  }

  .visual .temp,
  .visual .scale,
  .visual .icon {
    display: inline-block;
  }
  .visual .scale,
  .visual .temp {
    vertical-align: top;
  }

  /* ICONES */
  .icon {
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: auto;
    margin-right: auto;
  }

  .icon.cloudy {
    background-image: url('../assets/cloudy.png');
  }

  .icon.partly {
    background-image: url('../assets/partly_cloudy.png');
  }

  .icon.raining {
    background-image: url('../assets/rain.png');
  }

  .icon.raincloudy {
    background-image: url('../assets/rain_s_cloudy.png');
  }

  .icon.thunderstorms {
    background-image: url('../assets/thunderstorms.png');
  }

  .icon.sunny {
    background-image: url('../assets/sunny.png');
  }

  /* Pantalles més petites de 650px */
  @media (max-width: 650px) {
    /* Títol */
    .location {
      font-size: 2.5em;
    }
    /* Data */
    .date {
      font-size: 1em;
      color: #333;
    }
    /* Contenidor dies */
    .forecast-day {
      display: block;
      border-top: 1px solid #999;
      width:100%;
    }
    /* Dia */
    .forecast-day .date {
      font-size: 1.3em;
      width: 60%;
      text-align: left;
    }
    /* Temperatura */
    .forecast-day .forecast-temperature {
      font-size: 1em;
      text-align: center;
      width: 40%;
      margin-left: 60%;
    }
    /* Comptador Polen */
    .forecast-day .pcount {
      font-size: 1em;
      text-align: center;
      width: 40%;
      margin-left: 60%;
    }
    .date,
    .icon,
    .high-temp,
    .low-temp {
      display: inline-block;
    }
  }
  /* Pantalles més petites de 650px */
  @media (max-width: 352px) {
    /* Títol */
    .location {
      font-size: 2em;
    }
  }
</style>
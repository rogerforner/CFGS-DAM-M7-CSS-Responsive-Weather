<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="weather">
    <div class="location">{{location}}</div>
    <div class="date">{{date}}</div>
    <div class="description">{{description}}</div>
    <div class="current">
      <div class="visual">
        <div class="icon cloudy" alt="cloudy"></div>
        <div class="temp">{{temp}}</div>
        <div class="scale">º</div>
      </div>
      <div class="text">
        <div class="precipitation">Precipitation: {{precipitation}}</div>
        <div class="humidity">Humidity: {{humidity}}</div>
        <div class="wind">Wind: {{wind}}</div>
        <div class="pollen">Pollen: {{pollen}}</div>
      </div>
    </div>
    <div class="forecast">
      <div class="forecast-day" v-for="forecast in forecast">
        <div class="date">{{forecast.date}}</div>
        <div v-bind:class="'icon ' + forecast.icon"></div>
        <div class="high-temp">{{forecast.highTemp}}</div>
        <div class="low-temp">{{forecast.lowTemp}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'weather',
    data () {
      return {
        location: 'New York, NY',
        date: 'Tuesday, April 15th',
        description: 'desc here',
        temp: 25,
        precipitation: '100%',
        humidity: '97%',
        wind: '4mph SW',
        pollen: 36,
        forecast: [
          { 'date': 'Monday', 'icon': 'sunny', 'lowTemp': 28, 'highTemp': 45 },
          { 'date': 'Tuesday', 'icon': 'partly', 'lowTemp': 30, 'highTemp': 48 },
          { 'date': 'Wednesday', 'icon': 'cloudy', 'lowTemp': 27, 'highTemp': 31 },
          { 'date': 'Thursday', 'icon': 'raining', 'lowTemp': 26, 'highTemp': 32 },
          { 'date': 'Friday', 'icon': 'raincloudy', 'lowTemp': 25, 'highTemp': 40 },
          { 'date': 'Saturday', 'icon': 'thunderstorms', 'lowTemp': 30, 'highTemp': 43 },
          { 'date': 'Sunday', 'icon': 'sunny', 'lowTemp': 26, 'highTemp': 42 }
        ]
      }
    },
    methods: {
      fetchWeather: function () {
        console.log('TODO')
      }
    },
    created: function () {
      this.fetchWeather
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .weather {
    width: 100%;
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  }

  @media (min-width: 700px) {
    .weather {
      width: 700px;
    }
  }

  .location {
    font-size: 3em;
    color: black;
  }

  .date {
    font-size: 0.8em;
  }

  .description {
    font-size: 1.1em;
  }

  .current {
    overflow: auto;
    width: 100%;
  }

  .visual {
    float: left;
    width: 50%;
  }

  .visual .icon{
    width: 64px;
    height: 64px;
  }

  .visual .icon.cloudy {
    float: left;
    margin-left: 0;
  }

  .text {
    width: 50%;
    float: right;
  }

  .forecast-day {
    display: inline-block;
    width: 14.285%;
  }

  .forecast-day div {
    text-align: center;
    vertical-align: middle;
    padding: 10px;
  }

  .forecast-day date {
    color: black;
    font-size: 0.5em;
    text-align: center;
    font-weight: bold;
  }

  .forecast-day .icon {
    width: 64px;
    height: 64px;
  }

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

  @media (max-width: 650px) {
  .location {
  font-size: 5em;
  }

  .forecast-day {
  display: block;
  border-top: 1px solid black;
  width: 100%;
  }

  .forecast-day .date {
  width: 50%;
  text-align: left;
  }

  .date, .icon, .high-temp, .low-temp {
  display: inline-block;
  }
}
</style>
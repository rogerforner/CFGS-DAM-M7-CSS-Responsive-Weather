<template>
  <div class="weather">
    <div class="location">{{location}}</div>
    <div class="date">{{date}}</div>
    <div class="description">{{description}}</div>
    <div class="current">
      <div class="visual">
        <div class="cloud">cloud</div>
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
        <div class="icon">{{forecast.icon}}</div>
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
        { 'date': 'Monday', 'icon': 'cloud', 'lowTemp': 28, 'highTemp': 45 },
        { 'date': 'Tuesday', 'icon': 'sun', 'lowTemp': 30, 'highTemp': 48 },
        { 'date': 'Wednesday', 'icon': 'sun-cloud', 'lowTemp': 27, 'highTemp': 31 },
        { 'date': 'Thursday', 'icon': 'raining', 'lowTemp': 26, 'highTemp': 32 },
        { 'date': 'Friday', 'icon': 'cloud', 'lowTemp': 25, 'highTemp': 40 },
        { 'date': 'Saturday', 'icon': 'sun-cloud', 'lowTemp': 30, 'highTemp': 43 },
        { 'date': 'Sunday', 'icon': 'sun', 'lowTemp': 26, 'highTemp': 42 }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather {
  padding: 20px;
}

.location {
  font-size: 3em;
}

.date {
  font-size: 1.5em;
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

.text {
  width: 50%;
  float: right;
}
</style>

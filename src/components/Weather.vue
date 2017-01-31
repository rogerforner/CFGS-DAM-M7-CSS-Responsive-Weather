<template>
  <div class="weather">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'weather',
  data () {
    return {
      msg: 'Here weather todo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

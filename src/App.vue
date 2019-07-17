<template>
  <div id="app">
    <PatternPlace
      :background='background'
      :pattern='pattern'
      :width='800'
      :height='800'
    />
    <div>
      Background:
      <button @click='setBackground("white")'>White</button>
      <button @click='setBackground("#f00")'>Red</button>
      <button @click='setBackground("#0f0")'>Green</button>
    </div>
    <div>
      Pattern:
      <button @click='setPattern("CirclePattern")'>Circles</button>
      <button @click='setPattern("CrossesPattern")'>Crosses</button>
    </div>
    <div>
      Adapt:
      <button @click='setPattern("CirclePattern"); setBackground("#f00")'>Stage 1</button>
      <button @click='setPattern("CrossesPattern"); setBackground("#0f0")'>Stage 2</button>
    </div>
  </div>
</template>

<script>
import PatternPlace from './components/PatternPlace.vue'

export default {
  name: 'app',
  data: function() {
    return {
      background: 'red',
      pattern: 'CirclePattern'
    };
  },
  components: {
    PatternPlace
  },
  methods: {
    'setBackground': function(color) {
      this.background = color;
    },
    'setPattern': function(patternName) {
      this.pattern = patternName;
    },
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <PatternPlace
      :background='background'
      :pattern='pattern'
      :width='800'
      :height='800'
    />
    <div
      class='focus'
      v-bind:style="{ top: focusY + 'px', left: focusX + 'px' }">
      {{ focusText }}
    </div>
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
      <button @click='adapt()'>Automatically adapt</button>
      <span>{{ countdown }}</span>
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
      pattern: 'CirclePattern',
      adaptTime: 120,
      countdown: 120,
      timePerFrame: 1,
      stage: true,
      adaptRunning: false,
      focusText: '?',
      focusX: 400,  // depends on
      focusY: 400
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
    'adapt': function() {
      if (this.adaptRunning) {
        return ;
      }
      if (this.stage) {
        this.setPattern("CirclePattern");
        this.setBackground("#f00");
      } else {
        this.setPattern("CrossesPattern");
        this.setBackground("#0f0");
      }
      this.focusX = 300 + 25 * (2 * Math.random() - 1);
      this.focusY = 300 + 25 * (2 * Math.random() - 1);
      this.stage = !this.stage;
      this.countdown -= this.timePerFrame;
      if (this.countdown > 0) {
        window.setTimeout(() => this.adapt(), 1000 * this.timePerFrame)
      } else {
        this.setBackground("#fff");
        this.countdown = this.adaptTime;
        this.adaptRunning = false;
      }
    }
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

.focus {
  position: relative;
  padding: 12px;
  width: 20px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 20pt;
  border: solid 1px #000;
  border-radius: 4px;
  z-index:20;
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

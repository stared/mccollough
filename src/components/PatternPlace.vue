<template>
  <svg class="patternplace"
    :width='width' :height='height'
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="CirclePattern" x="0" y="0" patternUnits="userSpaceOnUse" width="50" height="50">
        <circle cx="25" cy="25" r="15" fill-opacity="0" stroke="black" stroke-width="5px"/>
      </pattern>
      <pattern id="CrossesPattern" x="0" y="0" patternUnits="userSpaceOnUse" width="50" height="50">
        <line x1="0" y1="0" x2="50" y2="50"
        stroke="black" stroke-width="5px"/>
        <line x1="0" y1="50" x2="50" y2="0"
        stroke="black" stroke-width="5px"/>
      </pattern>
    </defs>

    <rect :fill='background' :width='width' :height='height'/>
    <rect :fill='`url(#${pattern})`' stroke="black" :width='width' :height='height'/>
  </svg>
</template>

<script>
export default {
  name: 'PatternPlace',
  props: {
    background: String,
    pattern: String,
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 600
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <gauge-chart :val="num"></gauge-chart>
  </div>
</template>

<script>
import GaugeChart from "./components/GaugeChart.vue";

export default {
  name: "app",
  components: {
    GaugeChart,
  },
  data() {
    return {
      num: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.num = Math.round(Math.random() * 100);
    }, 3000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

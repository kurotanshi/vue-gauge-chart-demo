<template>
  <div class="gauge-chart">
    <svg class="svg"></svg>
  </div>
</template>

<script>
import * as d3 from "d3"
import { axisRadialInner, axisRadialOuter } from "d3-radial-axis"
d3.axisRadialInner = axisRadialInner;

export default {
  name: 'GaugeChart',
  props: {
    val: Number,
  },
  data(){
    return {
      angleScale: null,
      label: null,
      pointer: null
    }
  },
  methods: {
    deg2rad(deg) {
      return deg * Math.PI / 180;
    },
    valUpdate(val){

      this.label.transition()
            .duration(800)
            .attrTween("d", () => {
              var v = this.label.text();
              return (n) => {
                var i = d3.interpolateNumber( +v, +val);
                this.label.text( parseInt( i(n) ) );
              };
            });

      this.pointer.transition()
            .duration(1200)
            .ease(d3.easeElastic)
            .attr('transform', `rotate(${ this.angleScale(val) })`);
    }
  },
  watch: {
    val(newVal, oldVal){
      this.valUpdate( newVal );
      // console.log(newVal, oldVal);
    }
  },
  mounted (){

    // init & first draw
    var r = 130,
        exAngle = 55,
        whRatio = 2 / (Math.sin(this.deg2rad(exAngle)) + 1.1);

    this.angleScale = d3.scaleLinear()
                       .domain([0, 100])
                       .range([(90 + exAngle) * -1, 90 + exAngle]);

    var svg = d3.select('.gauge-chart .svg')
              .attr('viewBox', -r*0.9 + " " + -r*1.11 + " " + r*2 + " " + r*2*whRatio);

    var axis = d3.axisRadialInner(this.angleScale.copy().range(this.angleScale.range().map( d => this.deg2rad(d) )), r).tickPadding(15);

    // 軸線
    svg.append('g').classed('axis', true).call(axis);

    // 指針
    this.pointer = svg.append('g')
                     .attr('transform', 'scale('+ r * 0.85 + ')')
                    .append('path')
                    .attr('fill', 'red')
                    .attr('d', ['M0 -1', 'L0.03 0', 'A 0.03 0.03 0 0 1 -0.03 0', 'Z'].join(' '))
                    .attr('transform', `rotate(${ this.angleScale(0) })`);

    // 目前數值
    this.label = svg.append('text')
        .classed('label', true)
        .attr('x', 0)
        .attr('y', r * 0.6)
        .attr('text-anchor', 'middle')
        .text('0');

    this.valUpdate( this.val );
  }
}
</script>

<style>
  .svg {
    display: block;
    border: 1px solid #000;
    width: 500px; height: 350px;
    background-color: #0C2030;
  }
  .axis text {
    font-size: 14px;
    fill: #f1f1f1;
  }
  .axis .domain, .axis .tick line {
    stroke-width: 2px;
    stroke: #157FFB;
  }
  .label{
    fill: #fff;
    stroke: #f00;
    stroke-width: 1px;
    font-size: 24px;
  }
</style>

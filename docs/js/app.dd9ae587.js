(function(t){function n(n){for(var a,o,l=n[0],u=n[1],c=n[2],p=0,f=[];p<l.length;p++)o=l[p],r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);s&&s(n);while(f.length)f.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],a=!0,l=1;l<e.length;l++){var u=e[l];0!==r[u]&&(a=!1)}a&&(i.splice(n--,1),t=o(o.s=e[0]))}return t}var a={},r={app:0},i=[];function o(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)o.d(e,a,function(n){return t[n]}.bind(null,a));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var s=u;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("c21b"),r=e.n(a);r.a},5597:function(t,n,e){"use strict";var a=e("624c"),r=e.n(a);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("gauge-chart",{attrs:{val:t.num}})],1)},i=[],o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"gauge-chart"},[e("svg",{staticClass:"svg"})])},l=[],u=(e("c5f6"),e("5698")),c=e("e4be");u["axisRadialInner"]=c["axisRadialInner"];var s={name:"GaugeChart",props:{val:Number},data:function(){return{angleScale:null,label:null,pointer:null}},methods:{deg2rad:function(t){return t*Math.PI/180},valUpdate:function(t){var n=this;this.label.transition().duration(800).attrTween("d",function(){var e=n.label.text();return function(a){var r=u["c"](+e,+t);n.label.text(parseInt(r(a)))}}),this.pointer.transition().duration(1200).ease(u["b"]).attr("transform","rotate(".concat(this.angleScale(t),")"))}},watch:{val:function(t,n){this.valUpdate(t)}},mounted:function(){var t=this,n=130,e=55,a=2/(Math.sin(this.deg2rad(e))+1.1);this.angleScale=u["d"]().domain([0,100]).range([-1*(90+e),90+e]);var r=u["e"](".gauge-chart .svg").attr("viewBox",.9*-n+" "+1.11*-n+" "+2*n+" "+2*n*a),i=u["axisRadialInner"](this.angleScale.copy().range(this.angleScale.range().map(function(n){return t.deg2rad(n)})),n).tickPadding(15);r.append("g").classed("axis",!0).call(i),this.pointer=r.append("g").attr("transform","scale("+.85*n+")").append("path").attr("fill","red").attr("d",["M0 -1","L0.03 0","A 0.03 0.03 0 0 1 -0.03 0","Z"].join(" ")).attr("transform","rotate(".concat(this.angleScale(0),")")),this.label=r.append("text").classed("label",!0).attr("x",0).attr("y",.6*n).attr("text-anchor","middle").text("0"),this.valUpdate(this.val)}},p=s,f=(e("5597"),e("2877")),d=Object(f["a"])(p,o,l,!1,null,null,null);d.options.__file="GaugeChart.vue";var h=d.exports,v={name:"app",components:{GaugeChart:h},data:function(){return{num:0}},mounted:function(){var t=this;setInterval(function(){t.num=Math.round(100*Math.random())},3e3)}},g=v,b=(e("034f"),Object(f["a"])(g,r,i,!1,null,null,null));b.options.__file="App.vue";var m=b.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(m)}}).$mount("#app")},"624c":function(t,n,e){},c21b:function(t,n,e){}});
//# sourceMappingURL=app.dd9ae587.js.map
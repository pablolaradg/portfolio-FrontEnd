var options_1 = {
  series: [80, 50],
  chart: {
  height: 240,
  type: 'radialBar',
  events: {mounted: function(ctx) { ctx.toggleDataPointSelection(0) }}
},
plotOptions: {
  radialBar: {
    hollow: {
      size: '50%',
    }
  },
},
labels: ['Avanzado', 'Junior']
};
var options_2 = {
  series: [50],
  chart: {
  height: 240,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    hollow: {
      size: '50%',
    }
  },
},
labels: ['Junior']
};

var chart_1 = new ApexCharts(document.querySelector("#chart_1"), options_1);
chart_1.render();

var chart_2 = new ApexCharts(document.querySelector("#chart_2"), options_2);
chart_2.render();
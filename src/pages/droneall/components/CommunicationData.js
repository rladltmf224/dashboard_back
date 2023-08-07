// import Highcharts from 'highcharts';
// import config from '../../charts/config'

// const colors = config.app.colors;
// const {inverse, info, primary, danger, warning, success, textColor} = colors;
// const chartColors = config.app.chartColors;
// const {axisColor} = chartColors;



// export const CommunicationData = {

//   echarts: {
//     donut: {
//       tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b}: {c} ({d}%)"
//       },
//       legend: {
//         show: false
//       },
//       color: [primary, success, danger, warning, info],
//       series: [
//         {
//           name: 'Access source',
//           type: 'pie',
//           radius: ['50%', '70%'],
//           avoidLabelOverlap: false,
//           label: {
//             normal: {
//               show: false,
//               position: 'center'
//             },
//             emphasis: {
//               show: true,
//               textStyle: {
//                 fontSize: '30',
//                 fontWeight: 'bold'
//               }
//             }
//           },
//           labelLine: {
//             normal: {
//               show: false
//             }
//           },
//           data: [
//             {value: 335, name: 'Direct interview'},
//             {value: 310, name: 'Email marketing'},
//           ] 
//         } 
//       ]
//     },
 
//     },
//   }


// export let liveChartInterval = null;

// export const liveChart = {
//   liveChartInterval: null,
//   colors: [primary],
//   chart: {
//     height: 300,
//     type: 'spline',
//     animation: Highcharts.svg, // don't animate in old IE
//     marginRight: 10,
//     events: {
//       load: function () {

//         // set up the updating of the chart each second
//         var series = this.series[0];
//         liveChartInterval = setInterval(function () {
//           console.log("liveChartInterval");
//           var x = (new Date()).getTime(), // current time
//             y = Math.random();
//           series.addPoint([x, y], true, true);

//         }, 1000);
//       } 
//     }
//   },

//   time: {
//     useUTC: false
//   },
//   credits: {
//     enabled: false
//   },
//   title: false,
//   xAxis: {
//     type: 'datetime',
//     tickPixelInterval: 150,
//     labels: {
//       style: {
//         color: axisColor
//       }
//     },
//     lineWidth: 0,
//     tickWidth: 0
//   },
//   yAxis: {
//     title: {
//       enabled: false
//     },
//     plotLines: [{
//       value: 0,
//       width: 1,
//       color: axisColor
//     }],
//     labels: {
//       style: {
//         color: axisColor
//       }
//     }
//   },
//   tooltip: {
//     headerFormat: '<b>{series.name}</b><br/>',
//     pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
//   },
//   legend: {
//     enabled: false
//   },
//   exporting: {
//     enabled: false
//   },
//   series: [{
//     name: 'Random data',
//     data: (function () {
//       // generate an array of random data
//       var data = [],
//         time = (new Date()).getTime(),
//         i;

//       for (i = -19; i <= 0; i += 1) {
//         data.push({
//           x: time + i * 1000,
//           y: Math.random()
//         });
//       }
//       return data;
//     }())
//   }]
// };
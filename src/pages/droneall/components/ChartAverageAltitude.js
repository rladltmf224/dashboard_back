// import React from "react";
// import ReactApexChart from "react-apexcharts";

// import {liveChart, liveChartInterval}  from './SignalStrengthData';


// class ChartAverageAltitude extends React.Component {
//   state = { //state로 데이터를 관리한다, 즉 데이터를 담는 그릇 //그릇에 담아주고
//     cd: liveChart, 
//     ld: liveChartInterval, 
//     initEchartsOptions: {
      
//       renderer: 'canvas'
//     }
    
//   }

//     constructor(props) {
//       super(props);

//       this.state = {
      
//         series: [{
//           name: 'XYZ MOTORS',
//           data: []
//         }],
//           // data: dates,
   

//         options: {
//           chart: {
//             type: 'areas',
//             stacked: false,
//             height: 300,
//             zoom: {
//               type: 'x',
//               enabled: true,
//               autoScaleYaxis: true
//             },
//             toolbar: {
//               autoSelected: 'zoom'
//             }
//           },
//           dataLabels: {
//             enabled: false
//           },
//           markers: {
//             size: 0,
//           },
//           fill: {
//             type: 'gradient',
//             gradient: {
//               shadeIntensity: 1,
//               inverseColors: false,
//               opacityFrom: 0.5,
//               opacityTo: 0,
//               stops: [0, 90, 100]
//             },
//           },
//           yaxis: {
//             labels: {
//               formatter: function (val) {
//                 return (val / 1000000).toFixed(0);
//               },
//             },
//             title: {
//               text: 'Price'
//             },
//           },
//           xaxis: {
//             type: 'datetime',
//           },
//           tooltip: {
//             shared: false,
//             y: {
//               formatter: function (val) {
//                 return (val / 1000000).toFixed(0)
//               }
//             }
//           }
//         },
//       };
//     }


//     // componentDidMount() {
//     //   this.interval = setInterval(() => {
//     //     const { averagealtitude } = this.props;
        
//     //     const setAveragealtitude = [
//     //       { name: "data1", data: averagealtitude.data}
//     //     ];
  
//     //     this.setState({ series: setAveragealtitude });
//     //   }, 5000);
//     // }


//     //  componentWillUnmount(){
//     //   clearInterval(this.interval)
//     //  }


//     render() {


//       return (          

//         <div id="chart">
//             <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} />
//             <h6 style={{textAlign:"center"}}>Average altitude</h6>
//         </div>

//       );
//     }
//   }


// export default ChartAverageAltitude




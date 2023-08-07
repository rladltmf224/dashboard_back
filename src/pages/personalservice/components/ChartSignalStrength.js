import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartSignalStrength extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            // data: []
        }],
        options: {
          chart: {
            height: 250,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
          }
        },

      };
    }

    componentDidMount(){
      this.interval = setInterval(() => {
        
      const { signalstrength } = this.props

      const setSignal = [
        {name: "Desktops", data: signalstrength}
      ]

      this.state.series = setSignal
      }, 3000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }


    render() {



      return (

        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={250} />
            <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Signal strength of "Drone_ALPHA"</h6>
        </div>

      );
    }
  }

export default ChartSignalStrength
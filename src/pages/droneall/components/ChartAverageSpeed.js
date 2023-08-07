import React from "react";
import ReactApexChart from 'react-apexcharts';



class ChartAverageSpeed extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: "Desktops",
            data: []
        }],
        options: {
          chart: {
            height: 300,
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'],
          }
        },
      };
    }

    componentDidMount(){
      this.interval = setInterval(() => {
        const {averagespeed} = this.props

        const setAverageSpeed = [
          {
            name: "Desktops",
            data: averagespeed
          }
        ]

        this.setState({series:setAverageSpeed})
      }, 3000);
    }

    componentWillUnmount(){
      clearInterval(this.interval)
    }

  

    render() {
      return (
        

        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300} />
            <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Average speed</h6>
        </div>


      );
    }
  }


  export default ChartAverageSpeed
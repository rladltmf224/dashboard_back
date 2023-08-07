import React from "react";
import ReactApexChart from 'react-apexcharts';


class ChartHighestLowest extends React.Component {
    constructor(props) {

      super(props);

      this.state = {
        
      
        series: [
          {
            name: "High - 2013",
            // data: [75, 80, 72, 88, 92, 82, 79]
            data : []
          },
          {
            name: "Low - 2013",
            // data: [0, 10, 30, 20, 15, 8, 11]
            
            data : []
          }
        ],
        
        options: {
          chart: {
            height: 300,
            type: 'line',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2
            },
            toolbar: {
              show: false
            }
          },
          colors: ['#77B6EA', '#545454'],
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
            // title: {
            //   text: 'Month'
            // }
          },
          yaxis: {
            // title: {
            //   text: 'Temperature'
            // },
            min: 0,
            max: 100
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
          }
          
        },
        
      };
      

    }
    

    componentDidMount(){
      this.interval = setInterval(() => {
        const { highlow } = this.props
  
        const setHighestLowest = [
          {
            name: "High - 2013",
            data : highlow.high
          },
          {
            name: "Low - 2013",
            data : highlow.low
          }
        ]

        this.setState({series:setHighestLowest})
      }, 3000);   
    }

    componentWillUnmount(){
      clearInterval(this.interval)
    }

    render() {
      return (
        
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300} />
            <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Average highest and lowest speed</h6>
        </div>


      );
    }
  }

export default ChartHighestLowest
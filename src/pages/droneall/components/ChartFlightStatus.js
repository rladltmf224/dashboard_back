import React from "react";
import ReactApexChart from 'react-apexcharts';

class ChartFlightStatus extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
        {
          data: []
        }, 
        {
          data: []
        }],

        options: {
          chart: {
            type: 'bar',
            height: 300
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          tooltip: {
            shared: true,
            intersect: false
          },
          xaxis: {
            categories: [1,2],
          },
        },
      
      
      };
    }

    componentDidMount(){
      this.interval = setInterval(() => {
        const { takeoffandland } = this.props

        const setStatus = [
          {data: takeoffandland[0].data},
          {data: takeoffandland[1].data},

         ]
        this.setState({series:setStatus})
      }, 3000);
    }

    componentWillUnmount(){
      clearInterval(this.interval)
    }

    render() {
      return (
        
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={200} />
            <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>take off / landing</h6>
        </div>
      );
    }
  }


export default ChartFlightStatus
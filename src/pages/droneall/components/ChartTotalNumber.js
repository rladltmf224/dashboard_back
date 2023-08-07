import React from "react";
import ReactApexChart from 'react-apexcharts';


class ChartTotalNumber extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [],

        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: [0, 4]
          },
          // title: {
          //   text: 'Traffic Sources'
          // },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
          },
          labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
          xaxis: {
            type: 'datetime'
          },
          yaxis: [{
            // title: {
            //   text: 'Website Blog',
            // },
          
          }, {
            opposite: true,
            // title: {
            //   text: 'Social Media'
            // }
          }]
        },
      
      
      };
    }

    componentDidMount(){

      this.interval = setInterval(() => {

        const {totalnumber} = this.props

        console.log("totalnumber",this.props) 

        const setTotalnumberofflown = [
          { 
          name: 'Website Blog',
          type: 'column',
          data: [totalnumber.websiteBlog]
        },
        { 
          name: 'social Media',
          type: 'line',
          data: [totalnumber.socialMedia]
        }]

        this.setState({series:setTotalnumberofflown})
        
      }, 3000);
    }

      componentWillUnmount(){
        clearInterval(this.interval)
      }

    render() {
      return (
         
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300} />
            <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Total number of flown</h6>
        </div>

      );
    }
  }




export default ChartTotalNumber;
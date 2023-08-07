//chart_usedbattery data

import React from 'react';
import ReactApexChart from 'react-apexcharts';


class ChartUsedBattery extends React.Component {

    constructor(props) {

      super(props);


      console.log("statestatestatestate",this.props)

      this.state = {     
        
        series:[10],       

        options: {
          chart: {
            type: 'radialBar',
            offsetY: -20   ,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '16px'
                }
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },
          },
          labels: ['Average Results'],
          
        },
      };
    }

    componentDidMount() {
      console.log('usedbattery:', this.props.usedbattery);

      this.interval = setInterval(() => {
        const { usedbattery } = this.props;
        const setUsed = [usedbattery.usedBatter];
        this.setState({ series: setUsed });
      }, 3000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
      
    render() {
      
      return (    
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar"/>
        </div>
      );
    }
  }


export default ChartUsedBattery


import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartMissionSuccessRate extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Inflation',
          // data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
          data: [],
        }],
        options: {
          chart: {
            height: 300,  
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 12,
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'bottom',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              }
            }
          
          },
          title: {
            text: 'Monthly Inflation in Argentina, 2002',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
          }
        },
      
      
      };
    }

    componentDidMount(){

      this.interval = setInterval(() => {
        const { missionsuccessrate } = this.props

      const setmissionsuccessrate = [
        {name: "Inflation" , data: missionsuccessrate.data }
      ]

      this.setState({series:setmissionsuccessrate})
      }, 3000);
    }

    componentWillUnmount(){
      clearInterval(this.interval)
    }



    render() {

      return (
        
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} />
            <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Monthly Mission Success Rate</h6>
        </div>

      );
    }
  }


export default ChartMissionSuccessRate
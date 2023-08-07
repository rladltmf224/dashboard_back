import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartMissionSuccess extends React.Component {
    constructor(props) {
      super(props);


      this.state = {
          
        series: [{
          name: 'success',
          data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
            3.9, 3.5, 3
          ],
          // data: [],
        },
        {
          name: 'proceed',
          data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
            -4.1, -4, -4.1, -3.4, -3.1, -2.8
          ],
          // data: [],
        }
        ],

        options: {
          chart: {
            type: 'bar',
            height: 250,
            stacked: true
          },
          colors: ['#008FFB', '#FF4560'],
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 1,
            colors: ["#fff"]
          },
          
          grid: {
            xaxis: {
              lines: {
                show: false
              }
            }
          },
          yaxis: {
            min: -5,
            max: 5,
            title: {
              // text: 'Age',
            },
          },
          tooltip: {
            shared: false,
            x: {
              formatter: function (val) {
                return val
              }
            },
            y: {
              formatter: function (val) {
                return Math.abs(val) + "%"
              }
            }
          },
          xaxis: {
            categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
              '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
              '0-4'
            ],
            title: {
              text: 'Percent'
            },
            labels: {
              formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
              }
            }
          },
        },
      
      
      };
    }

    componentDidMount(){
      this.interval = setInterval(() => {
        const {missionsuccess} = this.props;

        console.log("missionsuccess",this.props)
        
        const setMissionsuccess = [
          {name : "success", data : missionsuccess.Males.data},
          {name : "proceed", data : missionsuccess.Females.data}
        ]

        this.setState({series:setMissionsuccess})
        
      }, 3000);
    }

    componentWillUnmount(){
      clearInterval(this.interval)  
    }


    render() {
      
      return (
        
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={250} />
            <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Mission Success Rate</h6>
        </div>

      );
    }
  }


export default ChartMissionSuccess;
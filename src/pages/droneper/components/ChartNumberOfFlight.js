import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ChartNumberOfFlight extends React.Component { //복습: 바로 위 부모를 상속받아서 사용하겠다 그러니 부모컴포넌트안에 있는 내용을 사용할 수 있다는 갓
    constructor(props) {
      super(props);

    //  console.log("this.props.numberofflight",this.props.numberofflight)

      this.state = {
        series: [{
          name:"number of flights",
          // data: this.props.numberofflight
          data: []
        }],


        options: {
          chart: {
            height: 250,
            type: 'bar',
            events: {
              click: function(chart, w, e) {
                // console.log(chart, w, e)
              }
            }
          },
          // colors: colors,
          plotOptions: {
            bar: {
              columnWidth: '50%',
              distributed: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: [
              'Jan',
              'Feb' ,
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Ooc',
              'Nov',
              'Dec',
            ],
            labels: {
              style: {
                // colors: colors,
                fontSize: '12px'
              }
            }
          },
        },
      
      
      };
    }

    componentDidMount(){

      this.interval = setInterval(() => {
        const {numberofflight} = this.props

        const setNumber = [
          {name: "number of flights", data: numberofflight }
        ]
  
        this.state.series = setNumber
      }, 3000);

    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
  

    render() {
      return (
        
      <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={250} />
          <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Number of flight in "Drone_ALPHA"</h6>
      </div>

      );
    }
  }

export default ChartNumberOfFlight

import React from 'react';
import ReactApexChart from 'react-apexcharts'


class ChartSensorPerformance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Sensor Performance',
        // data: this.props.sensorperformance,//여기 값이 12니깐 차트가 자동으로 12개로 늘어나네
        data: []
      }],
      options: {
        chart: {
          height: 250,
          type: 'radar',
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 100,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff']
              }
            }
          }
        },
        colors: ['#FF4560'],
        markers: {
          size: 4,
          colors: ['#fff'],
          strokeColor: '#FF4560',
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val
            }
          }
        },
        xaxis: {
          categories: ['착륙장치', '프레임', '모터', '수신기', '프로펠러', '배터리', 'ES(모터 컨트롤러)', 'FC(드론의 두뇌역할)']
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function(val, i) {
              if (i % 2 === 0) {
                return val
              } else {
                return ''
              }
            }
          }
        }
      },
    };
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      const {sensorperformance} = this.props
      const changeSensorPerformance = sensorperformance.slice(0,7)
      //받은 데이터가 배열의 길이가 12인데 내기 표출시키고 싶은 데이터는 7이니깐 배열을 잘라서 사용을 하겠다.
      //0,7(start,end(미포함)) -> 새로 배열 생성 후 리턴
      
      const setSensor = [
        {name: "Sensor Performance", data: changeSensorPerformance} //부모컴포넌트로 받아온 데이터를 slice를 사용하여 7까지 한 후 새로운 변수에 넣어주고 이거를 data에 넣어주면 !
      ]
  
      this.setState({series:setSensor})
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return (
      
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={250} />
        <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Sensor Performance of "Drone_ALPHA"</h6>
      </div> 

    );
  }
}

export default ChartSensorPerformance;
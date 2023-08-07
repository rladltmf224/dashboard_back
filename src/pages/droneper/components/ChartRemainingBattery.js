import React from 'react';
import ReactApexChart from 'react-apexcharts';



// 클래스 생성자 함수는 super메서드를 호출하여 부모클래스의 생성자 함수를 호출합니다.
// 그런다음 this.state객체를 정의하여 초기화해주고 초기화된 상태는 render메서드에서 사용된다.

class ChartRemainingBattery extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
          // this.props.remainingbattery.remainingBattery

        ],
        options: {
          chart: {
            type: 'radialBar',
            offsetY: -20,
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

    componentDidMount(){
      this.interval = setInterval(() => {
        const {remainingbattery}  = this.props

        const setRemaining = [
          remainingbattery.remainingBattery
        ]
  
        this.setState({series:setRemaining})
      }, 3000);

    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

  
    render() {

      //일단 얘는.,,, 일단 문제였던거는 constructor 함수는 생성자 함수 즉, 
      //따라서 생성자 메서드에서 부모 컴포넌트의 props 값을 사용할 수 있습니다.
      //props는 React에서 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터입니다.
      //생성자 메서드에서 props를 사용하여 자식 컴포넌트의 초기 상태를 설정하거나, 이벤트 핸들러를 바인딩하는 등의 작업을 수행할 수 있습니다.


      return (

        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" />
        </div>

        


      );
    }
  }

export default ChartRemainingBattery
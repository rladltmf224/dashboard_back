//chart_usedbattery data

import React from 'react';
import ReactApexChart from 'react-apexcharts';


class ChartUsedBattery extends React.Component {

    constructor(props) {

  
      
      // console.log("this.props.usedbattery.usedBatter",props.usedbattery.usedBatter)
      super(props);


      // const {usedbattery}  = this.props
      // console.log("ChartUsedBattery constructor this.props",this.props)
      // console.log("ChartUsedBattery constructor this.props.usedbattery",this.props.usedbattery)
      // console.log("ChartUsedBattery constructor this.props.usedbattery.usedBatter",this.props.usedbattery.usedBatter)
      this.state = {     
        
        
         
        //this.state는 react 컴포넌트에서 관리되는 state data에 접근하기 위해 사용되는 객체로, react컴포넌트는 ui의 상태를 관리하는데 사용되며 이 상태 정보는 state객체에 저장되고 state객체는 react 컴포넌트의 생성자에 초기화됨
        // this.state를 사용하면 react 컴포넌트의 상태데이터를 읽거나 업데이트할 수 있음 
        // 즉, this.state는 count 라는 객체를 업데이트 시키기 위해서 setstate를 이용하여 this.state객체를 업데이트 할 수 있음,.
        // this 
        series:[
          // usedbattery.usedBatter   
          
          // this.props.usedbattery.usedBatter 값을 data배열로 가지는 객체를 serise 에 담아주면되는데 코드는 아래와 같다
          
          //여기서 만약 usedBatter 가 배열인 경우에는 다음과같이 map() 매소드를 사용하여 각 값을 추출하여 'data' 배열로 만들 수 있음
          //여기서 주의할 점은 data 배열에 들어갈 값은 모두 숫자형이여야하며, 즉, usedBatter의 값이 문자열 형태라면은 Number() 를 사용하여 숫자로 변환해주어야함
          // data: usedbattery.usedBatter.map(value => Number(value))
          // 말하는거는 render 함수에서는 props가 변경될 때마다 컴포넌트를 업데이트 해주기 위해서는 this.state 를 사용해야됨
        
        ],       

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
      // const {usedbattery}  = this.props
      // console.log("ChartUsedBattery usedbatteryyyy render ->", this.props)
      // const { usedbattery } = this.props; 

      // console.log("usedbatteryyyy ->", this.props)
      // console.log("usedbattery ->", usedbattery)


      //부모로 부터 받아와서 여기서 담기는거까지 확인
      
      return (    
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar"/>
        </div>
      );
    }
  }




export default ChartUsedBattery


import React from 'react';
import ReactApexChart from 'react-apexcharts';


class ChartNetworkStatus extends React.Component {

  constructor(props) {
    super(props);

    this.state = {// 데이터들을 담는 그릇 이 상태들을 움직이게 하기 위해서는

      
      series: [{
          name: "Altitude",
          // data: this.props.sessiondurationdata
          data : [],
        },
        {
          name: "Battery",
          // data: this.props.pageviewsdata
          data: [],
        },
        //백엔드 값 자체가 배열이니깐 다시한번[]로 감싸줄 필요가 없는거지
        {
          name: "Speed",
          data : []
          // data: this.props.totalvisitsdata

        }
      ],


      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'straight',
          dashArray: [0, 8, 5]
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (mins)"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per session"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }
          ]
        },
        grid: {
          borderColor: '#f1f1f1',
        }
      },
    
    
    };
    
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      const {sessiondurationdata, pageviewsdata, totalvisitsdata} = this.props
    
      const setNetwork = [
        {name: "Altitude", data: sessiondurationdata},
        {name: "Battery", data: pageviewsdata},
        {name: "Speed", data: totalvisitsdata}
      ]
      this.setState({series:setNetwork})
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //컴포넌트디드마운트는 처음 마운트 된 후에 한번만 호출됨
  //componentdidmount -> 컴포넌트가 처음에 dom에 마운트될 때만 호출되는 메서드 즉, 탭을 누를때마다 호출되는것은 아니지
  //탭을 누를때마다 컴포넌트의 랜더 링이 발생하기 때문에 해당 컴포넌트가 이미 마운트가 되어있는 상황이면 componentdidmount 는 호출되지않지만 componentdidupdata메서드가 호출될 수도 있음

  render() {
    //render함수는 순수해야한다면, 컴포넌트의 state를 변경하지않고 호출될때마다 동일한 결과를 반환해야하며, 브라우저와 직접적으로 상호작용을 하지 않는다.즉,,, render 안에서 값을 바꾸는것은 권장되지않는다.

    // const {sessiondurationdata, pageviewsdata, totalvisitsdata} = this.props //한번 랜더링이 될 때 변경이 되는거니깐 부모로 부터 값을 받아와서
    
    // const setNetwork = [ //새로운 변수를 만들어주고 이 안에 값을 담아주고 
    //   {name: "Session Duration", data: sessiondurationdata},
    //   {name: "Page Views", data: pageviewsdata},
    //   {name: "Total Visits", data: totalvisitsdata},
    // ]

    // this.state.series = setNetwork //기존 생성자함수의 series안에 내가 만든 변수를 넣어줌


    // this.setState({series : setNetwork}) //이렇게 하면 setState를 사용하는거지, setState를 render안에서 호출하면 안됨 -> 무한루프걸림
    return (
      
      <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
        <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Network status of Drones</h6>
      </div>

    );
  }
}

export default ChartNetworkStatus
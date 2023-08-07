
import React from 'react';
import ReactApexChart from 'react-apexcharts';


class ChartData extends React.Component {
  

  constructor(props) {
    super(props);

    // function generateData(count, yrange) {
    //   var i = 0;
    //   var series = [];

    //   while (i < count) {
    //     var x = (i + 1).toString();
    //     var y =
    //     Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; //0~90사이의 랜덤값
      
    //     series.push({
    //       x: x,
    //       y: y
    //     });
      
    //     i++;
    //   }

      
    //   console.log("series-->",series);

    //   return series;
    //   } 
    //   // 이 generatedata함수는 프론트단에서 작업하기 위해서 즉, 랜덤으로 숫자를 뽑아내기위한 함수이기때문에 백엔드데이터를 받아오는 경우에는 쓸 이유가 없는거지

      


  




      // function test(a,  b){
      //   var sum = a+b
      //   return sum;
      // }

      // data: test(10,20) == 30

    // console.log("series",series)

    const {metric1,metric2,metric3,metric4,metric5,metric6,metric7,metric8} = this.props

    this.state = {
      
      series: [
        { name: 'Metric1', data: metric1 }, //기존의 name값이랑 백엔드로 받은 data값에 metric이라는 객체에 x,y 배열이 있는데 그 바뀐 배열들 넣어주는거지
        { name: 'Metric2', data: metric2 },
        { name: 'Metric3', data: metric3 },
        { name: 'Metric4', data: metric4 },
        { name: 'Metric5', data: metric5 },
        { name: 'Metric6', data: metric6 },
        { name: 'Metric7', data: metric7 },
        { name: 'Metric8', data: metric8 }
      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"]
      },
    
    
    };
  }

  //백엔드단에서 데이터를 받아와서 기존의 series값을 변경해주는거니깐 따로 함수 호출을 안해도되는거지


  componentDidMount(){


    this.interval = setInterval(() => {
      const {metric1,metric2,metric3,metric4,metric5,metric6,metric7,metric8} = this.props

      console.log("metric1~~8",this.props)
      

      const setMetric = [
        { name: 'Metric1', data: metric1 }, //기존의 name값이랑 백엔드로 받은 data값에 metric이라는 객체에 x,y 배열이 있는데 그 바뀐 배열들 넣어주는거지
        { name: 'Metric2', data: metric2 },
        { name: 'Metric3', data: metric3 },
        { name: 'Metric4', data: metric4 },
        { name: 'Metric5', data: metric5 },
        { name: 'Metric6', data: metric6 },
        { name: 'Metric7', data: metric7 },
        { name: 'Metric8', data: metric8 }
      ];

      this.setState({series:setMetric})
    }, 3000);

    // 그럼 여기서 이게 랜덤데이터냐? 랜덤데이터네
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }


  render() {

    return (
      
      <div id="chart">
      <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={250} />
      <h6 style={{textAlign:"center", fontSize:"1.25rem"}}>Data from "Drone_ALPHA"</h6>
      </div>

    );
  }
}


export default ChartData;
// import React from "react"

// import HighchartsReact from 'highcharts-react-official'
// import {liveChart, liveChartInterval}  from './SignalStrengthData'; //mock에서 데이터를 받아와서 같은데에서 가지고 온거지

// class ChartSignalStrength extends React.Component{

//     state = { //state로 데이터를 관리한다, 즉 데이터를 담는 그릇 //그릇에 담아주고
//         cd: liveChart, 
//         ld: liveChart, 
//         initEchartsOptions: {
          
//           renderer: 'canvas'
//         },
//         series : []
        
//       }
      
  
//     render(){
//       const {ld, cd} = this.state //사용을 하기 위해 그릇에서 가져와서 변수선언을 해주는거지 cd 를 어디다가 담아야하는지

//       return(
//               <div>
//                 <HighchartsReact
//                   options= {ld}
//                 />
//                 <h6 style={{textAlign:"center"}}>signal strength</h6>
//               </div>
//         )
//     }


//     // componentDidMount() {
//     //   setInterval(() => {
//     //     const { signalStrength } = this.props;
//     //     const setSignalstrength = [{ data: signalStrength }];
//     //     this.setState({ series: setSignalstrength });
//     //   },5000);
//     // }




//     // componentWillUnmount() { // 이 메서드는 컴포넌트가 제거 되기전에 호출됨(컴포넌트가 사라지는 과정에서 호출이 되는 함수지)
//     //   clearInterval(liveChartInterval); //컴포넌트가 unmount되기 직전에 livechartinterval을 clearinterval을 해준다.
//     // }
// }

// //이 메서드는 컴포넌트가 제거(unmount)되기 전에 호출되는데 이 메서드를 사용하여 컴포넌트에서 생성된 리소스를 정리(clean up)하거나, 타이머(timer)나 인터벌(interval)을 해제(unset)하고 메모리 누수(memory leak)를 방지할 수 있습니다.

// //clearInterval() 함수는 JavaScript에서 타이머를 제어하기 위해 사용되는 함수 중 하나입니다. 이 함수는 setInterval() 함수를 사용하여 설정된 타이머를 해제합니다.

// //따라서, 위의 코드는 liveChartInterval이라는 이름으로 저장된 인터벌을 해제하고, 해당 컴포넌트가 제거될 때 메모리 누수를 방지하는 역할을 합니다.

// //즉, 생명주기가 뭔데 컴포넌트가 브라우저상에 나타날때 업데이트될때 사라질때 중간 과정에서 어떠한 작업을 하고 싶을때 라이프사이클api를 사용할 수 있다.
// //mountiog -> 컴포넌트가 우리 브라우저 상에 나타난다는 것을 의미한다.
// //updating -> 컴포넌트의 props가 바뀌거나 state가 바뀌었을 때를 의미한다.
// //unmountion -> 컴포넌트가 우리 브라이저 상에서 사라질 때를 의미한다.

// export default ChartSignalStrength;
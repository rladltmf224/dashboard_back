// import React from "react";

// import {CommunicationData, liveChart } from './CommunicationData';
// // import {CommunicationData, commdata} from './CommunicationData';
// //복제해서 가지고옴
// import ReactEchartsCore from 'echarts-for-react/lib/core';
// import echarts from 'echarts/lib/echarts';

// //chart mock에서 데이터는 변경할 수 있음

// class ChartCommunication extends React.Component{

  
//     state = { //여기서 기본값을 설정함, 그 손자컴포넌트에서 들고와서
//         cd: CommunicationData,
//         ld: liveChart,
//         initEchartsOptions: {
//         renderer: 'canvas',
//     },
//     }


//     // componentDidMount(){
//     //   const {commdrones} = this.props;

//     //   console.log("nnnnnnnnnnn",this.props)

//     //   const setComm = [
//     //     {value : commdrones[0], name: "가가가"},
//     //     {value : commdrones[1], name: "나나나"}
//     //   ]
//     //   this.setState({qq:setComm}) //그럼 기존의 qq에 내가 새로 생성한 데이터를 넣어주는거지
//     // }

//     render(){


//         // const { cd, initEchartsOptions, qq} = this.state
//         const { cd, initEchartsOptions} = this.state
        

//         return(
//             <div>
//               <div
//                 title={<h5>Chart <span className="fw-semi-bold">Donut Chart</span></h5>}
//                 close collapse
//               >
//                 <ReactEchartsCore
//                   echarts={echarts}
//                   option={cd.echarts.donut}
//                   opts={initEchartsOptions}
//                   style={{height: "170px"}}
       
//                 />
            
//               </div>
//               <h6 style={{textAlign:"center"}}>Communication of Drones</h6>
//             </div>
//         )
//     }
// }



// export default ChartCommunication
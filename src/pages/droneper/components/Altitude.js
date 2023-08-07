//   import React from 'react';
//   import './Altitude.scss';

//   class Altitude extends React.Component {
//     componentDidMount() {

//       //FlightIndicator();를 초기화 하는데 사용된다.한번만 실행이 되니깐,
//       // this.initializeFlightIndicator();

//       let script = document.createElement('script');

//       script.src = '../../../../js/jQuery-Flight-Indicators-master/js/jquery.flightindicators.js'

//       script.onload = () => {

//         const {$} = window;

//         let attitude = $.flightIndicator('#attitude', 'attitude', {roll:50, pitch:-20, size:200, showBox : true});
//         let heading = $.flightIndicator('#heading', 'heading', {heading:150, showBox:true});
//         let variometer = $.flightIndicator('#variometer', 'variometer', {vario:-5, showBox:true});
//         let airspeed = $.flightIndicator('#airspeed', 'airspeed', {showBox: false});
//         let altimeter = $.flightIndicator('#altimeter', 'altimeter');

//         let increment = 0;

//         setInterval(function() {
//           attitude.setRoll(30*Math.sin(increment/10));
//           attitude.setPitch(50*Math.sin(increment/20));
//           heading.setHeading(increment);
//           variometer.setVario(2*Math.sin(increment/10));
//           airspeed.setAirSpeed(80+80*Math.sin(increment/10));
//           altimeter.setAltitude(10*increment);

//           increment++;
//         },1000);

//       }
//       document.body.appendChild(script);
//     }

//     //import한 라이브러리 js를 보니깐 밑에 해당 html이 들어있길래 그걸 불러와서 사용하는걸로 생각을 했는데 움직이는거까지는 했지만 이미지
//     //표출이 안되고 있음, 이미지 표출은 아마 해당 라이브러리에서 이미지를 깁쟈

//     render() {

//       return( //여기서 이미지 올리는거는 맞는거 같은데
//         <div>

//           <div className="instrument heading" id="heading">
//             <img src = {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_box.svg'} className = "background box" alt="" id="img01"/>

//             <div className="heading box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/heading_yaw.svg'} className="box" alt="" />
//             </div>

//             <div className="mechanics box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/heading_mechanics.svg'} className="box" alt="" />
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_circle.svg'} className="box" alt="" />
//             </div>
//           </div>

//           <div className="instrument vario" id="variometer">
//             {/* <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_box.svg'} className="background box" alt=""/> */}
//             <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/vertical_mechanics.svg'} className="box" alt=""/>

//             <div className="vario box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_needle.svg'} className="box" alt="" />
//             </div>

//             <div className="mechanics box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_circle.svg'} className="box" alt="" />
//             </div>
//           </div>

//           {/* <div className="instrument turn_coordinator">
//             <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_box.svg'} className="background box" alt="" />
//             <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/turn_coordinator.svg'} className="box" alt="" />

//             <div className="turn box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_tc_airplane.svg'} className="box" alt="" />
//             </div>

//             <div className="mechanics box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_circle.svg'} className="box" alt="" />
//             </div>
//           </div> */}

//           <div className="instrument airspeed" id="airspeed">
//             {/* <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_box.svg'} className="background box" alt="" /> */}
//             <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/speed_mechanics.svg'} className="box" alt="" />

//             <div className="speed box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_needle.svg'} className="box" alt="" />
//             </div>

//             <div className="mechanics box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_circle.svg'} className="box" alt="" />
//             </div>
//           </div>

//           <div className="instrument altimeter altitude" id="altimeter">
//             <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_box.svg'} className="background box" alt="" />

//             <div className="pressure box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/altitude_pressure.svg'} className="box" alt="" />
//             </div>

//             <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/altitude_ticks.svg'} className="box" alt="" />

//             <div className="needleSmall box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_needle_small.svg'} className="box" alt="" />
//             </div>

//             <div className="needle box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_needle.svg'} className="box" alt="" />
//             </div>

//             <div className="mechanics box"></div>
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_circle.svg'} className="box" alt="" />
//             </div>
//           </div>

//           <div className="instrument attitude" id="attitude">
//             {/* <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_box.svg'} className="background box" alt="" /> */}

//             <div className="roll box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/horizon_back.svg'} className="box" alt="" />

//               <div className="pitch box">
//                 <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/horizon_ball.svg'} className="box" alt="" />
//               </div>

//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/horizon_circle.svg'} className="box" alt="" />
//             </div>

//             <div className="mechanics box">
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/horizon_mechanics.svg'} className="box" alt="" />
//               <img src= {process.env.PUBLIC_URL + '/js/jQuery-Flight-Indicators-master/img/fi_circle.svg'} className="box" alt="" />
//             </div>
//           </div>

//         </div>
//       )

//     }
//   }

// export default Altitude;

import React, { Component } from "react";
//데이터 통신
import PropTypes from "prop-types";
import { connect } from "react-redux";
//데이터 통신을 위한 action에서 정의되어있는 액션함수 불러오는
import { receiveDataRequest } from "../../actions/droneper";
//리액트 부트스트랩이라는 레이아웃 정의하는 라이브러리에서 row,col을 가지고 오겠다.
import { Col, Row } from "reactstrap";
//그 페이지 widtget을 쓰면 안되고 컴포넌트에 있는 위젯을 써야지 이게 레이아웃할때 쓰라고 하는 그거네
import Widget from "../../components/Widget/Widget";
//drone scss
import s from "../droneper/DronePer.module.scss";
//drone_personal chart components
import ChartUsedBattery from "./components/ChartUsedBattery";
import ChartRemainingBattery from "./components/ChartRemainingBattery";
import EstimateBattery from "./components/ChartEstimateBattery";
import DroneTab from "./components/DroneTab";
import ChartNetworkStatus from "./components/ChartNetworkStatus";
import DroneTimeLine from "./components/DroneTimeLine";
import ChartNumberOfFlight from "./components/ChartNumberOfFlight";
import ChartSensorPerformance from "./components/ChartSensorPerformance";
import ChartData from "./components/ChartData";
import ChartMissionSuccess from "./components/ChartMissionSuccess";
import ChartSignalStrength from "./components/ChartSignalStrength";
import ChartAltitude from "./components/ChartAltitude";

// import Altitude from './components/Altitude';

// import { color } from 'highcharts';
// import mock from './mock';
//그 애널리틱스안에 들어있는 데이터를 백엔드로 연동해놨으니깐 굳이 필요옶지
// import cx from 'classnames';
// import Trend from 'react-trend';
// import MainChart from '../analytics/components/Charts/MainChart';

class DronePer extends React.Component {
  static propTypes = {
    /*리액트,에서는 props를 통해 상위컴포넌트로부터 전달된 데이터를 받아 하위컴포넌트에서 사용할 수 있는데 이러한 데이터가 예상치 못한 형태로 전달
      될수 있기떄문에 이를 방지하기위해 타입체크를 수행함
      propTypes는 컴포넌트 클레스에서 정의하는 정적 속성으로 이를 통해 해당 컴포넌트가 전달받은 props의 타입을 지정할 수 있으며 아래의 것들의 props의 타입을 지정해주고 있다.
      propType.any는 어떤 타입이든 상관없이 허용한다라는 의미이다.
      이러한 타입체크를 통해 컴포넌트에 전달되는 props의 타입을 미리 정의하여, 예기치 에러가 발생하는것을 막을수 있다.*/
    flightInfo: PropTypes.any,
    batteryChart: PropTypes.any,
    pageViewsData: PropTypes.any,
    totalVisitsData: PropTypes.any,
    sessionDurationData: PropTypes.any,
    metric1: PropTypes.any,
    metric2: PropTypes.any,
    metric3: PropTypes.any,
    metric4: PropTypes.any,
    metric5: PropTypes.any,
    metric6: PropTypes.any,
    metric7: PropTypes.any,
    metric8: PropTypes.any,
    chartMission: PropTypes.any,
    generateDayWiseChart: PropTypes.any,
    isReceiving: PropTypes.bool, //true나 false값만 허용한다는 뜻
  };

  static defaultProps = {
    //해당 컴포넌트에서 정의된 props값을 전달 받지 않은 경우, 기본값을 지정해줄 수 있는데 지금 같은경우에는 빈 객체를 기본값으로 사용되도록 지정하고 있음
    flightInfo: [],
    batteryChart: {},
    pageViewsData: [],
    totalVisitsData: [],
    sessionDurationData: [],
    metric1: [],
    metric2: [],
    metric3: [],
    metric4: [],
    metric5: [],
    metric6: [],
    metric7: [],
    metric8: [],
    generateDayWiseChart: {},
    chartMission: {},
    isReceiving: false,
  };

  componentDidMount() {
    //랜더링을 시키겠다 해당 함수 호출을
    console.log("this.props.DronePer ---->!!!!!!!!! ");

    this.props.dispatch(receiveDataRequest()); //함수호출  ->  action -> dronper랑 import 되어있음
  }

  //ㅅ!!!!!!!!!!!!!!!!!!!!!!순서 !! 부모컴포넌트 -> 부모 render(즉, 화면그려지는거지) -> 부모 didmount -> 자식컴포넌트 랜더링 -> 자식 render -> 자식 didmount

  //render()가 실행된 후 componentdidmount메서드가 실행됨
  //즉, render메서드가 실행되어 가상 dom에 생성된 후 생성된 가상 돔이 실제 돔에 마운트 된 후에 컴포넌트가 실제 돔에 마운트된 후에 componentdidmount메서드가 호출된다.

  //requestAnimationFrame -> 시간의 흐름에 따라 어떠한 것을 제어하는 js내장함수

  render() {
    //console.log("this.props.pageViewsData ---->!!!!!!!!! ",this.props.batteryChart)

    //일단 여기는 나옴

    const {
      flightInfo,
      batteryChart,
      pageViewsData,
      totalVisitsData,
      sessionDurationData,
      chartMission,
      metric1,
      metric2,
      metric3,
      metric4,
      metric5,
      metric6,
      metric7,
      metric8,
      generateDayWiseChart,
    } = this.props;

    return (
      <div>
        <h1 className="page-title">Drone_alpha</h1>

        <div className={s.sidesWrapper}>
          <div className={s.analyticsSide}>
            <Row>
              <Col xs={12} xl={3} md={6}>
                <Widget close>
                  <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                    Drone_ALPHA
                  </p>
                  <div className={s.droneImg}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/drone_img.png"}
                      alt="logo"
                    />
                  </div>
                </Widget>
              </Col>

              <Col xs={12} xl={3} md={6}>
                <Widget style={{ width: "75%" }} close>
                  <p style={{ textAlign: "center", fontSize: "1.25rem" }}>
                    used battery
                  </p>
                  <ChartUsedBattery usedbattery={batteryChart} />
                </Widget>
              </Col>

              <Col xs={12} xl={3} md={6}>
                <Widget style={{ width: "75%" }} close>
                  <p style={{ textAlign: "center", fontSize: "1.25rem" }}>
                    remaining battery
                  </p>
                  <ChartRemainingBattery remainingbattery={batteryChart} />
                </Widget>
              </Col>

              <Col xs={12} xl={3} md={6}>
                <Widget close style={{ width: "75%" }}>
                  <p style={{ textAlign: "center", fontSize: "1.25rem" }}>
                    estimate battery
                  </p>
                  <EstimateBattery estimatebattery={batteryChart} />
                </Widget>
              </Col>

              <Col xs={12} xl={3} md={6}>
                <Widget close>
                  <DroneTab flightinfodata={flightInfo} />
                  {/* 내가 백엔드로 받아온 데이터를 중에 visits를 사용하겠다. 해당 컴포넌트에서 test2Data의 이름으로 */}
                </Widget>
              </Col>

              <Col xs={9} xl={9} md={9}>
                <Widget close>
                  <ChartNetworkStatus
                    sessiondurationdata={sessionDurationData}
                    pageviewsdata={pageViewsData}
                    totalvisitsdata={totalVisitsData}
                  />
                </Widget>
              </Col>
            </Row>

            <Col lg={12} xs={12} style={{ margin: "100px 0" }}>
              <Widget close>
                <DroneTimeLine />
              </Widget>
              {/* <MainChart data={mainChart} isReceiving={isReceiving} /> */}
            </Col>

            <Widget close>
              <div className={s.droneStatus}>
                <Row>
                  <div>
                    <Col xs={12} lg={6} xl={4} className={s.circlesize}>
                      {/* <BigStat {...mock.bigStat[0]} /> */}
                      <img src={process.env.PUBLIC_URL + "/images/SPEED.png"} />
                    </Col>

                    <Col xs={12} lg={6} xl={4} className={s.circlesize}>
                      {/* <BigStat {...mock.bigStat[1]} /> */}
                      <img src={process.env.PUBLIC_URL + "/images/HEAD.png"} />
                    </Col>
                  </div>
                </Row>
                <Row>
                  <Col xs={12} lg={6} xl={4} className={s.video}>
                    {/* <BigStat {...mock.bigStat[1]} /> */}
                    <img src={process.env.PUBLIC_URL + "/images/video.jpg"} />
                  </Col>
                </Row>
                <Row>
                  <div>
                    <Col xs={12} lg={6} xl={4} className={s.circlesize}>
                      {/* <BigStat {...mock.bigStat[2]} /> */}
                      <img
                        src={process.env.PUBLIC_URL + "/images/ROLL_PITCH.png"}
                      />
                    </Col>

                    <Col xs={12} lg={6} xl={4} className={s.circlesize}>
                      <img src={process.env.PUBLIC_URL + "/images/GS.png"} />
                      {/* <BigStat {...mock.bigStat[3]}/> */}
                    </Col>
                  </div>
                </Row>
              </div>
            </Widget>

            <Row>
              <Col xs={12} lg={6} xl={4}>
                <Widget close>
                  <ChartNumberOfFlight numberofflight={pageViewsData} />
                </Widget>
              </Col>

              <Col xs={12} lg={6} xl={4}>
                <Widget close>
                  <ChartSensorPerformance
                    sensorperformance={sessionDurationData}
                  />
                </Widget>
              </Col>

              <Col xs={12} lg={6} xl={4}>
                <Widget close>
                  <ChartData
                    metric1={metric1}
                    metric2={metric2}
                    metric3={metric3}
                    metric4={metric4}
                    metric5={metric5}
                    metric6={metric6}
                    metric7={metric7}
                    metric8={metric8}
                  />
                </Widget>
              </Col>

              <Col xs={12} lg={6} xl={4}>
                <Widget close>
                  <ChartMissionSuccess missionsuccess={chartMission} />
                </Widget>
              </Col>

              <Col xs={12} lg={6} xl={4}>
                <Widget close>
                  <ChartSignalStrength signalstrength={pageViewsData} />
                </Widget>
              </Col>

              <Col xs={12} lg={6} xl={4}>
                <Widget close>
                  <ChartAltitude altitudedata={generateDayWiseChart} />
                </Widget>
              </Col>
            </Row>

            {/* <Altitude/> */}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //매핑하는 단계 리덕스랑 컴포넌트 이어주는 , 이 함수는 컴포넌트에 props에 전달됨
  //함수의 인자로는 현재 리덕스에 저장된 상태를 의미하는 state가 있음
  // console.log("mapStateToProps", mapStateToProps);
  // console.log("mapStateToProps state", state);

  // console.log("flightInfo",flightInfo);
  // console.log("state.droneper.batteryChart -----> ",state.droneper.batteryChart)
  // console.log("generateData11111-----> ",state.droneper.metric1)
  // console.log("generateData22222 -----> ",state.droneper.metric2)
  // console.log("generateData23333333 -----> ",state.droneper.metric3)
  // console.log("generateData4444444 -----> ",state.droneper.metric4)
  // console.log("generateData555555 -----> ",state.droneper.metric5)
  // console.log("generateData6666666 -----> ",state.droneper.metric6)
  // console.log("generateData77777 -----> ",state.droneper.metric7)
  // console.log("generateData888888 -----> ",state.droneper.metric8)
  //console.log("xxxxxxxxxxx -----> ",state.droneper.generateDayWiseChart)

  return {
    flightInfo: state.droneper.flightInfo,
    batteryChart: state.droneper.batteryChart,
    pageViewsData: state.droneper.pageViewsData,
    totalVisitsData: state.droneper.totalVisitsData,
    sessionDurationData: state.droneper.sessionDurationData,
    metric1: state.droneper.metric1,
    metric2: state.droneper.metric2,
    metric3: state.droneper.metric3,
    metric4: state.droneper.metric4,
    metric5: state.droneper.metric5,
    metric6: state.droneper.metric6,
    metric7: state.droneper.metric7,
    metric8: state.droneper.metric8,
    generateDayWiseChart: state.droneper.generateDayWiseChart,
    chartMission: state.droneper.chartMission,
    //여기서 나오는 중간애는 index.js에서 등록을 해줘야하지 여기서 사용을 할 수 있는거네

    //err state에 안담겨서 나는 에러,
  };
}

export default connect(mapStateToProps)(DronePer); //컴포넌트 이름으로,

//mapstatetoprops 는 리덕스 상태를 컴포넌트의 props로 매핑해주는 역할을 하는데 컴포넌트에서 필요한 상태 값을 props로 전달받을 수 있게 한다.
//즉, 함수,스토어 데이터를 props로 컴포넌트에 전달하는 역할을 한다.
//mapstatetoprops 함수는 첫번째 인자로 현재 리덕스 스토어의 상태를 받고 두번째 인자로는 해당 컴포넌트의 props를 받는다. connet함수와 함께 사용하여 리덕스와 연결되도록 한다.

//일단 액샨이랑 리듀서를 만들기
//데이터들을 mock로 들고오기때문에 백엔드모드가 아니더라도 나옴

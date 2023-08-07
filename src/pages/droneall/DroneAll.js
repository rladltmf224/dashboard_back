import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import cx from 'classnames';
import { Col, Row } from 'reactstrap';
import Widget from '../../components/Widget';

import s from './DroneAll.module.scss';
import { receiveDataRequest } from '../../actions/droneall';
//drone_all chart components
import Weather from './components/Weather';
// import ChartCommunication from './components/ChartCommunication'
import Table from './components/Table';
import ChartFlightStatus from './components/ChartFlightStatus';
// import ChartAverageAltitude from './components/ChartAverageAltitude';
import ChartAverageSpeed from './components/ChartAverageSpeed';
import ChartHighestLowest from './components/ChartHighestLowest';
// import ChartSignalStrength from './components/ChartSignalStrength';
import Maps from '../maps/google/Google';
import ChartTotalNumber from './components/ChartTotalNumber';
import ChartMissionSuccessRate from './components/ChartMissionSuccessRate';
import ChartCollection from './components/ChartCollection';


class DroneAll extends React.Component{

  static propTypes = { 
    /*리액트,에서는 props를 통해 상위컴포넌트로부터 전달된 데이터를 받아 하위컴포넌트에서 사용할 수 있는데 이러한 데이터가 예상치 못한 형태로 전달
    될수 있기떄문에 이를 방지하기위해 타입체크를 수행함
    propTypes는 컴포넌트 클레스에서 정의하는 정적 속성으로 이를 통해 해당 컴포넌트가 전달받은 props의 타입을 지정할 수 있으며 아래의 것들의 props의 타입을 지정해주고 있다.
    propType.any는 어떤 타입이든 상관없이 허용한다라는 의미이다.
    이러한 타입체크를 통해 컴포넌트에 전달되는 props의 타입을 미리 정의하여, 예기치 에러가 발생하는것을 막을수 있다.*/
      commDrones : PropTypes.any,
      totalNumberOfFlown : PropTypes.any,
      inflation : PropTypes.any,
      takeOffAndLand : PropTypes. any,
      collectionOfData : PropTypes.any,
      averageSpeed : PropTypes.any,
      signalStrengthChart : PropTypes.any,
      averageChart : PropTypes.any,
      isReceiving: PropTypes.bool, //true나 false값만 허용한다는 뜻
      dispatch: PropTypes.func.isRequired, //함수 타입만 허용한다는 뜻
      
  };

  static defaultProps = { //해당 컴포넌트에서 정의된 props값을 전달 받지 않은 경우, 기본값을 지정해줄 수 있는데 지금 같은경우에는 빈 객체를 기본값으로 사용되도록 지정하고 있음

      isReceiving: false,
      commDrones: [],
      totalNumberOfFlown : {},
      inflation : {},
      takeOffAndLand : [],
      collectionOfData : [],
      averageSpeed : [],
      highLow : {},
      signalStrengthChart : [],
      averageChart : []
  };

  componentDidMount() { //랜더링을 시키겠다 해당 함수 호출을 
      this.props.dispatch(receiveDataRequest());//함수호출
  }


render() {

  // const { isReceiving, commDrones, totalNumberOfFlown
  //   , inflation, takeOffAndLand, collectionOfData, averageSpeed, highLow, signalStrengthChart, averageChart } = this.props;

    const { totalNumberOfFlown
      , inflation, takeOffAndLand, collectionOfData, averageSpeed, highLow } = this.props;


  let date = new Date()

  return ( 
    <div>
      <h1 className="page-title">Drone_all</h1>
      <div style={{display:"flex"}}>
        <div style={{width: "25%"}}>
          {/* col 에 width를 따로 지정할 수 없어서 혹은 내가 하는 방법을 몰라서 div로 다시 감싸줬음 */}
          <Col>
            <Col>
                <Widget
                  // fetchingData={isReceiving} //이 props는 데이터를 가져오는중인지를 나타내는 boolean 값, 이 값이 true인 경우에는 데이터가 로딩중임을 나타내는 ui효과를 볼 수 있음
                  close
                >
                  <Weather/>
                </Widget>
            </Col>

            <Col>
                <Widget
                  close
                >
                    <h5 style={{height:"50px"}}>데이터 표출예정</h5>
                  
                  {/* <ChartCommunication commdrones = {commDrones}/> */}
                </Widget>
            </Col>
   
            <Col>
                <Widget
                  bodyClass="mt"
                  close
                  className="mb-0 h-100"
                  // fetchingData={isReceiving}
                >
                  <Table/>  
                </Widget>
            </Col>

            <Col>
                <Widget
                  bodyClass="mt-lg"
                  close //이거 닫는거네
                  className="mb-0 h-100"
                  // fetchingData={isReceiving}
                >

                  <ChartFlightStatus takeoffandland={takeOffAndLand}/>
                </Widget>
            </Col>

          </Col>
        </div>


        <div style={{width: "50%"}}>
          <Col>

            <Col>
              <div className="pb-xlg h-100">
                <Widget
                  // fetchingData={isReceiving}
                  close
                >
                  
                  <div className={s.info}>
                    <p>
                      Number of drone
                    </p>
                    <p style={{fontWeight:"bold"}}>
                      {/* {flightInfo.serialNo} */}
                      20
                    </p>
                    <p>
                      Average flight time
                    </p>
                    <p style={{fontWeight:"bold"}}>
                      {date.toString()}
                      15
                    </p>
                    <p>
                      Average battery usage
                    </p>
                    <p style={{fontWeight:"bold"}}>
                      30%
                    </p>
                  </div>

                </Widget>
              </div>
            </Col>

            <Col>

              <div className="pb-xlg h-100 na=">
                <Widget
                  // fetchingData={isReceiving}
                  close
                >
                  <div className={s.maps}>
                    <Maps/>
                  </div>
                </Widget>
              </div>
            </Col>

          </Col>
        </div>


        <div style={{width:"25%"}}>
          <Col>
            <Col>
                <Widget
                  // fetchingData={isReceiving}
                  close
                >
              
                  <ChartTotalNumber totalnumber = { totalNumberOfFlown }/>
                </Widget>
            </Col>
            
            <Col>                
                <Widget
                  close
                  // fetchingData={isReceiving}
                >
                  <ChartMissionSuccessRate missionsuccessrate = { inflation }/>
                </Widget>
            </Col>

            <Col>
                <Widget
                  close //이거 닫는거네
                  // fetchingData={isReceiving}
                  
                >
                  <ChartCollection collection = {collectionOfData}/>
                </Widget>
            </Col>

          </Col>
        </div>
      </div>

      <Row>
        <Col xs={9} lg={6} xl={3}>
          <Widget 
            close
          >
            <h5 style={{height:"335px"}}>데이터 표출예정</h5>
            {/* <ChartAverageAltitude averagealtitude = {averageChart}/> */}
          </Widget>
        </Col>


        <Col xs={9} lg={6} xl={3}>
          <Widget
            close
          >
            <ChartAverageSpeed averagespeed = {averageSpeed}/>
          </Widget>
        </Col>


        <Col xs={9} lg={6} xl={3}>
          <Widget
            close
          >
            <ChartHighestLowest highlow = {highLow}/>
          </Widget>
        </Col>


        <Col xs={9} lg={6} xl={3}>
          <Widget
            close
          >
            <h5 style={{height:"335px"}}>데이터 표출예정</h5>
            {/* <ChartSignalStrength signalstrength = {signalStrengthChart}/> */}
          </Widget>
        </Col>
      </Row>
    </div>
  );
}
}

function mapStateToProps(state) {
  
  return {
      isReceiving: state.analytics.isReceiving,
      commDrones : state.droneall.commDrones,
      totalNumberOfFlown : state.droneall.totalNumberOfFlown,
      inflation : state.droneall.inflation,
      takeOffAndLand : state.droneall.takeOffAndLand,
      collectionOfData : state.droneall.collectionOfData,
      averageSpeed : state.droneall.averageSpeed,
      highLow : state.droneall.highLow,
      signalStrengthChart : state.droneall.signalStrengthChart,
      averageChart : state.droneall.averageChart
  }
}

export default connect(mapStateToProps)(DroneAll);
//mapstatetoprops 는 리덕스 상태를 컴포넌트의 props로 매핑해주는 역할을 하는데 컴포넌트에서 필요한 상태 값을 props로 전달받을 수 있게 한다.
//mapstatetoprops 함수는 첫번째 인자로 현재 리덕스 스토어의 상태를 받고 두번째 인자로는 해당 컴포넌트의 props를 받는다. connet함수와 함께 사용하여 리덕스와 연결되도록 한다.
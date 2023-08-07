import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveDataRequest } from '../../actions/personalservice';
import { Col, Row } from 'reactstrap'
import Widget from '../../components/Widget/Widget'; 
import s from '../personalservice/PersonalService.module.scss';

import ChartUsedBattery from './components/ChartUsedBattery';
import ChartRemainingBattery from './components/ChartRemainingBattery';
import EstimateBattery from './components/ChartEstimateBattery';
import DroneTab from './components/DroneTab';
import ChartNetworkStatus from './components/ChartNetworkStatus';
import DroneTimeLine from './components/DroneTimeLine';
import ChartNumberOfFlight from './components/ChartNumberOfFlight';
import ChartSensorPerformance from './components/ChartSensorPerformance';
import ChartData from './components/ChartData';
import ChartMissionSuccess from './components/ChartMissionSuccess';
import ChartSignalStrength from './components/ChartSignalStrength';
import ChartAltitude from './components/ChartAltitude';
// import Altitude from './components/Altitude';


class PersonalService extends React.Component {

    static propTypes = {
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
        chartMission : PropTypes.any,
        generateDayWiseChart : PropTypes.any,
        isReceiving: PropTypes.bool, 
    };

    static defaultProps = { 
        flightInfo : [],
        batteryChart : {},
        pageViewsData : [],
        totalVisitsData: [],
        sessionDurationData: [],
        metric1 : [],
        metric2 : [],
        metric3 : [],
        metric4 : [],
        metric5 : [],
        metric6 : [],
        metric7 : [],
        metric8 : [],
        generateDayWiseChart: {},
        chartMission : {},
        isReceiving: false
    };

 
  componentDidMount() { 
      this.props.dispatch(receiveDataRequest());  
  }



  render() {  

    const { flightInfo, batteryChart, pageViewsData, totalVisitsData, sessionDurationData, chartMission, metric1, metric2, metric3, metric4, metric5, metric6, metric7, metric8, generateDayWiseChart } = this.props;

    return (
      <div>

        <h1 className="page-title">Drone_ALPHA</h1>

        <div className={s.sidesWrapper}>
          <div className={s.analyticsSide}>
            <Row>
              <Col xs={12} xl={3} md={6}>
                <Widget
                  close
                >
                  <h5 style={{textAlign:"center", fontSize:"1.5rem"}}>Drone_ALPHA</h5>
                  <div className={s.droneImg}>
                    <img src={process.env.PUBLIC_URL + '/images/drone_img.png'} alt='logo'/>
                  </div>
                </Widget>
              </Col>


              <Col xs={12} xl={3} md={6}>
                <Widget 
                  style={{width:"75%"}}
                  close
                >
                  <h5 style={{textAlign:"center", fontSize:"1.25rem"}}>used battery</h5>
                  <ChartUsedBattery usedbattery = {batteryChart}/>
                </Widget>
              </Col>


              
              <Col xs={12} xl={3} md={6}>
      
                <Widget 
                  style={{width:"75%"}}
                  close
                  >
                  <h5 style={{textAlign:"center", fontSize:"1.25rem"}}>remaining battery</h5>
                  <ChartRemainingBattery remainingbattery = {batteryChart}/>
                </Widget>
 
              </Col>


              <Col xs={12} xl={3} md={6}>
          
                <Widget
                  close 
                  style={{width:"75%"}}
                >
                  <h5 style={{textAlign:"center", fontSize:"1.25rem"}}>estimate battery</h5>
                  <EstimateBattery estimatebattery = {batteryChart}/>
                </Widget>
               
              </Col>

              <Col>
    
                  <Widget
                    close  
                  >
                    <DroneTab flightinfodata = {flightInfo}/> 
                  </Widget>
            
              </Col>


              <Col xs={9} xl={9} md={9}>
    
                  <Widget
                    close
                  >
                    <ChartNetworkStatus sessiondurationdata={sessionDurationData} pageviewsdata={pageViewsData} totalvisitsdata={totalVisitsData}/>
                  </Widget>
       
              </Col>

            </Row>

            
            <Col lg={12} xs={12} style={{margin:"100px 0"}}>
              <Widget
                close
              >
                <DroneTimeLine/>
              </Widget>              
              {/* <MainChart data={mainChart} isReceiving={isReceiving} /> */}
            </Col>

            <Widget
              close
            >
              <div className={s.droneStatus}>
                <Row>
                  <div>
                      <Col xs={12} lg={6} xl={4} className={s.circlesize}>
                        <img src={process.env.PUBLIC_URL + '/images/SPEED.png'}/>
                      </Col>
                  
                  
                  
                    <Col xs={12} lg={6} xl={4} className={s.circlesize}>
                      <img src={process.env.PUBLIC_URL + '/images/HEAD.png'}/>
                    </Col>

                  </div>
                </Row>

                <Row>

                  <Col xs={12} lg={6} xl={4} className={s.video}>
                    <img src={process.env.PUBLIC_URL + '/images/video.jpg'}/>
                  </Col>

                </Row>

                <Row>
                  <div>

                    <Col xs={12} lg={6} xl={4} className={s.circlesize}>
                      <img src={process.env.PUBLIC_URL + '/images/ROLL_PITCH.png'}/>
                    </Col>

                    <Col xs={12} lg={6} xl={4} className={s.circlesize}>
                      <img src={process.env.PUBLIC_URL + '/images/GS.png'}/>
                    </Col>

                  </div>
                </Row>

              </div>
            </Widget>


            <Row>
              <Col xs={12} lg={6} xl={4}>
                <Widget
                  close
                >
                  <ChartNumberOfFlight numberofflight = {pageViewsData} />
                </Widget>
              </Col>


              <Col xs={12} lg={6} xl={4}>
                <Widget
                  close
                >
                  <ChartSensorPerformance sensorperformance = {sessionDurationData}/>
                </Widget>
              </Col>

              <Col xs={12} lg={6} xl={4}>
                <Widget
                  close
                >
                  <ChartData metric1 = {metric1} metric2 = {metric2} metric3 = {metric3} metric4 = {metric4} metric5 = {metric5} metric6 = {metric6} metric7 = {metric7} metric8 = {metric8} />
                </Widget>
              </Col>

              <Col xs={12} lg={6} xl={4}>
                <Widget
                  close
                >
                  <ChartMissionSuccess missionsuccess = {chartMission}/>
                </Widget>
              </Col>

              <Col xs={12} lg={6} xl={4}>
                <Widget
                  close
                >
                  <ChartSignalStrength signalstrength = {pageViewsData}/>
                </Widget>
              </Col>

              <Col xs={12} lg={6} xl={4}>
                <Widget
                  close
                >
                  <ChartAltitude altitudedata = {generateDayWiseChart}/>
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

    return {
      flightInfo: state.personalservice.flightInfo,
      batteryChart : state.personalservice.batteryChart,
      pageViewsData: state.personalservice.pageViewsData,
      totalVisitsData: state.personalservice.totalVisitsData,
      sessionDurationData: state.personalservice.sessionDurationData,
      metric1: state.personalservice.metric1,
      metric2: state.personalservice.metric2,
      metric3: state.personalservice.metric3,
      metric4: state.personalservice.metric4,
      metric5: state.personalservice.metric5,
      metric6: state.personalservice.metric6,
      metric7: state.personalservice.metric7,
      metric8: state.personalservice.metric8,
      generateDayWiseChart: state.personalservice.generateDayWiseChart,
      chartMission: state.personalservice.chartMission
    }
}

export default connect(mapStateToProps)(PersonalService);

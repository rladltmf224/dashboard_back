import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import { Col, Row, Progress } from 'reactstrap';

import Widget from '../../components/Widget';
import Trend from 'react-trend';
import MainChart from './components/Charts/MainChart';
import TaskContainer from './components/TaskContainer/TaskContainer';
import BigStat from './components/BigStat/BigStat';
import TableContainer from './components/TableContainer/TableContainer';
import Calendar from '../dashboard/components/calendar/Calendar';
import HighchartsReact from 'highcharts-react-official'

import mock from './mock';
import s from './Analitycs.module.scss';
import { receiveDataRequest } from '../../actions/analytics';
// import { color } from 'highcharts';

class Analytics extends Component {
    static propTypes = { 
      /*리액트,에서는 props를 통해 상위컴포넌트로부터 전달된 데이터를 받아 하위컴포넌트에서 사용할 수 있는데 이러한 데이터가 예상치 못한 형태로 전달
      될수 있기떄문에 이를 방지하기위해 타입체크를 수행함
      propTypes는 컴포넌트 클레스에서 정의하는 정적 속성으로 이를 통해 해당 컴포넌트가 전달받은 props의 타입을 지정할 수 있으며 아래의 것들의 props의 타입을 지정해주고 있다.
      propType.any는 어떤 타입이든 상관없이 허용한다라는 의미이다.
      이러한 타입체크를 통해 컴포넌트에 전달되는 props의 타입을 미리 정의하여, 예기치 에러가 발생하는것을 막을수 있다.*/
        visits: PropTypes.any,
        performance: PropTypes.any,
        server: PropTypes.any,
        revenue: PropTypes.any,
        mainChart: PropTypes.any,
        isReceiving: PropTypes.bool, //true나 false값만 허용한다는 뜻
        dispatch: PropTypes.func.isRequired, //함수 타입만 허용한다는 뜻
        
    };

    static defaultProps = { //해당 컴포넌트에서 정의된 props값을 전달 받지 않은 경우, 기본값을 지정해줄 수 있는데 지금 같은경우에는 빈 객체를 기본값으로 사용되도록 지정하고 있음
        visits: {},
        performance: {},
        server: {},
        revenue: [],
        mainChart: [],
        isReceiving: false
    };

    donut = () => {
      let series = [
        {
          name: 'Revenue',
          data: this.props.revenue.map(s => {
            return {
              name: s.label,
              y: s.data
            }
          })
        }
      ];
      return {
        chart: {
          type: 'pie',
          height: 120,
          backgroundColor: 'rgba(0,0,0,0)',
        },
        credits: {
          enabled: false
        },
        title: false,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false
            },
            borderWidth: 0,
            showInLegend: true,
            innerSize: 60,
            size: 100,
            states: {
              hover: {
                halo: {
                  size: 1
                }
              }
            }
          }
        },
        colors: ['#FD5F00', '#005792', '#1A86D0'],
        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical',
          itemStyle: {
            color: '#788898',
            fontWeight: 400,
          },
          itemHoverStyle: {
            color: "#cccccc"
          },
          itemMarginBottom: 5,
          symbolRadius: 0
        },
        exporting: {
          enabled: false
        },
        series
      };
    }


    componentDidMount() { //랜더링을 시키겠다 해당 함수 호출을 
        this.props.dispatch(receiveDataRequest());//함수호출
    }

  render() {
    const { visits, isReceiving, performance, server, mainChart } = this.props;
    return (
      <div>
        <h1 className="page-title">Analytics</h1>
        <div className={s.sidesWrapper}>
          <div className={s.analyticsSide}>
            <Row>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    className="mb-0 h-100"
                    close
                    bodyClass="mt-lg"
                    fetchingData={isReceiving}
                    title={<h5>Visits Today</h5>}
                  >
                      <div className="d-flex justify-content-between align-items-center mb h3">
                          <h2 style={{fontSize: '2.1rem'}}>{visits.count}</h2>
                          <i className="la la-arrow-right text-success rotate-315"/>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between">
                          <div className={cx('mt')}>
                              <h6>+{visits.logins}</h6>
                              <p className="text-muted mb-0 mr">
                                  <small>Logins</small>
                              </p>
                          </div>
                          <div className={cx('mt')}>
                              <h6>{visits.sign_out_pct}%</h6>
                              <p className="text-muted mb-0">
                                  <small>Sign Out</small> 
                              </p>
                          </div>
                          <div className={cx('mt')}>
                              <h6>{visits.rate_pct}%</h6>
                              <p className="text-muted mb-0 mr">
                                  <small>Rate</small>
                              </p>
                          </div>
                      </div>
                  </Widget>
                </div>
              </Col>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    bodyClass="mt"
                    close
                    className="mb-0 h-100"
                    fetchingData={isReceiving}
                    title={<h5>Revenue Breakdown</h5>}
                  >
                    <HighchartsReact options={this.donut()} />
                  </Widget>
                </div>
              </Col>

              
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    bodyClass="mt"
                    close
                    className="mb-0 h-100"
                    fetchingData={isReceiving}
                    // title={<h5>App Perfomance<y/h5>}
                    title={<h5>Period</h5>}
                  >
                    <p className="text-muted d-flex flex-wrap">
                      <small className="mr-lg d-flex align-items-center">
                        <span className="circle bg-danger text-success mr-xs" style={{ fontSize: '4px' }}>.</span>
                        <span style={{background:'orange' , color:'white'}}>This Period</span>
                      </small>
                      <small className="mr-lg d-flex align-items-center">
                        <span className="circle bg-primary text-warning mr-xs" style={{ fontSize: '4px' }}>.</span>
                        Last Period
                      </small>
                    </p>
                    <h6 className="fs-sm text-muted" style={{backgroundColor:'darkblue'}}>SDK</h6>
                      <Progress color="primary" className="progress-sm" style={{height: '3px', marginBottom: '5px'}}
                                value={performance.sdk?.this_period_pct}/>
                      <Progress color="danger" className="progress-sm" style={{height: '3px'}}
                                value={performance.sdk?.last_period_pct}/>
                    <h6 className="mt fs-sm text-muted">Integration</h6>
                      <Progress color="primary" className="progress-sm" style={{height: '3px', marginBottom: '5px'}}
                                value={performance.integration?.this_period_pct}/>
                      <Progress color="danger" className="progress-sm" style={{height: '3px'}}
                                value={performance.integration?.last_period_pct}/>
                  </Widget>
                </div>
              </Col>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    bodyClass="mt-lg"
                    close
                    className="mb-0 h-100"
                    fetchingData={isReceiving}
                    title={<h5>Server Overview</h5>}
                  >
                    <div className="d-flex justify-content-between mb-sm">
                      <p className="width-150"><small>{server[1]?.pct}% <span style={{ color: '#a3aeb7' }}>/</span> {server[1]?.temp}°С <span style={{ color: '#a3aeb7' }}>/</span> {server[1]?.frequency} Ghz</small></p>
                      <div style={{width: "calc(100% - 150px)"}}>
                        <Trend 
                          gradient={['#FD5F00']}
                          height={30}
                          smooth
                          strokeWidth="4"
                          data={mock.randomData.first}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-sm">
                      <p className="width-150"><small>{server[2]?.pct}% <span style={{ color: '#a3aeb7' }}>/</span> {server[2]?.temp}°С <span style={{ color: '#a3aeb7' }}>/</span> {server[2]?.frequency} Ghz</small></p>
                      <div style={{width: "calc(100% - 150px)"}}>
                        <Trend 
                          gradient={['#005792']}
                          height={30}
                          smooth
                          strokeWidth="4"
                          data={mock.randomData.second}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-sm">
                      <p className="width-150"><small>{server[2]?.pct}% <span style={{ color: '#a3aeb7' }}>/</span> {server[2]?.temp}°С <span style={{ color: '#a3aeb7' }}>/</span> {server[2]?.frequency} Ghz</small></p>
                      <div style={{width: "calc(100% - 150px)"}}>
                        <Trend 
                          gradient={['#1A86D0']}
                          height={30}
                          smooth
                          strokeWidth="4"
                          data={mock.randomData.third}
                        />
                      </div>
                    </div>
                  </Widget>
                </div>
              </Col>
              <Col lg={12} xs={12}>
                  <MainChart data={mainChart} isReceiving={isReceiving} />
              </Col>
              <Col xs={12} lg={6} xl={4}>
                <BigStat {...mock.bigStat[0]} />
              </Col>
              <Col xs={12} lg={6} xl={4}>
                <BigStat {...mock.bigStat[1]} />
              </Col>
              <Col xs={12} lg={6} xl={4}>
                <BigStat {...mock.bigStat[2]} />
              </Col>
              {/* !!!!!테스트!!!!!! */}
              <Col xs={12} lg={6} xl={4}>
                <BigStat {...mock.bigStat[3]}/>
              </Col>
              <Col xs={12} className="mb-lg">
                <Widget
                  className="pb-0"
                  bodyClass={`mt p-0`}
                  title={<h4> Support <strong>Requests</strong></h4>}
                  close
                >
                  <TableContainer data={mock.table} />
                </Widget>
              </Col>
            </Row>
          </div>
          <div className={s.analyticsSide}>
            <Row>
              <Col xs={12} md={6} xl={12} className={s.lastSideElement}>
                <Widget className="mb-xlg pt-0" bodyClass="mt-0">
                  <Calendar />
                </Widget>
              </Col>
              <Col xs={12} md={6} xl={12} className={s.lastSideElement}>
                <TaskContainer data={mock.tasks} />
              </Col>
              <Col xs={12} md={6} xl={12} className={s.lastSideElement}>
                <Widget
                  className="widget"
                  bodyClass={cx(s.notifications, 'w-100 mt-lg')}
                  title={
                    <h4>Notifications <span className="badge badge-pill badge-primary fw-normal pull-right mt-xs">{mock.notifications.length}</span></h4>
                  }
                >
                  {mock.notifications.map(({ id, icon, color, content }) => (
                    <div className="d-flex align-items-start" key={id}>
                      <i className={`la la-${icon} mr text-${color}`} />
                      <p
                        className={cx({ 'mb-0': id === mock.notifications.length - 1 })}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </div>
                  ))}
                </Widget>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  // console.log("mapStateToProps",mapStateToProps);
  
    return {
        visits: state.analytics.visits,
        isReceiving: state.analytics.isReceiving,
        performance: state.analytics.performance,
        revenue: state.analytics.revenue,
        server: state.analytics.server,
        mainChart: state.analytics.mainChart,
    }
}

export default connect(mapStateToProps)(Analytics);
//mapstatetoprops 는 리덕스 상태를 컴포넌트의 props로 매핑해주는 역할을 하는데 컴포넌트에서 필요한 상태 값을 props로 전달받을 수 있게 한다.
//mapstatetoprops 함수는 첫번째 인자로 현재 리덕스 스토어의 상태를 받고 두번째 인자로는 해당 컴포넌트의 props를 받는다. connet함수와 함께 사용하여 리덕스와 연결되도록 한다.


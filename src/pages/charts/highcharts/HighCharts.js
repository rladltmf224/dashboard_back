import React, { PureComponent } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import variablePie from 'highcharts/modules/variable-pie';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';
import highcharts3d from 'highcharts/highcharts-3d';
import sunburst from 'highcharts/modules/sunburst';
import vector from 'highcharts/modules/vector';
import wordcloud from 'highcharts/modules/wordcloud';
import Widget from '../../../components/Widget';
import chartsData from './mock';

variablePie(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
accessibility(Highcharts);
highcharts3d(Highcharts);
sunburst(Highcharts);
vector(Highcharts);
wordcloud(Highcharts);

class HighCharts extends PureComponent {

  state = {
    cd: chartsData
  }
  //cd라고 하겠다.chartData를,

  render() {
    
    const { cd } = this.state;
    //그걸 받아쓰겠다 cd라는 객체로,

    return (
      //받아온 데이터가 chartData니깐 사용할때 객체로 선언해놓은 cd.필요한 내용으로
      <div>
        <h1 className="page-title">Visual - <span className="fw-semi-bold">Highcharts</span></h1>
        <p>For more information please read full <a href="https://github.com/highcharts/highcharts-vue">documentation</a></p>
        <Row>
          <Col lg={12} xs={12}>
            <Widget
              title={<h5>Highcharts <span className="fw-semi-bold">Line Chart</span></h5>}
              close collapse
            >
              <HighchartsReact options={cd.line} /> 
            </Widget>
          </Col>
          <Col lg={6} xs={12}>
            <Widget
              title={<h5>Highcharts <span className="fw-semi-bold">Pie Chart</span></h5>}
              close collapse
            >
              <HighchartsReact options={cd.pie} />
            </Widget>
          </Col>
          <Col lg={6} xs={12}>
            <Widget
              title={<h5>Highcharts <span className="fw-semi-bold">Column 3D Chart</span></h5>}
              close collapse
            >
              <HighchartsReact options={cd.column3D} />
            </Widget>
          </Col>
          <Col lg={5} xs={12}>
            <Row>
              <Col lg={12} xs={12}>
                <Widget
                  title={<h5>Highcharts <span className="fw-semi-bold">Vector Chart</span></h5>}
                  close collapse
                  >
                    <HighchartsReact options={cd.vector} />
                  </Widget>
              </Col>
              <Col lg={12} xs={12}>
                <Widget
                  title={<h5>Highcharts <span className="fw-semi-bold">Sunburst Chart</span></h5>}
                  close collapse
                  >
                    <HighchartsReact options={cd.wordCloud} />
                </Widget>
              </Col>
            </Row>
          </Col>
          <Col lg={7} xs={12}>
            <Widget
              title={<h5>Highcharts <span className="fw-semi-bold">Sunburst Chart</span></h5>}
              close collapse
              >
                <HighchartsReact options={cd.sunburst} />
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HighCharts;

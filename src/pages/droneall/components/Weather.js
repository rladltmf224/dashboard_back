import React from 'react';
//box style
import Widget from '../../../components/Widget/Widget';
//reactbootstrap
import {
  Row,
  Col,
} from 'reactstrap';

import Skycon from '../../../components/Skycon/Skycon';

class Weather extends React.Component{
    
    render(){

        return(
   
          <Col style={{height:"300px", paddingTop: "80px"}}>
            <Widget className="p-0 text-center">
              <Row className="m-0">
                <div className="col-5 bg-danger btlr bblr">
                  <Skycon className="mt-3" icon="CLEAR_DAY" color="white"/>
                  <h6 className="text-white fw-normal m-t-1">FRIDAY</h6>
                </div>
                <div className="col-7">
                  <p className="value0 text-danger mt-n-xs mr-n-xs">
                    33&deg;
                  </p>
                  <p className="mt-n-sm m-b-0 fw-normal fs-sm text-muted">WINDY</p>
                  <div className="row mt-n-xs mb-xs">
                    <div className="col-6 p-0">
                      <Skycon icon="WIND" color="#999" width="20" height="20" />
                      <div className="d-inline-block ml-1">
                        <p className="value6">4</p>
                        <p className="fs-sm m-0 mt-n-xs text-muted fw-normal">MPS</p>
                      </div>
                    </div>
                    <div className="col-6 p-0">
                      <Skycon icon="RAIN" color="#999" width="20" height="20" />
                      <div className="d-inline-block ml-1">
                        <p className="value6">52</p>
                        <p className="fs-sm m-0 mt-n-xs text-muted fw-normal">MM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </Widget>
          </Col>
        )
    }          
}

export default Weather



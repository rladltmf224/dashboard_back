import React from "react";

import {TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';



class DroneTab extends React.Component {
  
    state = {
      defaultTabsTabId: '1',
      accordion: [false, false, false],
    };
  
    changeTab(field, id) {
      this.setState({
        [field]: id,
      })
    }

  
    render() {
      
      //부모컴포넌트에서 자식 컴포넌트로 visits라는 이름의 props를 전달하는 것을 전제로 작성된 코드
      //여기서 visits 로 선언을 하면 안되는거고 새로운 이름으로 가지고 오면 그 이름으로 선언을 해줘야지
      
      const { flightinfodata } = this.props;

      if (flightinfodata.length === 0) {
        return <div>No flight information available</div>;
      }

      return (

        
       
        <div>
          
            <h4 className="mt-lg" style={{textAlign:"center" , fontSize:"1.5rem"}}>DRONE_ALPHA INFORMATION</h4>

            <Nav tabs className="bg-transparent mt">
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.defaultTabsTabId === '1' })}
                  onClick={() => {
                    this.changeTab('defaultTabsTabId', '1');
                  }}
                >
                  <span style={{fontSize:"1.25rem"}}>ID</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.defaultTabsTabId === '2' })}
                  onClick={() => {
                    this.changeTab('defaultTabsTabId', '2');
                  }}
                >
                  <span style={{fontSize:"1.25rem"}}>Vehicle info</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.defaultTabsTabId === '3' })}
                  onClick={() => {
                    this.changeTab('defaultTabsTabId', '3');
                  }}
                >
                  <span style={{fontSize:"1.25rem"}}>Flight info</span>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent className="mb-xlg" activeTab={this.state.defaultTabsTabId}  style={{overflowY:"scroll", height: "250px", padding:"10px 0"}}>

              <TabPane tabId="1" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                <p style={{fontWeight:"bold"}}>Mission ID</p>
                <p>{this.props.flightinfodata[0].missionId}</p>

              </TabPane>
                
              <TabPane tabId="1" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                <p style={{fontWeight:"bold"}}>Work Plan ID</p>
                <p>{this.props.flightinfodata[0].workPlanId}</p>
              </TabPane>

              <TabPane tabId="1" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                <p style={{fontWeight:"bold"}}>MAV System ID</p>
                <p>{this.props.flightinfodata[0].mavSystemId}</p>
              </TabPane>

              <TabPane tabId="2" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                <p style={{fontWeight:"bold"}}>Purchase Data</p>
                <p>{this.props.flightinfodata[0].purchaseDate}</p>
              </TabPane>

              <TabPane tabId="2" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                <p style={{fontWeight:"bold"}}>Serial NO.</p>
                <p>{this.props.flightinfodata[0].serialNo}</p>
              </TabPane>

              <TabPane tabId="2" style={{padding:"0", textAlign:"center",marginBottom:"30px"}}>
                <p style={{fontWeight:"bold"}}>Vehicle type name</p>
                <p>{this.props.flightinfodata[0].vehicleTypeName}</p>
              </TabPane>

              <TabPane tabId="2" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                <p style={{fontWeight:"bold"}}>Max speed</p>
                <p>{this.props.flightinfodata[0].maxSpeed}</p>
              </TabPane>

              <TabPane tabId="2" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                <p style={{fontWeight:"bold"}}>Max Consumption</p>
                <p>{this.props.flightinfodata[0].maxConsumption}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Mode</p>
                  <p>{this.props.flightinfodata[0].mode}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Vario</p>
                  <p>{this.props.flightinfodata[0].vario}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Pressure</p>
                  <p>{this.props.flightinfodata[0].pressure}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>IP</p>
                  <p>{this.props.flightinfodata[0].ip}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Link</p>
                  <p>{this.props.flightinfodata[0].link}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Target Port</p>
                  <p>{this.props.flightinfodata[0].targetPort}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Local Port</p>
                  <p>{this.props.flightinfodata[0].localPort}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}> 
                  <p style={{fontWeight:"bold"}}>Latitude</p>
                  <p>{this.props.flightinfodata[0].latitude}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Longtitude</p>
                  <p>{this.props.flightinfodata[0].longitude}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Firmware</p>
                  <p>{this.props.flightinfodata[0].firmware}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Type</p>
                  <p>{this.props.flightinfodata[0].type}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Protocol</p>
                  <p>{this.props.flightinfodata[0].protocol}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Gps</p>
                  <p>{this.props.flightinfodata[0].gps}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Sat Count</p>
                  <p>{this.props.flightinfodata[0].satCount}</p>
              </TabPane>

              <TabPane tabId="3" style={{padding:"0", textAlign:"center", marginBottom:"30px"}}>
                  <p style={{fontWeight:"bold"}}>Hdop</p>
                  <p>{this.props.flightinfodata[0].hdop}</p>
              </TabPane>

            </TabContent>
        </div>

      )
    }
  }


export default DroneTab;
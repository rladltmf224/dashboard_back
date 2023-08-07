import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { receiveDataRequest } from "../../actions/mainservice";
import Service from "./components/Service";
import Station from "./components/Station";
import DroneInfo from "./components/DroneInfo";
import CommunicationStatus from "./components/CommunicationStatus";
import Loader from "./loading";
class MainService extends React.Component {
  static propTypes = {
    safeReturn: PropTypes.array,
    crimePatrol: PropTypes.array,
    city: PropTypes.array,
    radiation: PropTypes.array,
    farm: PropTypes.array,
    crimeCall: PropTypes.array,
    mountInfos: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    safeReturn: [],
    crimePatrol: [],
    city: [],
    radiation: [],
    farm: [],
    crimeCall: [],
    mountInfos: [],
  };

  componentDidMount() {
    this.props.dispatch(receiveDataRequest());
  }

  test() {
    const oldData = this.props;

    const newData = [
      {
        eventCallType: oldData.safeReturn[0]?.eventCallType,
        isCompleted: oldData.safeReturn[0]?.isCompleted,
        requestService: oldData.safeReturn[0]?.requestService,
        eventUserName: oldData.safeReturn[0]?.eventUserName,
        requestDt: oldData.safeReturn[0]?.requestDt,
        eventMessage: oldData.safeReturn[0]?.eventMessage,
        eventUserPhoneNumber: oldData.safeReturn[0]?.eventUserPhoneNumber,
        droneIsConnected: oldData.safeReturn[0]?.droneIsConnected,
        droneId: oldData.safeReturn[0]?.droneId,
        stationID: oldData.safeReturn[0]?.stationID,
        stationIsConnected: oldData.safeReturn[0]?.stationIsConnected,
        stationDoorInfo: oldData.safeReturn[0]?.stationDoorInfo,
        droneStatus: oldData.safeReturn[0]?.droneStatus,
        alt: oldData.safeReturn[0]?.alt,
        droneSpeed: oldData.safeReturn[0]?.droneSpeed,
        batteryRemaining: oldData.safeReturn[0]?.batteryRemaining,
      },
      {
        eventCallType: oldData.crimeCall[0]?.eventCallType,
        isCompleted: oldData.crimeCall[0]?.isCompleted,
        requestService: oldData.crimeCall[0]?.requestService,
        eventUserName: oldData.crimeCall[0]?.eventUserName,
        requestDt: oldData.crimeCall[0]?.requestDt,
        eventMessage: oldData.crimeCall[0]?.eventMessage,
        eventUserPhoneNumber: oldData.crimeCall[0]?.eventUserPhoneNumber,
        droneIsConnected: oldData.crimeCall[0]?.droneIsConnected,
        droneId: oldData.crimeCall[0]?.droneId,
        stationID: oldData.crimeCall[0]?.stationID,
        stationIsConnected: oldData.crimeCall[0]?.stationIsConnected,
        stationDoorInfo: oldData.crimeCall[0]?.stationDoorInfo,
        droneStatus: oldData.crimeCall[0]?.droneStatus,
        alt: oldData.crimeCall[0]?.alt,
        droneSpeed: oldData.crimeCall[0]?.droneSpeed,
        batteryRemaining: oldData.crimeCall[0]?.batteryRemaining,
      },
      {
        eventCallType: oldData.crimePatrol[0]?.eventCallType,
        isCompleted: oldData.crimePatrol[0]?.isCompleted,
        requestService: oldData.crimePatrol[0]?.requestService,
        eventUserName: oldData.crimePatrol[0]?.eventUserName,
        requestDt: oldData.crimePatrol[0]?.requestDt,
        eventMessage: oldData.crimePatrol[0]?.eventMessage,
        eventUserPhoneNumber: oldData.crimePatrol[0]?.eventUserPhoneNumber,
        droneIsConnected: oldData.crimePatrol[0]?.droneIsConnected,
        droneId: oldData.crimePatrol[0]?.droneId,
        stationID: oldData.crimePatrol[0]?.stationID,
        stationIsConnected: oldData.crimePatrol[0]?.stationIsConnected,
        stationDoorInfo: oldData.crimePatrol[0]?.stationDoorInfo,
        droneStatus: oldData.crimePatrol[0]?.droneStatus,
        alt: oldData.crimePatrol[0]?.alt,
        droneSpeed: oldData.crimePatrol[0]?.droneSpeed,
        batteryRemaining: oldData.crimePatrol[0]?.batteryRemaining,
      },
      {
        eventCallType: oldData.city[0]?.eventCallType,
        isCompleted: oldData.city[0]?.isCompleted,
        requestService: oldData.city[0]?.requestService,
        eventUserName: oldData.city[0]?.eventUserName,
        requestDt: oldData.city[0]?.requestDt,
        eventMessage: oldData.city[0]?.eventMessage,
        eventUserPhoneNumber: oldData.city[0]?.eventUserPhoneNumber,
        droneIsConnected: oldData.city[0]?.droneIsConnected,
        droneId: oldData.city[0]?.droneId,
        stationID: oldData.city[0]?.stationID,
        stationIsConnected: oldData.city[0]?.stationIsConnected,
        stationDoorInfo: oldData.city[0]?.stationDoorInfo,
        droneStatus: oldData.city[0]?.droneStatus,
        alt: oldData.city[0]?.alt,
        droneSpeed: oldData.city[0]?.droneSpeed,
        batteryRemaining: oldData.city[0]?.batteryRemaining,
      },
      {
        eventCallType: oldData.farm[0]?.eventCallType,
        isCompleted: oldData.farm[0]?.isCompleted,
        requestService: oldData.farm[0]?.requestService,
        eventUserName: oldData.farm[0]?.eventUserName,
        requestDt: oldData.farm[0]?.requestDt,
        eventMessage: oldData.farm[0]?.eventMessage,
        eventUserPhoneNumber: oldData.farm[0]?.eventUserPhoneNumber,
        droneIsConnected: oldData.farm[0]?.droneIsConnected,
        droneId: oldData.farm[0]?.droneId,
        stationID: oldData.farm[0]?.stationID,
        stationIsConnected: oldData.farm[0]?.stationIsConnected,
        stationDoorInfo: oldData.farm[0]?.stationDoorInfo,
        droneStatus: oldData.farm[0]?.droneStatus,
        alt: oldData.farm[0]?.alt,
        droneSpeed: oldData.farm[0]?.droneSpeed,
        batteryRemaining: oldData.farm[0]?.batteryRemaining,
      },
      {
        eventCallType: oldData.mountInfos[0]?.eventCallType,
        isCompleted: oldData.mountInfos[0]?.isCompleted,
        requestService: oldData.mountInfos[0]?.requestService,
        eventUserName: oldData.mountInfos[0]?.eventUserName,
        requestDt: oldData.mountInfos[0]?.requestDt,
        eventMessage: oldData.mountInfos[0]?.eventMessage,
        eventUserPhoneNumber: oldData.mountInfos[0]?.eventUserPhoneNumber,
        droneIsConnected: oldData.mountInfos[0]?.droneIsConnected,
        droneId: oldData.mountInfos[0]?.droneId,
        stationID: oldData.mountInfos[0]?.stationID,
        stationIsConnected: oldData.mountInfos[0]?.stationIsConnected,
        stationDoorInfo: oldData.mountInfos[0]?.stationDoorInfo,
        droneStatus: oldData.mountInfos[0]?.droneStatus,
        alt: oldData.mountInfos[0]?.alt,
        droneSpeed: oldData.mountInfos[0]?.droneSpeed,
        batteryRemaining: oldData.mountInfos[0]?.batteryRemaining,
        moreInfos: oldData.mountInfos,
      },
      {
        eventCallType: oldData.radiation[0]?.eventCallType,
        isCompleted: oldData.radiation[0]?.isCompleted,
        requestService: oldData.radiation[0]?.requestService,
        eventUserName: oldData.radiation[0]?.eventUserName,
        requestDt: oldData.radiation[0]?.requestDt,
        eventMessage: oldData.radiation[0]?.eventMessage,
        eventUserPhoneNumber: oldData.radiation[0]?.eventUserPhoneNumber,
        droneIsConnected: oldData.radiation[0]?.droneIsConnected,
        droneId: oldData.radiation[0]?.droneId,
        stationID: oldData.radiation[0]?.stationID,
        stationIsConnected: oldData.radiation[0]?.stationIsConnected,
        stationDoorInfo: oldData.radiation[0]?.stationDoorInfo,
        droneStatus: oldData.radiation[0]?.droneStatus,
        alt: oldData.radiation[0]?.alt,
        droneSpeed: oldData.radiation[0]?.droneSpeed,
        batteryRemaining: oldData.radiation[0]?.batteryRemaining,
      },
    ];
    console.log(newData, "sbsbsbsbsb");
  }
  render() {
    const {
      safeReturn,
      crimePatrol,
      city,
      radiation,
      farm,
      crimeCall,
      mountInfos,
    } = this.props;

    this.test();

    return (
      <table class="table table-sm ">
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <Service
                safeReturnService={safeReturn}
                crimeCallService={crimeCall}
                crimePatrolService={crimePatrol}
                cityService={city}
                radiationService={radiation}
                farmService={farm}
                mountInfosService={mountInfos}
              />
            </td>
            <td>
              <CommunicationStatus
                safeReturnService={safeReturn}
                crimeCallService={crimeCall}
                crimePatrolService={crimePatrol}
                cityService={city}
                radiationService={radiation}
                farmService={farm}
                mountInfosService={mountInfos}
              />
            </td>
            <td>
              <Station
                safeReturnService={safeReturn}
                crimeCallService={crimeCall}
                crimePatrolService={crimePatrol}
                cityService={city}
                radiationService={radiation}
                farmService={farm}
                mountInfosService={mountInfos}
              />
            </td>
            <td>
              <DroneInfo
                safeReturnService={safeReturn}
                crimeCallService={crimeCall}
                crimePatrolService={crimePatrol}
                cityService={city}
                radiationService={radiation}
                farmService={farm}
                mountInfosService={mountInfos}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    safeReturn: state.mainservice.safeReturn,
    crimePatrol: state.mainservice.crimePatrol,
    city: state.mainservice.city,
    radiation: state.mainservice.radiation,
    farm: state.mainservice.farm,
    crimeCall: state.mainservice.crimeCall,
    mountInfos: state.mainservice.mountInfos,
  };
}

export default connect(mapStateToProps)(MainService);

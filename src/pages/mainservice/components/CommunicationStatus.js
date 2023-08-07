import React from "react";
import { Row, Col, Table } from "reactstrap";

import Widget from "../../../components/Widget/Widget";
import s from "../CommunicationStatus.scss";

class CommunicationStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          connected_info: {
            station_id:
              this.props.mountInfosService.find((item) => item.stationID === 1)
                ?.stationID || "",
            station_connected:
              this.stationIsConnectedColor(
                this.props.mountInfosService.find(
                  (item) => item.stationID === 1
                )?.stationIsConnected
              ) || "",
            drone_id:
              this.props.mountInfosService.find((item) => item.droneId === 1)
                ?.droneId || "",
            drone_connected:
              this.droneIsConnectedColor(
                this.props.mountInfosService.find((item) => item.droneId === 1)
                  ?.droneIsConnected
              ) || "",
          },
        },
        {
          connected_info: {
            station_id:
              this.props.safeReturnService.find((item) => item.stationID === 4)
                ?.stationID || "",
            station_connected:
              this.stationIsConnectedColor(
                this.props.safeReturnService.find(
                  (item) => item.stationID === 4
                )?.stationIsConnected
              ) || "",
            drone_id:
              this.props.safeReturnService.find((item) => item.droneId === 4)
                ?.droneId || "",
            drone_connected:
              this.droneIsConnectedColor(
                this.props.safeReturnService.find((item) => item.droneId === 4)
                  ?.droneIsConnected
              ) || "",
          },
        },
        {
          connected_info: {
            station_id:
              this.props.crimeCallService.find((item) => item.stationID === 5)
                ?.stationID || "",
            station_connected:
              this.stationIsConnectedColor(
                this.props.crimeCallService.find((item) => item.stationID === 5)
                  ?.stationIsConnected
              ) || "",
            drone_id:
              this.props.crimeCallService.find((item) => item.droneId === 5)
                ?.droneId || "",
            drone_connected:
              this.droneIsConnectedColor(
                this.props.crimeCallService.find((item) => item.droneId === 5)
                  ?.droneIsConnected
              ) || "",
          },
        },
        {
          connected_info: {
            station_id:
              this.props.crimePatrolService.find((item) => item.stationID === 6)
                ?.stationID || "",
            station_connected:
              this.stationIsConnectedColor(
                this.props.crimePatrolService.find(
                  (item) => item.stationID === 6
                )?.stationIsConnected
              ) || "",
            drone_id:
              this.props.crimePatrolService.find((item) => item.droneId === 19)
                ?.droneId || "",
            drone_connected:
              this.droneIsConnectedColor(
                this.props.crimePatrolService.find(
                  (item) => item.droneId === 19
                )?.droneIsConnected
              ) || "",
          },
        },
        {
          connected_info: {
            station_id:
              this.props.cityService.find((item) => item.stationID === 8)
                ?.stationID || "",
            station_connected:
              this.stationIsConnectedColor(
                this.props.cityService.find((item) => item.stationID === 8)
                  ?.stationIsConnected
              ) || "",
            drone_id:
              this.props.cityService.find((item) => item.droneId === 6)
                ?.droneId || "",
            drone_connected:
              this.droneIsConnectedColor(
                this.props.cityService.find((item) => item.droneId === 6)
                  ?.droneIsConnected
              ) || "",
          },
        },
        {
          connected_info: {
            station_id:
              this.props.radiationService.find((item) => item.stationID === 7)
                ?.stationID || "",
            station_connected:
              this.stationIsConnectedColor(
                this.props.radiationService.find((item) => item.stationID === 7)
                  ?.stationIsConnected
              ) || "",
            drone_id:
              this.props.radiationService.find((item) => item.droneId === 18)
                ?.droneId || "",
            drone_connected:
              this.droneIsConnectedColor(
                this.props.radiationService.find((item) => item.droneId === 18)
                  ?.droneIsConnected
              ) || "",
          },
        },
        {
          connected_info: {
            station_id:
              this.props.farmService.find((item) => item.stationID === 17)
                ?.stationID || "",
            station_connected:
              this.stationIsConnectedColor(
                this.props.farmService.find((item) => item.stationID === 17)
                  ?.stationIsConnected
              ) || "",
            drone_id:
              this.props.farmService.find((item) => item.droneId === 17)
                ?.droneId || "",
            drone_connected:
              this.droneIsConnectedColor(
                this.props.farmService.find((item) => item.droneId === 17)
                  ?.droneIsConnected
              ) || "",
          },
        },
      ],
    };
  }

  droneIsConnectedColor(droneIsConnected) {
    if (droneIsConnected === true) {
      return "btn-success";
    } else if (droneIsConnected === false) {
      return " btn-light";
    } else {
      return "btn-dark";
    }
  }

  stationIsConnectedColor(stationIsConnected) {
    if (stationIsConnected === true) {
      return "btn-success";
    } else if (stationIsConnected === false) {
      return " btn-light";
    } else {
      return "btn-dark";
    }
  }

  componentDidMount() {
    this.updateTableStyles();
    this.interval = setInterval(this.updateTableStyles, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTableStyles = () => {
    const {
      safeReturnService,
      crimeCallService,
      crimePatrolService,
      cityService,
      radiationService,
      farmService,
      mountInfosService,
    } = this.props;

    const updatedTableStyles = [];

    mountInfosService.forEach((info) => {
      updatedTableStyles.push({
        connected_info: {
          station_id: info.stationID,
          station_connected: info.stationIsConnected,
          drone_id: info.droneId,
          drone_connected: info.droneIsConnected,
        },
      });
    });

    safeReturnService.forEach((info) => {
      updatedTableStyles.push({
        connected_info: {
          station_id: info.stationID,
          station_connected: info.stationIsConnected,
          drone_id: info.droneId,
          drone_connected: info.droneIsConnected,
        },
      });
    });

    crimePatrolService.forEach((info) => {
      updatedTableStyles.push({
        connected_info: {
          station_id: info.stationID,
          station_connected: info.stationIsConnected,
          drone_id: info.droneId,
          drone_connected: info.droneIsConnected,
        },
      });
    });

    cityService.forEach((info) => {
      updatedTableStyles.push({
        connected_info: {
          station_id: info.stationID,
          station_connected: info.stationIsConnected,
          drone_id: info.droneId,
          drone_connected: info.droneIsConnected,
        },
      });
    });

    radiationService.forEach((info) => {
      updatedTableStyles.push({
        connected_info: {
          station_id: info.stationID,
          station_connected: info.stationIsConnected,
          drone_id: info.droneId,
          drone_connected: info.droneIsConnected,
        },
      });
    });

    farmService.forEach((info) => {
      updatedTableStyles.push({
        connected_info: {
          station_id: info.stationID,
          station_connected: info.stationIsConnected,
          drone_id: info.droneId,
          drone_connected: info.droneIsConnected,
        },
      });
    });

    crimeCallService.forEach((info) => {
      updatedTableStyles.push({
        connected_info: {
          station_id: info.stationID,
          station_connected: info.stationIsConnected,
          drone_id: info.droneId,
          drone_connected: info.droneIsConnected,
        },
      });
    });

    this.setState({ tableStyles: updatedTableStyles });
  };

  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col>
            <Widget close>
              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr className="fs-sm">
                      <th
                        className="hidden-sm-down"
                        style={{ fontSize: "1.0rem", borderBottom: "none" }}
                      >
                        드론상태/스테이션상태
                      </th>
                    </tr>
                  </thead>

                  <Table>
                    <tbody>
                      {this.state.tableStyles.map((row, index) => (
                        <tr
                          key={row.id}
                          style={{
                            height: index < 3 ? "50px" : "148.5px",
                            width: "200px",
                            marginTop: index < 3 ? "0px" : "40px", // 3번째 이후 div에만 margin-top 10px 적용
                          }}
                        >
                          <td style={{ margin: "0 auto" }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-around",
                                marginTop: index < 3 ? "0px" : "40px", // 3번째 이후 div에만 margin-top 10px 적용
                              }}
                            >
                              <button
                                type="button"
                                class={`btn   btn-circle  ${
                                  index > 2 ? "btn-lg" : "btn-md"
                                }     ${this.stationIsConnectedColor(
                                  row.connected_info.station_connected
                                )}`}
                              >
                                {row.connected_info.drone_id}
                              </button>
                            </div>
                          </td>

                          <td style={{ margin: "0 auto" }}>
                            <div
                              style={{
                                display: "flex",
                                marginTop: index < 3 ? "0px" : "40px", // 3번째 이후 div에만 margin-top 10px 적용

                                justifyContent: "space-around",
                              }}
                            >
                              <div class="d-grid gap-2 d-md-block">
                                <button
                                  type="button"
                                  class={`btn   btn-circle ${
                                    index > 2 ? "btn-lg" : "btn-md"
                                  }     ${this.droneIsConnectedColor(
                                    row.connected_info.drone_connected
                                  )}`}
                                >
                                  {row.connected_info.station_id}
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Table>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommunicationStatus;

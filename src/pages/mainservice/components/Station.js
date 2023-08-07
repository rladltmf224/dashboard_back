import React from "react";
import { Row, Col, Table } from "reactstrap";
import Button from "react-bootstrap/Button";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Widget from "../../../components/Widget/Widget";
import s from "../Station.scss";
import { Link } from "react-router-dom"; //link로 하는방법이 있고,
import { AiFillQuestionCircle } from "react-icons/ai";
import StationPopover from "./popover/StationPopover";

//station id로 찾기

class Station extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          station_info: {
            station_id:
              this.props.mountInfosService.find((item) => item.stationID == 1)
                ?.stationID || "",
            station_door:
              this.stationColor(
                this.props.mountInfosService.find(
                  (item) => item.stationID === 1
                )?.stationDoorInfo
              ) || "",
          },
        },

        {
          station_info: {
            station_id:
              this.props.safeReturnService.find((item) => item.stationID == 4)
                ?.stationID || "",
            station_door:
              this.stationColor(
                this.props.safeReturnService.find((item) => item.stationID == 4)
                  ?.stationDoorInfo
              ) || "",
          },
        },
        {
          station_info: {
            station_id:
              this.props.crimeCallService.find((item) => item.stationID == 5)
                ?.stationID || "",
            station_door:
              this.stationColor(
                this.props.crimeCallService.find((item) => item.stationID == 5)
                  ?.stationDoorInfo
              ) || "",
          },
        },
        {
          station_info: {
            station_id:
              this.props.crimePatrolService.find((item) => item.stationID == 19)
                ?.stationID || "",
            station_door:
              this.stationColor(
                this.props.crimePatrolService.find(
                  (item) => item.stationID == 19
                )?.stationDoorInfo
              ) || "",
          },
        },
        {
          station_info: {
            station_id:
              this.props.cityService.find((item) => item.stationID == 6)
                ?.stationID || "",
            station_door:
              this.stationColor(
                this.props.cityService.find((item) => item.stationID == 6)
                  ?.stationDoorInfo
              ) || "",
          },
        },
        {
          station_info: {
            station_id:
              this.props.radiationService.find((item) => item.stationID == 7)
                ?.stationID || "",
            station_door:
              this.stationColor(
                this.props.radiationService.find((item) => item.stationID == 7)
                  ?.stationDoorInfo
              ) || "",
          },
        },
        {
          station_info: {
            station_id:
              this.props.farmService.find((item) => item.stationID == 17)
                ?.stationID || "",
            station_door:
              this.stationColor(
                this.props.farmService.find((item) => item.stationID == 17)
                  ?.stationDoorInfo
              ) || "",
          },
        },
      ],
    };
  }

  stationColor(stationDoorInfo) {
    if (stationDoorInfo === "도어 닫힘") {
      return "btn-dark";
    } else if (stationDoorInfo === "도어 열림") {
      return "btn-primary";
    } else if (stationDoorInfo === "도어 열림동작") {
      return "btn-warning";
    } else if (stationDoorInfo === "도어 닫힘동작") {
      return "btn-info";
    } else if (stationDoorInfo === "비상 정지시행") {
      return "btn-danger";
    } else {
      return "btn-light";
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
        station_info: {
          station_id: info.stationID,
          station_door: info.stationDoorInfo,
        },
      });
    });

    safeReturnService.forEach((info) => {
      updatedTableStyles.push({
        station_info: {
          station_id: info.stationID,
          station_door: info.stationDoorInfo,
        },
      });
    });

    crimePatrolService.forEach((info) => {
      updatedTableStyles.push({
        station_info: {
          station_id: info.stationID,
          station_door: info.stationDoorInfo,
        },
      });
    });

    cityService.forEach((info) => {
      updatedTableStyles.push({
        station_info: {
          station_id: info.stationID,
          station_door: info.stationDoorInfo,
        },
      });
    });

    radiationService.forEach((info) => {
      updatedTableStyles.push({
        station_info: {
          station_id: info.stationID,
          station_door: info.stationDoorInfo,
        },
      });
    });

    farmService.forEach((info) => {
      updatedTableStyles.push({
        station_info: {
          station_id: info.stationID,
          station_door: info.stationDoorInfo,
        },
      });
    });

    crimeCallService.forEach((info) => {
      updatedTableStyles.push({
        station_info: {
          station_id: info.stationID,
          station_door: info.stationDoorInfo,
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
                        style={{
                          fontSize: "1.0rem",
                          borderBottom: "none",
                        }}
                      >
                        스테이션상태&nbsp;
                        <OverlayTrigger
                          trigger="hover"
                          placement="bottom"
                          overlay={
                            // 물음표 아이콘을 mouseover하면 popover컴포넌트를 불러온다.
                            <Popover>
                              <Popover.Title as="h3">상세단계</Popover.Title>
                              <Popover.Content>
                                <StationPopover></StationPopover>
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <AiFillQuestionCircle />
                        </OverlayTrigger>{" "}
                      </th>
                    </tr>
                  </thead>

                  <Table>
                    <tbody>
                      {this.state.tableStyles.map((row, index) => (
                        <tr
                          key={row.id}
                          style={{ height: index < 3 ? "50px" : "148.5px" }}
                        >
                          <td style={{ textAlign: "center" }}>
                            <div
                              style={{
                                paddingTop: "0px",
                                display: "flex",
                                alignItems: "center", // 세로 가운데 정렬
                                justifyContent: "center", // 가로 가운데 정렬
                              }}
                            >
                              <button
                                style={{
                                  marginTop: index < 3 ? "0px" : "45px",
                                }}
                                type="button"
                                className={`btn btn-sm btn-block  ${this.stationColor(
                                  row.station_info.station_door
                                )}`}
                              >
                                <span
                                  className="badge badge-light"
                                  style={{ marginRight: "20px" }}
                                >
                                  {row.station_info.station_id}
                                </span>
                                {row.station_info.station_door}
                              </button>
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

export default Station;

import React from "react";
import { Row, Col, Table } from "reactstrap";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Widget from "../../../components/Widget/Widget";
import s from "../DroneInfo.scss";
import { OverlayTrigger, Popover, Tab } from "react-bootstrap";
import DroneInfoPopover from "./popover/DroneInfoPopover";
import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import Modal from "react-modal";

import { Link } from "react-router-dom";
import { color } from "highcharts";
class DroneInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableStyles: [
        {
          drone_info: {
            drone_id:
              this.props.mountInfosService.find((item) => item.droneId === 1)
                ?.droneId || "",
            drone_alt:
              this.props.mountInfosService.find((item) => item.droneId === 1)
                ?.alt || "",
            drone_status:
              this.dronestatusColor(
                this.props.mountInfosService.find((item) => item.droneId === 1)
                  ?.droneStatus
              ) || "",
            // drone_mode : this.modeColor(this.props.mountInfosService.find(item => item.droneId === 1)?.droneMode) || "",
            drone_speed:
              this.props.mountInfosService.find((item) => item.droneId === 1)
                ?.droneSpeed || "",
            drone_batteryRemaining:
              this.props.mountInfosService.find((item) => item.droneId === 1)
                ?.batteryRemaining || "",
          },
        },
        {
          drone_info: {
            drone_id:
              this.props.safeReturnService.find((item) => item.droneId === 4)
                ?.droneId || "",
            drone_alt:
              this.props.safeReturnService.find((item) => item.droneId === 4)
                ?.alt || "",
            drone_status:
              this.dronestatusColor(
                this.props.safeReturnService.find((item) => item.droneId === 4)
                  ?.droneStatus
              ) || "",
            drone_speed:
              this.props.safeReturnService.find((item) => item.droneId === 4)
                ?.droneSpeed || "",
            drone_batteryRemaining:
              this.props.safeReturnService.find((item) => item.droneId === 4)
                ?.batteryRemaining || "",
          },
        },
        {
          drone_info: {
            drone_id:
              this.props.crimeCallService.find((item) => item.droneId === 5)
                ?.droneId || "",
            drone_alt:
              this.props.crimeCallService.find((item) => item.droneId === 5)
                ?.alt || "",
            drone_status:
              this.dronestatusColor(
                this.props.crimeCallService.find((item) => item.droneId === 5)
                  ?.droneStatus
              ) || "",
            drone_speed:
              this.props.crimeCallService.find((item) => item.droneId === 5)
                ?.droneSpeed || "",
            drone_batteryRemaining:
              this.props.crimeCallService.find((item) => item.droneId === 5)
                ?.batteryRemaining || "",
          },
        },
        {
          drone_info: {
            drone_id:
              this.props.crimePatrolService.find((item) => item.droneId === 19)
                ?.droneId || "",
            drone_alt:
              this.props.crimePatrolService.find((item) => item.droneId === 19)
                ?.alt || "",
            drone_status:
              this.dronestatusColor(
                this.props.crimePatrolService.find(
                  (item) => item.droneId === 19
                )?.droneStatus
              ) || "",
            drone_speed:
              this.props.crimePatrolService.find((item) => item.droneId === 19)
                ?.droneSpeed || "",
            drone_batteryRemaining:
              this.props.crimePatrolService.find((item) => item.droneId === 19)
                ?.batteryRemaining || "",
          },
        },
        {
          drone_info: {
            drone_id:
              this.props.cityService.find((item) => item.droneId === 6)
                ?.droneId || "",
            drone_alt:
              this.props.cityService.find((item) => item.droneId === 6)?.alt ||
              "",
            drone_status:
              this.dronestatusColor(
                this.props.cityService.find((item) => item.droneId === 6)
                  ?.droneStatus
              ) || "",
            drone_speed:
              this.props.cityService.find((item) => item.droneId === 6)
                ?.droneSpeed || "",
            drone_batteryRemaining:
              this.props.cityService.find((item) => item.droneId === 6)
                ?.batteryRemaining || "",
          },
        },
        {
          drone_info: {
            drone_id:
              this.props.radiationService.find((item) => item.droneId === 18)
                ?.droneId || "",
            drone_alt:
              this.props.radiationService.find((item) => item.droneId === 18)
                ?.alt || "",
            drone_status:
              this.dronestatusColor(
                this.props.radiationService.find((item) => item.droneId === 18)
                  ?.droneStatus
              ) || "",
            drone_speed:
              this.props.radiationService.find((item) => item.droneId === 18)
                ?.droneSpeed || "",
            drone_batteryRemaining:
              this.props.radiationService.find((item) => item.droneId === 18)
                ?.batteryRemaining || "",
          },
        },
        {
          drone_info: {
            drone_id:
              this.props.farmService.find((item) => item.droneId === 17)
                ?.droneId || "",
            drone_alt:
              this.props.farmService.find((item) => item.droneId === 17)?.alt ||
              "",
            drone_status:
              this.dronestatusColor(
                this.props.farmService.find((item) => item.droneId === 17)
                  ?.droneStatus
              ) || "",
            drone_speed:
              this.props.farmService.find((item) => item.droneId === 17)
                ?.droneSpeed || "",
            drone_batteryRemaining:
              this.props.farmService.find((item) => item.droneId === 17)
                ?.batteryRemaining || "",
          },
        },
      ],
    };
  }

  showInfoCollapse({ row }) {
    //1,2,3 번째 컬럼만 접었다펼치는기능
    const [open, setOpen] = useState(row.drone_info.drone_status !== "---");
    //만약 row.drone_info.drone_status의 값이 '---'이 아니면 , 즉 상태값이 있으면,
    //collapse를 펼친상태가 디폴트가된다.

    console.log("row", row.drone_info.drone_status);

    return (
      <>
        <Button
          size="sm"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className={open ? "btn-info" : "btn-light"}
        >
          {open ? "⬆" : "⬇"}
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <div style={{}}>
              <small style={{ marginLeft: "4px" }} className="hidden-sm-down">
                고도 :
                <span className="text-muted fw-semi-bold">
                  &nbsp; {row.drone_info.drone_alt}
                </span>
                m
              </small>
              <small className="hidden-sm-down">
                &nbsp;스피드 :
                <span className="text-muted fw-semi-bold">
                  &nbsp; {row.drone_info.drone_speed}
                </span>
                m/s
              </small>
              <small className="hidden-sm-down">
                &nbsp; 배터리 :
                {
                  <span
                    className=" fw-semi-bold"
                    style={{
                      fontWeight: "600",
                      color:
                        row.drone_info.drone_batteryRemaining >= 0 &&
                        row.drone_info.drone_batteryRemaining <= 30
                          ? "red"
                          : "green",
                    }}
                  >
                    &nbsp;
                    {row.drone_info.drone_batteryRemaining} %
                  </span>
                }
              </small>
            </div>
          </div>
        </Collapse>
      </>
    );
  }

  // dronestatusColor(droneStatus) {
  //   if (droneStatus === "ARM") {
  //     return 'green';
  //   } else if (droneStatus === "DISARMED") {
  //     return 'gray';
  //   } else if (droneStatus === "GUIDED"){
  //     return 'red'
  //   } else if (droneStatus === "MISSION START"){
  //     return 'blue'
  //   } else if (droneStatus === "RTL"){
  //     return 'yellow'
  //   } else if (droneStatus === "landing"){
  //     return 'blue'
  //   }
  // }

  dronestatusColor(droneStatus) {
    if (droneStatus === "암") {
      return "btn btn-sm btn-warning btn-square-md";
    } else if (droneStatus === "디스암") {
      return "btn btn-sm btn-dark btn-square-md";
    } else if (droneStatus === "이륙") {
      return "btn btn-sm btn-primary btn-square-md";
    } else if (droneStatus === "가이드") {
      return "btn btn-sm btn-danger btn-square-md";
    } else if (droneStatus === "미션 스타트") {
      return "btn btn-sm btn-primary btn-square-md";
    } else if (droneStatus === "복귀중") {
      return "btn btn-sm btn-warning btn-square-md";
    } else if (droneStatus === "착륙") {
      return "btn btn-sm btn-success btn-square-md";
    } else {
      return "btn btn-sm btn-light btn-square-md";
    }
  }

  checkDroneStatus(droneStatus) {
    //드론상태값이 null이 아니면 1,2,3번째 행의 collapse를 펼침.
    if (!droneStatus) {
      console.log("아 뭐라고 코드써야하냐.");
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
        drone_info: {
          drone_id: info.droneId,
          drone_alt: info.alt,
          drone_status: info.droneStatus,
          drone_speed: info.droneSpeed,
          drone_batteryRemaining: info.batteryRemaining,
        },
      });
    });

    safeReturnService.forEach((info) => {
      updatedTableStyles.push({
        drone_info: {
          drone_id: info.droneId,
          drone_alt: info.alt,
          drone_status: info.droneStatus,
          drone_speed: info.droneSpeed,
          drone_batteryRemaining: info.batteryRemaining,
        },
      });
    });

    crimePatrolService.forEach((info) => {
      updatedTableStyles.push({
        drone_info: {
          drone_id: info.droneId,
          drone_alt: info.alt,
          drone_status: info.droneStatus,
          drone_speed: info.droneSpeed,
          drone_batteryRemaining: info.batteryRemaining,
        },
      });
    });

    cityService.forEach((info) => {
      updatedTableStyles.push({
        drone_info: {
          drone_id: info.droneId,
          drone_alt: info.alt,
          drone_status: info.droneStatus,
          drone_speed: info.droneSpeed,
          drone_batteryRemaining: info.batteryRemaining,
        },
      });
    });

    radiationService.forEach((info) => {
      updatedTableStyles.push({
        drone_info: {
          drone_id: info.droneId,
          drone_alt: info.alt,
          drone_status: info.droneStatus,
          drone_speed: info.droneSpeed,
          drone_batteryRemaining: info.batteryRemaining,
        },
      });
    });

    farmService.forEach((info) => {
      updatedTableStyles.push({
        drone_info: {
          drone_id: info.droneId,
          drone_alt: info.alt,
          drone_status: info.droneStatus,
          drone_speed: info.droneSpeed,
          drone_batteryRemaining: info.batteryRemaining,
        },
      });
    });

    crimeCallService.forEach((info) => {
      updatedTableStyles.push({
        drone_info: {
          drone_id: info.droneId,
          drone_alt: info.alt,
          drone_status: info.droneStatus,
          drone_speed: info.droneSpeed,
          drone_batteryRemaining: info.batteryRemaining,
        },
      });
    });

    this.setState({ tableStyles: updatedTableStyles });
  };

  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col xs={12} md={12}>
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
                    드론상태&nbsp;
                    <OverlayTrigger
                      trigger="hover"
                      placement="bottom"
                      overlay={
                        // 물음표 아이콘에 mouseover하면 popover 컴포넌트를 불러온다.
                        <Popover>
                          <Popover.Title as="h3">상세단계</Popover.Title>
                          <Popover.Content>
                            <DroneInfoPopover></DroneInfoPopover>
                          </Popover.Content>
                        </Popover>
                      }
                    >
                      <AiFillQuestionCircle />
                    </OverlayTrigger>{" "}
                  </th>
                  <th
                    className="hidden-sm-down"
                    style={{
                      width: "200px",
                      fontSize: "1.0rem",
                      borderBottom: "none",
                    }}
                  >
                    드론정보&nbsp;
                  </th>
                </tr>
              </thead>

              <tbody>
                {this.state.tableStyles.map((row, index) => (
                  <tr
                    key={row.id}
                    style={{
                      height: index < 3 ? "50px" : "148.5px",
                      marginTop: index < 3 ? "0px" : "40px", // 3번째 이후 div에만 margin-top 10px 적용
                    }}
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
                          className={`btn btn-sm btn-block  ${this.dronestatusColor(
                            row.drone_info.drone_status
                          )}`}
                        >
                          <span
                            className="badge badge-light"
                            style={{ marginRight: "20px" }}
                          >
                            {row.drone_info.drone_id}
                          </span>
                          {row.drone_info.drone_status}
                        </button>
                      </div>
                    </td>

                    <Link
                      // to="/app/main/personalservice"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <td
                        style={{
                          justifyContent: "center", // 가로 가운데 정렬
                          alignItems: "center", // 세로 가운데 정렬
                        }}
                      >
                        {index < 3 && <this.showInfoCollapse row={row} />}

                        {index >= 3 && (
                          <div
                            style={{
                              marginTop: "48px",
                              display: "flex",
                              alignItems: "start",
                              flexDirection: "column",
                            }}
                          >
                            <small className="hidden-sm-down">
                              고도 :
                              <span className="text-muted fw-semi-bold">
                                &nbsp; {row.drone_info.drone_alt}
                              </span>
                              m
                            </small>
                            <small className="hidden-sm-down">
                              스피드 :
                              <span className="text-muted fw-semi-bold">
                                &nbsp; {row.drone_info.drone_speed}
                              </span>
                              m/s
                            </small>
                            <small className="hidden-sm-down">
                              배터리 :
                              <span
                                className=" fw-semi-bold"
                                style={{
                                  fontWeight: "600",
                                  color:
                                    row.drone_info.drone_batteryRemaining >=
                                      0 &&
                                    row.drone_info.drone_batteryRemaining <= 30
                                      ? "red"
                                      : "green",
                                }}
                              >
                                &nbsp;
                                {row.drone_info.drone_batteryRemaining} %
                              </span>
                            </small>
                          </div>
                        )}
                      </td>
                    </Link>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DroneInfo;

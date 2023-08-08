import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DroneInfoPopover from "./components/popover/DroneInfoPopover";
import StationPopover from "./components/popover/StationPopover";
import { receiveDataRequest } from "../../actions/mainservice";
import Service from "./components/Service";
import Station from "./components/Station";
import { AiFillQuestionCircle } from "react-icons/ai";
import DroneInfo from "./components/DroneInfo";
import CommunicationStatus from "./components/CommunicationStatus";
import Loader from "./Loading";
import { FaMountain, FaRadiation } from "react-icons/fa";
import { BiSolidCity } from "react-icons/bi";
import { LuWheat } from "react-icons/lu";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { PiPoliceCarBold } from "react-icons/pi";
import { FaAccusoft } from "react-icons/fa";
import "../mainservice/MainService.module.scss"; // SCSS 파일을 import
import { OverlayTrigger, Popover, Row, Col, Button } from "react-bootstrap";
import Loading from "./Loading";

class MainService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
    };
  }
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
  //   메서드
  componentDidMount() {
    this.props.dispatch(receiveDataRequest());
    setTimeout(() => {
      this.setState({ dataLoaded: true });
    }, 2000);
  }
  getBatteryColor(batteryRemaining) {
    if (batteryRemaining >= 0 && batteryRemaining <= 30) {
      return "red";
    } else if (batteryRemaining >= 31 && batteryRemaining <= 100) {
      return "green";
    } else {
      return "black";
    }
  }
  formatDate(dateString) {
    if (dateString) {
      const date = new Date(dateString);
      const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")} ${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
      return formattedDate;
    } else {
      return "";
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
  dronestatusColor(droneStatus) {
    switch (droneStatus) {
      case "암":
        return "btn btn-sm btn-warning btn-square-md";
      case "디스암":
        return "btn btn-sm btn-dark btn-square-md";
      case "이륙":
      case "미션 스타트":
        return "btn btn-sm btn-primary btn-square-md";
      case "가이드":
        return "btn btn-sm btn-danger btn-square-md";
      case "복귀중":
        return "btn btn-sm btn-warning btn-square-md";
      case "착륙":
        return "btn btn-sm btn-success btn-square-md";
      default:
        return "btn btn-sm btn-light btn-square-md";
    }
  }
  transformData() {
    console.log(
      "디스프롭스디스프롭스디스프롭스디스프롭스디스프롭스",
      this.props
    );
    const oldData = this.props; //계층구조 밑에 mainService라고.. 직접참조 x

    const dataSources = [
      "mountInfos",
      "safeReturn",
      "crimeCall",
      "crimePatrol",
      "city",
      "farm",
      "radiation",
    ];
    const newData = dataSources.map((dataSource) => {
      const event = oldData[dataSource]?.[0];
      const transformedData = {
        eventCallType: event?.eventCallType,
        isCompleted: event?.isCompleted,
        requestService: event?.requestService,
        eventUserName: event?.eventUserName,
        requestDt: event?.requestDt,
        eventMessage: event?.eventMessage,
        eventUserPhoneNumber: event?.eventUserPhoneNumber,
        droneIsConnected: event?.droneIsConnected,
        droneId: event?.droneId,
        stationID: event?.stationID,
        stationIsConnected: event?.stationIsConnected,
        stationDoorInfo: event?.stationDoorInfo,
        droneStatus: event?.droneStatus,
        alt: event?.alt,
        droneSpeed: event?.droneSpeed,
        batteryRemaining: event?.batteryRemaining,
      };
      if (dataSource === "mountInfos") {
        transformedData.moreInfos = oldData[dataSource];
      }
      return transformedData;
    });
    return newData;
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
  eventService(eventCallType) {
    switch (eventCallType) {
      case "MOUNT":
        return "산악구조";
      case "SAFERETURN":
        return "안심귀가";
      case "CRIMECALL":
        return "현장출동";
      case "CRIMEPATROL":
        return "순찰";
      case "CITY":
        return "도심관리";
      case "RADIATION":
        return "방사능측정";
      case "FARM":
        return "농작물진단";
      default:
        return "";
    }
  }
  eventServiceIcon(eventCallType) {
    switch (eventCallType) {
      case "MOUNT":
        return <FaMountain />;
      case "SAFERETURN":
        return <AiFillSafetyCertificate />;
      case "CRIMECALL":
      case "CRIMEPATROL":
        return <PiPoliceCarBold />;
      case "CITY":
        return <BiSolidCity />;
      case "RADIATION":
        return <FaRadiation />;
      case "FARM":
        return <LuWheat />;
      default:
        return null;
    }
  }
  requestColor(requestService) {
    if (requestService === 0) {
      return "green"; //요청성공
    } else if (requestService === 1) {
      return "red"; //요청실패
    } else {
      return "gray";
    }
  }
  requestText(requestService) {
    if (requestService === 0) {
      return "ON"; //요청성공
    } else if (requestService === 1) {
      return "FAIL"; //요청실패
    } else {
      return "OFF";
    }
  }
  iscompletedColor(iscompleted) {
    if (iscompleted === 0) {
      return "btn-secondary"; //디폴트
    } else if (iscompleted === 1) {
      return "btn-dark"; //서비스 종료 완료
    } else if (iscompleted === 2) {
      return "btn-warning"; //종료 요청중
    } else if (iscompleted === 3) {
      return "btn-success"; //서비스 수행중
    } else {
      return "btn-secondary";
    }
  }
  stationColor(stationDoorInfo) {
    switch (stationDoorInfo) {
      case "도어 닫힘":
        return "btn-dark";
      case "도어 열림":
        return "btn-primary";
      case "도어 열림동작":
        return "btn-warning";
      case "도어 닫힘동작":
        return "btn-info";
      case "비상 정지시행":
        return "btn-danger";
      default:
        return "btn-light";
    }
  }
  // 렌더
  render() {
    const { dataLoaded } = this.state;
    const newData = this.transformData();
    const header = [
      "서비스",
      "서비스요청",
      "서비스상태",
      "요청정보",
      "스테이션상태",
      "드론상태",
      "드론정보",
      "통신상태-드론",
      "통신상태-스테이션",
    ];

    const renderPopover = (
      PopoverContent //스테이션상태,드론상태 필드 옆에 물음표 아이콘을 넣고, 그 아이콘에 mouseover를 하면 각각의 popover컴포넌트를 띄운다.
    ) => (
      <OverlayTrigger
        trigger={["hover", "hover"]}
        placement="bottom"
        overlay={
          <Popover>
            <Popover.Title as="h3">상세단계</Popover.Title>
            <Popover.Content>{PopoverContent}</Popover.Content>
          </Popover>
        }
      >
        <AiFillQuestionCircle style={{ marginLeft: "4px" }} />
      </OverlayTrigger>
    );
    if (!dataLoaded) {
      return <Loading />;
    } else {
      return (
        <div className="table-responsive">
          <table className="table" style={{ backgroundColor: "white" }}>
            <thead>
              <tr>
                {header.map((item, index) => (
                  <th scope="col" key={index} style={{ textAlign: "center" }}>
                    <span>
                      {index === 4 ? (
                        <>스테이션 상태 {renderPopover(<StationPopover />)}</>
                      ) : index === 5 ? (
                        <>드론 상태 {renderPopover(<DroneInfoPopover />)}</>
                      ) : (
                        item
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {newData.map((dataItem, index) => (
                <React.Fragment key={index}>
                  {dataItem.eventCallType === "MOUNT" ? ( // eventCallType이 MOUNT인 경우에만 rowSpan사용
                    <>
                      {[0, 1, 2].map(
                        (
                          mountIndex // mountIndex에 따라 행을 생성. 고유키값가짐.
                        ) => (
                          <tr key={`${index}-mount-${mountIndex}`}>
                            {mountIndex === 0 && (
                              <>
                                <td
                                  rowSpan={3}
                                  style={{ verticalAlign: "inherit" }}
                                >
                                  <button className="btn btn-md btn-outline-dark btn-block">
                                    <i style={{ fontSize: "1rem" }}>
                                      {this.eventServiceIcon(
                                        dataItem.eventCallType
                                      )}
                                    </i>
                                    &nbsp;
                                    <span
                                      style={{ fontSize: "1rem" }}
                                      className="fw-semi-bold"
                                    >
                                      {this.eventService(
                                        dataItem.eventCallType
                                      )}
                                    </span>
                                  </button>
                                </td>
                                <td
                                  rowSpan={3}
                                  style={{ verticalAlign: "inherit" }}
                                >
                                  <div>
                                    <span
                                      className="fw-semi-bold"
                                      style={{
                                        color: this.requestColor(
                                          dataItem.requestService
                                        ),
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                      }}
                                    >
                                      &nbsp;
                                      {this.requestText(
                                        dataItem.requestService
                                      )}
                                    </span>
                                  </div>
                                </td>
                                <td
                                  rowSpan={3}
                                  style={{ verticalAlign: "inherit" }}
                                >
                                  <div>
                                    <button
                                      className={`btn btn-circle ${this.iscompletedColor(
                                        dataItem.stationIsConnected
                                      )}`}
                                    ></button>
                                  </div>
                                </td>
                                <td
                                  rowSpan={3}
                                  style={{ verticalAlign: "inherit" }}
                                >
                                  <div class="row ">
                                    <div
                                      class="col "
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      <span>
                                        요청자: &nbsp; {dataItem.eventUserName}
                                      </span>
                                    </div>
                                    <div
                                      class="col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      <span>
                                        전화번호: &nbsp;
                                        {dataItem.eventUserPhoneNumber}
                                      </span>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div
                                      class="col"
                                      style={{ textAlign: "left" }}
                                    >
                                      <span>
                                        요청시간: &nbsp;
                                        {this.formatDate(dataItem.requestDt)}
                                      </span>
                                    </div>
                                    <div
                                      class="col"
                                      style={{ textAlign: "left" }}
                                    >
                                      <span>
                                        메모:&nbsp;{dataItem.eventMessage}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                              </>
                            )}
                            <td style={{ verticalAlign: "inherit" }}>
                              <div>
                                <Button
                                  type="button"
                                  className={`btn btn-sm btn-block ${this.stationColor(
                                    dataItem.moreInfos[mountIndex]
                                      ?.stationDoorInfo
                                  )}`}
                                >
                                  <span
                                    className="badge badge-light"
                                    style={{ marginRight: "20px" }}
                                  >
                                    {dataItem.moreInfos[mountIndex]?.stationID}
                                  </span>
                                  {
                                    dataItem.moreInfos[mountIndex]
                                      ?.stationDoorInfo
                                  }
                                </Button>
                              </div>
                            </td>
                            <td style={{ verticalAlign: "inherit" }}>
                              <div>
                                <Button
                                  className={`btn btn-sm btn-block ${this.dronestatusColor(
                                    dataItem.moreInfos[mountIndex]?.droneStatus
                                  )}`}
                                >
                                  <span
                                    className="badge badge-light"
                                    style={{ marginRight: "20px" }}
                                  >
                                    {dataItem.moreInfos[mountIndex]?.droneId}
                                  </span>
                                  {dataItem.moreInfos[mountIndex]?.droneStatus}
                                </Button>
                              </div>
                            </td>
                            <td style={{ verticalAlign: "inherit" }}>
                              <div>
                                <span>
                                  고도 : {dataItem.moreInfos[mountIndex]?.alt} m{" "}
                                </span>
                                <span>
                                  스피드 :{" "}
                                  {dataItem.moreInfos[mountIndex]?.droneSpeed}{" "}
                                  m/s{" "}
                                </span>
                                <span>
                                  배터리 :&nbsp;
                                  <span
                                    style={{
                                      color: this.getBatteryColor(
                                        dataItem.moreInfos[mountIndex]
                                          ?.batteryRemaining
                                      ),
                                    }}
                                  >
                                    {
                                      dataItem.moreInfos[mountIndex]
                                        ?.batteryRemaining
                                    }
                                  </span>
                                  &nbsp; %
                                </span>
                              </div>
                            </td>
                            <td style={{ verticalAlign: "inherit" }}>
                              <div>
                                <button
                                  type="button"
                                  className={`btn btn-circle btn-lg ${this.droneIsConnectedColor(
                                    dataItem.moreInfos[mountIndex]
                                      ?.droneIsConnected
                                  )}`}
                                >
                                  {dataItem.moreInfos[mountIndex]?.droneId}
                                </button>
                              </div>
                            </td>
                            <td style={{ verticalAlign: "inherit" }}>
                              <div>
                                <button
                                  type="button"
                                  className={`btn btn-circle btn-lg ${this.stationIsConnectedColor(
                                    dataItem.moreInfos[mountIndex]
                                      ?.stationIsConnected
                                  )}`}
                                >
                                  {dataItem.moreInfos[mountIndex]?.stationID}
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      )}
                    </>
                  ) : (
                    <tr key={index}>
                      <td style={{ verticalAlign: "inherit" }}>
                        <div>
                          <button className="btn btn-md btn-outline-dark btn-block">
                            <i style={{ fontSize: "1rem" }}>
                              {this.eventServiceIcon(dataItem.eventCallType)}
                            </i>
                            &nbsp;
                            <span
                              style={{ fontSize: "1rem" }}
                              className="fw-semi-bold"
                            >
                              {this.eventService(dataItem.eventCallType)}
                            </span>
                          </button>
                        </div>
                      </td>
                      <td style={{ verticalAlign: "inherit" }}>
                        <div>
                          <span
                            className="fw-semi-bold"
                            style={{
                              color: this.requestColor(dataItem.requestService),
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            &nbsp;
                            {this.requestText(dataItem.requestService)}
                          </span>
                        </div>
                      </td>
                      <td style={{ verticalAlign: "inherit" }}>
                        <div>
                          <button
                            className={`btn btn-circle ${this.iscompletedColor(
                              dataItem.stationIsConnected
                            )}`}
                          ></button>
                        </div>
                      </td>
                      <td style={{ verticalAlign: "inherit" }}>
                        <div class="row">
                          <div class="col" style={{ textAlign: "left" }}>
                            {" "}
                            <span>요청자: &nbsp; {dataItem.eventUserName}</span>
                          </div>
                          <div class="col" style={{ textAlign: "left" }}>
                            {" "}
                            <span>
                              전화번호: &nbsp;
                              {dataItem.eventUserPhoneNumber}
                            </span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col" style={{ textAlign: "left" }}>
                            <span>
                              요청시간: &nbsp;
                              {this.formatDate(dataItem.requestDt)}
                            </span>
                          </div>
                          <div class="col" style={{ textAlign: "left" }}>
                            <span>메모:&nbsp;{dataItem.eventMessage}</span>
                          </div>
                        </div>
                      </td>
                      <td style={{ verticalAlign: "inherit" }}>
                        <div>
                          <Button
                            type="button"
                            className={`btn btn-sm btn-block ${this.stationColor(
                              dataItem.stationDoorInfo
                            )}`}
                          >
                            <span
                              className="badge badge-light"
                              style={{ marginRight: "20px" }}
                            >
                              {dataItem.stationID}
                            </span>
                            {dataItem.stationDoorInfo}
                          </Button>
                        </div>
                      </td>
                      <td style={{ verticalAlign: "inherit" }}>
                        <div>
                          <Button
                            className={`btn btn-sm btn-block ${this.dronestatusColor(
                              dataItem.droneStatus
                            )}`}
                          >
                            <span
                              className="badge badge-light"
                              style={{ marginRight: "20px" }}
                            >
                              {dataItem.droneId}
                            </span>
                            {dataItem.droneStatus}
                          </Button>
                        </div>
                      </td>
                      <td style={{ verticalAlign: "inherit" }}>
                        <div>
                          <span>고도 : {dataItem.alt} m </span>
                          <span>스피드 : {dataItem.droneSpeed} m/s </span>
                          <span>
                            배터리 :&nbsp;
                            <span
                              style={{
                                color: this.getBatteryColor(
                                  dataItem.batteryRemaining
                                ),
                              }}
                            >
                              {dataItem.batteryRemaining}
                            </span>
                            &nbsp; %
                          </span>
                        </div>
                      </td>
                      <td style={{ verticalAlign: "inherit" }}>
                        <div>
                          <button
                            type="button"
                            className={`btn btn-circle btn-lg ${this.droneIsConnectedColor(
                              dataItem.droneIsConnected
                            )}`}
                          >
                            {dataItem.droneId}
                          </button>
                        </div>
                      </td>
                      <td style={{ verticalAlign: "inherit" }}>
                        <div>
                          <button
                            type="button"
                            className={`btn btn-circle btn-lg ${this.stationIsConnectedColor(
                              dataItem.stationIsConnected
                            )}`}
                          >
                            {dataItem.stationID}
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
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

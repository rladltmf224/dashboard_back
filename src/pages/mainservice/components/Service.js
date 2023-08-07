import React from "react";
import { Row, Col, Table } from "reactstrap";
import Widget from "../../../components/Widget/Widget";
import { FaMountain, FaRadiation } from "react-icons/fa";
import { BiSolidCity } from "react-icons/bi";

import { LuWheat } from "react-icons/lu";

import { AiFillSafetyCertificate } from "react-icons/ai";
import { PiPoliceCarBold } from "react-icons/pi";

import { FaAccusoft } from "react-icons/fa";
import s from "../Service.module.scss";
class Service extends React.Component {
  constructor(props) {
    super(props);

    const mountData = this.props.mountInfosService.filter(
      (item) => item.eventCallType === "MOUNT"
    );

    const firstMountData = mountData[0]; // 첫 번째 요소 추출

    this.state = {
      tableStyles: [
        {
          //산악구조
          id: firstMountData?.eventCallType || "",
          service_info: {
            requestservice:
              this.requestColor(firstMountData?.requestService) || "",
            iscompleted:
              this.iscompletedColor(firstMountData?.iscompleted) || "",
            requester: firstMountData?.eventUserName || "",
            requesttime: firstMountData?.requestDt || "",
            contactnumber: firstMountData?.eventUserPhoneNumber || "",
            memo: firstMountData?.eventMessage || "",
          },
        },

        {
          //안심귀가
          id:
            this.eventService(
              this.props.safeReturnService.find(
                (item) => item.eventCallType === "SAFERETURN"
              )?.eventCallType
            ) || "",
          service_info: {
            requestservice:
              this.requestColor(
                this.props.safeReturnService.find(
                  (item) => item.eventCallType === "SAFERETURN"
                )?.requestService
              ) || "",
            iscompleted:
              this.iscompletedColor(
                this.props.safeReturnService.find(
                  (item) => item.eventCallType === "SAFERETURN"
                )?.iscompleted
              ) || "",
            requester:
              this.props.safeReturnService.find(
                (item) => item.eventCallType === "SAFERETURN"
              )?.eventUserName || "",
            requesttime:
              this.props.safeReturnService.find(
                (item) => item.eventCallType === "SAFERETURN"
              )?.requestDt || "",
            contactnumber:
              this.props.safeReturnService.find(
                (item) => item.eventCallType === "SAFERETURN"
              )?.eventUserPhoneNumber || "",
            memo:
              this.props.safeReturnService.find(
                (item) => item.eventCallType === "SAFERETURN"
              )?.eventMessage || "",
          },
        },
        {
          //현장출동
          id:
            this.eventService(
              this.props.crimeCallService.find(
                (item) => item.eventCallType === "CRIMECALL"
              )?.eventCallType
            ) || "",
          service_info: {
            requestservice:
              this.requestColor(
                this.props.crimeCallService.find(
                  (item) => item.eventCallType === "CRIMECALL"
                )?.requestService
              ) || "",
            iscompleted:
              this.iscompletedColor(
                this.props.crimeCallService.find(
                  (item) => item.eventCallType === "CRIMECALL"
                )?.iscompleted
              ) || "",
            requester:
              this.props.crimeCallService.find(
                (item) => item.eventCallType === "CRIMECALL"
              )?.eventUserName || "",
            requesttime:
              this.props.crimeCallService.find(
                (item) => item.eventCallType === "CRIMECALL"
              )?.requestDt || "",
            contactnumber:
              this.props.crimeCallService.find(
                (item) => item.eventCallType === "CRIMECALL"
              )?.eventUserPhoneNumber || "",
            memo:
              this.props.crimeCallService.find(
                (item) => item.eventCallType === "CRIMECALL"
              )?.eventMessage || "",
          },
        },
        {
          //순찰
          id:
            this.eventService(
              this.props.crimePatrolService.find(
                (item) => item.eventCallType === "CRIMEPATROL"
              )?.eventCallType
            ) || "",
          service_info: {
            requestservice:
              this.requestColor(
                this.props.crimePatrolService.find(
                  (item) => item.eventCallType === "CRIMEPATROL"
                )?.requestService
              ) || "",
            iscompleted:
              this.iscompletedColor(
                this.props.crimePatrolService.find(
                  (item) => item.eventCallType === "CRIMEPATROL"
                )?.iscompleted
              ) || "",
            requester:
              this.props.crimePatrolService.find(
                (item) => item.eventCallType === "CRIMEPATROL"
              )?.eventUserName || "",
            requesttime:
              this.props.crimePatrolService.find(
                (item) => item.eventCallType === "CRIMEPATROL"
              )?.requestDt || "",
            contactnumber:
              this.props.crimePatrolService.find(
                (item) => item.eventCallType === "CRIMEPATROL"
              )?.eventUserPhoneNumber || "",
            memo:
              this.props.crimePatrolService.find(
                (item) => item.eventCallType === "CRIMEPATROL"
              )?.eventMessage || "",
          },
        },
        {
          //도심관리
          id:
            this.eventService(
              this.props.cityService.find(
                (item) => item.eventCallType === "CITY"
              )?.eventCallType
            ) || "",
          service_info: {
            requestservice:
              this.requestColor(
                this.props.cityService.find(
                  (item) => item.eventCallType === "CITY"
                )?.requestService
              ) || "",
            iscompleted:
              this.iscompletedColor(
                this.props.cityService.find(
                  (item) => item.eventCallType === "CITY"
                )?.iscompleted
              ) || "",
            requester:
              this.props.cityService.find(
                (item) => item.eventCallType === "CITY"
              )?.eventUserName || "",
            requesttime:
              this.props.cityService.find(
                (item) => item.eventCallType === "CITY"
              )?.requestDt || "",
            contactnumber:
              this.props.cityService.find(
                (item) => item.eventCallType === "CITY"
              )?.eventUserPhoneNumber || "",
            memo:
              this.props.cityService.find(
                (item) => item.eventCallType === "CITY"
              )?.eventMessage || "",
          },
        },
        {
          //방사능측정
          id:
            this.eventService(
              this.props.radiationService.find(
                (item) => item.eventCallType === "RADIATION"
              )?.eventCallType
            ) || "",
          service_info: {
            requestservice:
              this.requestColor(
                this.props.radiationService.find(
                  (item) => item.eventCallType === "RADIATION"
                )?.requestService
              ) || "",
            iscompleted:
              this.iscompletedColor(
                this.props.radiationService.find(
                  (item) => item.eventCallType === "RADIATION"
                )?.iscompleted
              ) || "",
            requester:
              this.props.radiationService.find(
                (item) => item.eventCallType === "RADIATION"
              )?.eventUserName || "",
            requesttime:
              this.props.radiationService.find(
                (item) => item.eventCallType === "RADIATION"
              )?.requestDt || "",
            contactnumber:
              this.props.radiationService.find(
                (item) => item.eventCallType === "RADIATION"
              )?.eventUserPhoneNumber || "",
            memo:
              this.props.radiationService.find(
                (item) => item.eventCallType === "RADIATION"
              )?.eventMessage || "",
          },
        },
        {
          //농작물진단
          id:
            this.eventService(
              this.props.farmService.find(
                (item) => item.eventCallType === "FARM"
              )?.eventCallType
            ) || "",
          service_info: {
            requestservice:
              this.requestColor(
                this.props.farmService.find(
                  (item) => item.eventCallType === "FARM"
                )?.requestService
              ) || "",
            iscompleted:
              this.iscompletedColor(
                this.props.farmService.find(
                  (item) => item.eventCallType === "FARM"
                )?.iscompleted
              ) || "",
            requester:
              this.props.farmService.find(
                (item) => item.eventCallType === "FARM"
              )?.eventUserName || "",
            requesttime:
              this.props.farmService.find(
                (item) => item.eventCallType === "FARM"
              )?.requestDt || "",
            contactnumber:
              this.props.farmService.find(
                (item) => item.eventCallType === "FARM"
              )?.eventUserPhoneNumber || "",
            memo:
              this.props.farmService.find(
                (item) => item.eventCallType === "FARM"
              )?.eventMessage || "",
          },
        },
      ],
    };
  }

  //함수

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

  eventService(eventCallType) {
    if (eventCallType === "MOUNT") {
      return "산악구조";
    } else if (eventCallType === "SAFERETURN") {
      return "안심귀가";
    } else if (eventCallType === "CRIMECALL") {
      return "현장출동";
    } else if (eventCallType === "CRIMEPATROL") {
      return "순찰";
    } else if (eventCallType === "CITY") {
      return "도심관리";
    } else if (eventCallType === "RADIATION") {
      return "방사능측정";
    } else if (eventCallType === "FARM") {
      return "농작물진단";
    } else {
      return "";
    }
  }

  eventServiceIcon(eventCallType) {
    //각 서비스에 맞는 아이콘
    if (eventCallType === "MOUNT") {
      return <FaMountain />;
    } else if (eventCallType === "SAFERETURN") {
      return <AiFillSafetyCertificate />;
    } else if (eventCallType === "CRIMECALL") {
      return <PiPoliceCarBold />;
    } else if (eventCallType === "CRIMEPATROL") {
      return <PiPoliceCarBold />;
    } else if (eventCallType === "CITY") {
      return <BiSolidCity />;
    } else if (eventCallType === "RADIATION") {
      return <FaRadiation />;
    } else if (eventCallType === "FARM") {
      return <LuWheat />;
    } else {
      return "";
    }
  }

  componentDidMount() {
    this.updateTableStyles();
    this.interval = setInterval(this.updateTableStyles, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatDate(dateString) {
    // if (dateString) {    //2023년07월12일 14시24분 형식 날짜 가공
    //   const date = new Date(dateString);
    //   const year = date.getFullYear();
    //   const month = date.getMonth() + 1;
    //   const day = date.getDate();
    //   const hours = date.getHours().toString().padStart(2, "0");
    //   const minutes = date.getMinutes().toString().padStart(2, "0");
    //   return `${year}년${month}월${day}일${hours}시${minutes}분`;
    // } else {
    //   return ""; //값이 없으면 빈값으로 보여줌.
    // }
    if (dateString) {
      //2023.07.25 14:24:23 형식 날짜 가공
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");

      const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
      return formattedDate;
    } else {
      return "";
    }
  }

  RequestTime({ row }) {
    if (!row || !row.service_info || !row.service_info.requesttime) {
      return (
        <small style={{ fontSize: "1.25rem" }}>
          요청시간 :
          <span className="text-muted fw-semi-bold">
            &nbsp; &nbsp; 요청시간이 없음
          </span>
        </small>
      );
    }

    return (
      <small style={{ fontSize: "1.25rem" }}>
        요청시간 :
        <span className="text-muted fw-semi-bold">
          &nbsp; &nbsp;
          {this.formatDate(row.service_info.requesttime)}
        </span>
      </small>
    );
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

    const firstMountData = mountInfosService.find(
      (item) => item.eventCallType === "MOUNT"
    );

    // const formattedDate = (requestDt) => {
    //   const date = new Date(requestDt);
    //   const year = date.getFullYear();
    //   const month = (date.getMonth() + 1).toString().padStart(2, "0");
    //   const day = date.getDate().toString().padStart(2, "0");
    //   const hours = date.getHours().toString().padStart(2, "0");
    //   const minutes = date.getMinutes().toString().padStart(2, "0");
    //   const seconds = date.getSeconds().toString().padStart(2, "0");
    //   const formatted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    //   return formatted;
    // };

    if (firstMountData) {
      // console.log("firstMountData.requestDt",formattedDate(firstMountData.requestDt));
      updatedTableStyles.push({
        id: firstMountData.eventCallType,
        service_info: {
          requestservice: firstMountData.requestService,
          iscompleted: firstMountData.isCompleted,
          requester: firstMountData.eventUserName,
          requesttime: firstMountData.requestDt,
          contactnumber: firstMountData.eventUserPhoneNumber,
          memo: firstMountData.eventMessage,
        },
      });
    }

    safeReturnService.forEach((info) => {
      updatedTableStyles.push({
        id: info.eventCallType,
        service_info: {
          requestservice: info.requestService,
          iscompleted: info.isCompleted,
          requester: info.eventUserName,
          // requesttime: formattedDate(firstMountData.requestDt),
          requesttime: info.requestDt,
          contactnumber: info.eventUserPhoneNumber,
          memo: info.eventMessage,
        },
      });
    });

    crimePatrolService.forEach((info) => {
      updatedTableStyles.push({
        id: info.eventCallType,
        service_info: {
          requestservice: info.requestService,
          iscompleted: info.isCompleted,
          requester: info.eventUserName,
          requesttime: info.requestDt,
          contactnumber: info.eventUserPhoneNumber,
          memo: info.eventMessage,
        },
      });
    });

    cityService.forEach((info) => {
      updatedTableStyles.push({
        id: info.eventCallType,
        service_info: {
          requestservice: info.requestService,
          iscompleted: info.isCompleted,
          requester: info.eventUserName,
          requesttime: info.requestDt,
          contactnumber: info.eventUserPhoneNumber,
          memo: info.eventMessage,
        },
      });
    });

    radiationService.forEach((info) => {
      updatedTableStyles.push({
        id: info.eventCallType,
        service_info: {
          requestservice: info.requestService,
          iscompleted: info.isCompleted,
          requester: info.eventUserName,
          requesttime: info.requestDt,
          contactnumber: info.eventUserPhoneNumber,
          memo: info.eventMessage,
        },
      });
    });

    farmService.forEach((info) => {
      updatedTableStyles.push({
        id: info.eventCallType,
        service_info: {
          requestservice: info.requestService,
          iscompleted: info.isCompleted,
          requester: info.eventUserName,
          requesttime: info.requestDt,
          contactnumber: info.eventUserPhoneNumber,
          memo: info.eventMessage,
        },
      });
    });

    crimeCallService.forEach((info) => {
      updatedTableStyles.push({
        id: info.eventCallType,
        service_info: {
          requestservice: info.requestService,
          iscompleted: info.isCompleted,
          requester: info.eventUserName,
          requesttime: info.requestDt,
          contactnumber: info.eventUserPhoneNumber,
          memo: info.eventMessage,
        },
      });
    });

    this.setState({ tableStyles: updatedTableStyles });
  };

  render() {
    const desiredRowHeight = "150px";
    const padding = "0px";

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
                        scope="col"
                        style={{ fontSize: "1.0rem", borderBottom: "none" }}
                      >
                        서비스
                      </th>
                      <th
                        scope="col"
                        className="hidden-sm-down"
                        style={{ fontSize: "1.0rem", borderBottom: "none" }}
                      >
                        서비스요청
                      </th>

                      <th
                        className="hidden-sm-down"
                        scope="col"
                        style={{ fontSize: "1.0rem", borderBottom: "none" }}
                      >
                        서비스상태
                      </th>
                      <th
                        className="hidden-sm-down"
                        scope="col"
                        style={{ fontSize: "1.0rem", borderBottom: "none" }}
                      >
                        서비스정보
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.tableStyles.map((row, index) => (
                      <tr
                        key={row.id}
                        style={{
                          height: index === 0 ? desiredRowHeight : "150px",
                        }}
                      >
                        {
                          <td
                            class="col-8"
                            style={{
                              fontSize: "1.3rem",
                              verticalAlign: "middle",
                            }}
                            className="fw-semi-bold"
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <button class="btn btn-lg btn-outline-dark ">
                                <i style={{ fontSize: "1rem" }}>
                                  {this.eventServiceIcon(row.id)}
                                </i>
                                &nbsp;
                                <span style={{ fontSize: "1rem" }}>
                                  {this.eventService(row.id)}
                                </span>
                              </button>
                            </div>
                          </td>
                        }

                        <td
                          style={{
                            fontSize: "1.0rem",
                            verticalAlign: "middle",
                          }}
                          className="fw-semi-bold "
                        >
                          <div>
                            <span
                              style={{
                                color: this.requestColor(
                                  row.service_info.requestservice
                                ),
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              &nbsp;
                              {this.requestText(
                                row.service_info.requestservice
                              )}
                            </span>
                          </div>
                        </td>

                        <td style={{ verticalAlign: "middle" }}>
                          <div
                            style={{
                              paddingTop: "0px",
                              display: "flex",
                              alignItems: "center", // 세로 가운데 정렬
                              justifyContent: "center", // 가로 가운데 정렬
                            }}
                          >
                            <button
                              type="button"
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "100rem",
                              }}
                              class={` btn btn-circle ${this.iscompletedColor(
                                row.service_info.iscompleted
                              )}`}
                            ></button>
                          </div>
                        </td>

                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                              paddingTop: index === 0 ? padding : "30px",
                              paddingTop: "30px",
                            }}
                          >
                            <div style={{ textAlign: "left", width: "160px" }}>
                              <button
                                type="button"
                                style={{ display: "flex", width: "180px" }}
                                class=" btn-block  btn-sm btn btn-light"
                              >
                                요청자 : &nbsp;{row.service_info.requester}
                              </button>
                              <button
                                type="button"
                                class="btn btn-block  btn-sm btn-light"
                                style={{ display: "flex", width: "180px" }}
                              >
                                전화번호 : &nbsp;
                                {row.service_info.contactnumber}
                              </button>
                            </div>
                            <div style={{ textAlign: "left", width: "220px" }}>
                              <button
                                type="button"
                                style={{ display: "flex" }}
                                class="btn btn-block  btn-sm btn-light"
                              >
                                요청시간 : &nbsp;
                                {this.formatDate(
                                  row.service_info.requesttime
                                )}{" "}
                              </button>
                              <button
                                style={{ display: "flex" }}
                                type="button"
                                class="btn btn-block  btn-sm btn-light"
                              >
                                메모 : &nbsp; &nbsp;{row.service_info.memo}
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Service;

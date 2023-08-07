import axios from "axios";
import mock from "../pages/analytics/mock";
import config from "../config";
export const RECEIVE_DATA_REQUEST = "RECEIVE_DATA_REQUEST";
export const RECEIVED_DATA_FAILURE = "RECEIVED_DATA_FAILURE";
export const RECEIVED_DATA_SUCCESS = "RECEIVED_DATA_SUCCESS";
//리덕스(상태관리)에서 액션타입을 상수로 정의하는 코드, 이 액션타입은 데이터를 받아오는데 성공했을때 사용됨
export const RECEIVING_DATA = "RECEIVING_DATA";

export function receiveDataRequest() {
  //함수를 만듦과 동시에 export 하는게 맞지 그리고 해당 컴포넌트에서 componentsdidmount dispatch 로 이 함수를 호출해서 바로 화면단에 나타나도록 하는거
  // const axiosInstance = axios.create({
  //     baseURL: 'http://192.168.0.16:52050', // API 서버의 기본 URL
  //     withCredentials: true, // CORS 요청에 인증 정보를 포함시킵니다.
  //     headers: {
  //       'Access-Control-Allow-Origin': '*', // 모든 도메인을 허용합니다. 필요에 따라 도메인을 제한할 수 있습니다.
  //     },
  //   });

  return (dispatch) => {
    let intervalId;
    // Add loading state
    dispatch(receivingData());

    // We check if app runs with backend mode
    if (!config.isBackend) {
      dispatch(receivingData());
      new Promise((resolve) => {
        resolve(mock.backendData);
      }).then((data) => {
        dispatch(receiveDataSuccess(mock.backendData, false));
      });
    } else {
      dispatch(receivingData());
      intervalId = setInterval(() => {
        axios
          .get("/eventcall-service/service/allData")
          .then((res) => {
            console.log("MainService Interval :", res.data);
            dispatch(receiveDataSuccess(res.data, false));
          })
          .catch((error) => {
            // Handle error and set loading to false on failure
            console.error("MainService Interval Error:", error);
          });
      }, 2000);
    }

    // Return an object containing the intervalId and loading state
    return { intervalId };
  };
}

export function receiveDataSuccess(payload, loading) {
  return {
    type: RECEIVED_DATA_SUCCESS,
    payload,
    loading,
  };
}

export function receivingData() {
  return {
    type: RECEIVING_DATA,
  };
}
export function receiveDataFailure() {
  return {
    type: RECEIVED_DATA_FAILURE,
  };
}

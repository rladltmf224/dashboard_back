import { RECEIVED_DATA_SUCCESS, RECEIVING_DATA } from '../actions/droneper'; //이렇게 두개의 액션타입을 사용함

/**
 * dashboard per drone 차트 데이터들의 STATE정의
 */
const defaultState = { //초기값
    flightInfo: [],
    batteryChart: {},
    pageViewsData: [],
    totalVisitsData: [],
    sessionDurationData: [],
    metric1: [],
    metric2: [],
    metric3: [],
    metric4: [],
    metric5: [],
    metric6: [],
    metric7: [],
    metric8: [],
    generateDayWiseChart: {},
    chartMission : {},
    isReceiving: false
}


export default function droneperReducer(state = defaultState, action) {//(현재상태, 액션)
  // console.log("droneperReducer :: state",state)
    // console.log("droneperReducer :: action",action)
    // console.log("droneperReducer :: ",defaultState)
   
    switch (action.type) {

        case RECEIVED_DATA_SUCCESS: //RECEIVED_DATA_SUCCESS 하는경우에는 밑에꺼 실행하고 

            const { flightInfo, batteryChart, pageViewsData, totalVisitsData, sessionDurationData, chartMission, metric1,metric2,metric3,metric4,metric5,metric6,metric7,metric8, generateDayWiseChart} = action.payload;

        return Object.assign({}, state, {
            flightInfo,
            pageViewsData,
            batteryChart,
            totalVisitsData,
            sessionDurationData,
            metric1,
            metric2,
            metric3,
            metric4,
            metric5,
            metric6,
            metric7,
            metric8,
            generateDayWiseChart,
            chartMission
            //여기에 해줬으니깐 값이 저 해당 컴포넌트에 map....으로 넘어간거네
        });
        //object.assign 함수는 매개변수로 전달 된 객체와 나머지 매개변수로 전달 된 객체들을 병합한 새로운 객체를 반환합니다. 여기서는 state 와 추가할 속성값으로 이루어진
        //객체를 병합한 새로운 객체를 반환합니다.

    case RECEIVING_DATA: //RECEIVING_DATA 하는경우애는 밑에꺼 실행하고
 
        return Object.assign({}, state, {
            isReceiving: true
        });
    default: //둘다 아닌경우는  return state임.

        return state;
}
}
//즉, 이것은 analyticsreducer라는 이름의 리듀서 함수를 정의하는 예시코드이다.


import { RECEIVED_DATA_SUCCESS, RECEIVING_DATA } from '../actions/analytics';


const defaultState = { //초기값
    visits: {},
    performance: {},
    server: {},
    revenue: [],
    mainChart: [],
    isReceiving: false
};
//리듀서 함수는 초기상태로 defalutstate 객체를 사용하고, 이 객체에는 이러한 키를 가진 속성들이 정의 되어 있다.



export default function analyticsReducer(state = defaultState, action) { 
    //리덕스에서 정의된 액션객체에 의해 호출됨
    // console.log("analytics",state.visits) //여기서는 빈 객체로 나오네?
    // console.log("analyticsReducer,state",state)
    // console.log("analyticsReducer action,",action)
    // console.log("analyticsReducer defaultState",defaultState)
    
    switch (action.type) {

        case RECEIVED_DATA_SUCCESS: //이게 발생하는 경우에는 
            const { visits, performance, server, revenue, mainChart } = action.payload;
            return Object.assign({}, state, {
                visits,
                performance,
                server,
                revenue,
                mainChart,
                isReceiving: false
            });
        case RECEIVING_DATA:
            return Object.assign({}, state, {
                isReceiving: true
            });
        default:
            return state;
    }
}

//analytics함수는 redux 액션 객체를 처리합니다, switch문을 사용하여 액션 객체의 type프로퍼티 값을 확인하고 해당 case문으로 분기하는데
//첫번째 case문은 received data sucess액션 유형에 해당되며 이경우에는 액션객체의 payload속성에서 visits, ...와 같은 데이터를 추출하여 상태 객체에 복사를 한다,
//이 때 isreceiving 속성을 false로 설정하여 데이터를 ㄹ수신중이라 아니라는 것을 나타내고 
// 두번째 case문은 receiving data액션유형에 해당하며 이 경우 isreceiving 속성을 true로 설정하여 데이터를 수신하는 중임을 나타냄

//여기 데이터랑 mock랑 연결되어있는거 같은데 mock에사 백엔드 데이터라 자동으로 연동.,,,되는건가?
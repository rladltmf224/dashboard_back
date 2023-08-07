import axios from 'axios';
import mock from '../pages/analytics/mock';
import config from '../config';

export const RECEIVED_DATA_SUCCESS = 'RECEIVED_DATA_SUCCESS';
//리덕스(상태관리)에서 액션타입을 상수로 정의하는 코드, 이 액션타입은 데이터를 받아오는데 성공했을때 사용됨
export const RECEIVING_DATA = 'RECEIVING_DATA';

export function receiveDataRequest() { 
    //함수를 만듦과 동시에 export 하는게 맞지 그리고 해당 컴포넌트에서 componentsdidmount dispatch 로 이 함수를 호출해서 바로 화면단에 나타나도록 하는거
    // console.log("a",axios.get('https://jsonplaceholder.typicode.com/posts'))

    return (dispatch) => {
        // We check if app runs with backend mode
        if (!config.isBackend) {
            dispatch(receivingData());
            new Promise((resolve) => {
                resolve(mock.backendData) //resolve는 성공적으로 처리가 되었을때고 reject메서드는 말그대로 리젝 당했을 때 호출되는 거를 작성, 
            }).then(data => { //성공이 되었으니깐 then메서드가 호출되어 새로운 프로미스 객체가 반환된다.
                dispatch(receiveDataSuccess(mock.backendData));
            })
        }

        else {
            dispatch(receivingData());

            axios.get('/analytics').then(res => { 
                console.log("dataaaaaaaaaa",res.data)
                //get 뒤에 나오는 url은 데이터를 표출 할 데이터를 넣으면 되네
                //url은 요청에 사용될 서버 url이다.
              dispatch(receiveDataSuccess(res.data));
              
                //receiveDataSuccess는 리덕스에서 액션을 생성하는 역할을 한다. //이게 만약 백엔드 모드라면 저 url의 내용들이 나오겠지
            })
        }
    };
}

export function receiveDataSuccess(payload) {
    return {
        type: RECEIVED_DATA_SUCCESS,
        payload
        /*리덕스 액션 객체의 프로퍼티 중 하나,, 액션 객체가 전달하는 데이터를 담고 있는 js 객체, 이 데이터는 싱태를 변경하는데 사용 즉, 리덕스
        액션 객체에서 전달되는 데이터를 담는 역할, 이 데이터는 액션객체가 디스패치되어 리듀서에서 처리 됨*/
    }
}

export function receivingData() {
    return {
        type: RECEIVING_DATA
    }
}

//action 파일에 있는거는 state를 변경하기위해 발생시키는 객체
//promise는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용
//일반적으로 웹 애플리케이션을 구현할 때 서버에서 데이터를 요청하고 받아오기 위해 아래와 같은 api 사용

//노드에서 get요청으로 원격 이미지 가져오기 axios.get (url[,config])
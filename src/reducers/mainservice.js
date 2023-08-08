import { RECEIVED_DATA_SUCCESS, RECEIVING_DATA } from "../actions/mainservice";

const defaultState = {
  safeReturn: [],
  crimePatrol: [],
  city: [],
  radiation: [],
  farm: [],
  crimeCall: [],
  mountInfos: [],
};

export default function mainserviceReducer(state = defaultState, action) {
  switch (action.type) {
    case RECEIVED_DATA_SUCCESS:
      const {
        safeReturn,
        crimePatrol,
        city,
        radiation,
        farm,
        crimeCall,
        mountInfos,
      } = action.payload;
      const loading = action.loading;
      console.log("llllllllllllload", action.payload); //state저장
      return Object.assign({}, state, {
        safeReturn,
        crimePatrol,
        city,
        radiation,
        farm,
        crimeCall,
        mountInfos,
      });

    case RECEIVING_DATA:
      return Object.assign({}, state, {
        isReceiving: true,
      });

    default:
      return state;
  }
}

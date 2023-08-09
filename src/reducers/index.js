import { combineReducers } from "redux";
import auth from "./auth";
import navigation from "./navigation";
import alerts from "./alerts";
import layout from "./layout";
import products from "./products";
import analytics from "./analytics";
import droneper from "./droneper";
import droneall from "./droneall";
import mainservice from "./mainservice";
import personalservice from "./personalservice";
import chat from "./chat";
import users from "./usersReducers";
import { connectRouter } from "connected-react-router";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    alerts,
    auth,
    navigation,
    layout,
    products,
    analytics,
    droneper,
    droneall,
    mainservice,
    chat,
    personalservice,
    users, //그럼 여기는 요청받은 url을 적는 곳인걍?
  });

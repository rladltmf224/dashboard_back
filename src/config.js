// const hostApi = process.env.NODE_ENV === "development" ? "http://192.168.0.10" : "https://sing-generator-node.herokuapp.com";

// const hostApi = process.env.NODE_ENV === "development" ? "http://175.198.212.6" : "https://sing-generator-node.herokuapp.com";
//const hostApi = process.env.NODE_ENV === "development" ? "http://192.168.0.16" : "https://sing-generator-node.herokuapp.com";
// const hostApi =
//   process.env.NODE_ENV === "development"
//     ? "http://175.198.212.6"
//     : "https://sing-generator-node.herokuapp.com"; //빌드전
//npm start:backend
const hostApi =
  process.env.NODE_ENV === "development"
    ? "http://175.198.212.6"
    : "http://175.198.212.6"; //빌드후

//const hostApi = process.env.NODE_ENV === "development" ? "http://192.168.1.4" : "http://192.168.1.4";

// const hostApi = process.env.NODE_ENV === "development" ? "http://192.168.0.113" : "https://sing-generator-node.herokuapp.com";
// const hostApi = process.env.NODE_ENV === "development" ? "http://localhost" : "https://sing-generator-node.herokuapp.com";
//api서버의 호스트 이름을 나타냄
// const portApi = process.env.NODE_ENV === "development" ?  8010: ""; //8080 //8010
// const portApi = process.env.NODE_ENV === "development" ?  28080: ""; //8080 //8010
// const portApi = proc₩ess.env.NODE_ENV === "development" ?  8080: ""; //8080 //8010
// const portApi = process.env.NODE_ENV === "development" ?  80: ""; //8080 //8010

const portApi = process.env.NODE_ENV === "development" ? 52050 : 52050;
// const portApi = process.env.NODE_ENV === "development" ?  28080: "";
//api 서버의 포트번호를 나타냄
// const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}/api`;
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;
//api기본 url을 나타냄
// const eventCallApi = "192.168.0.10:52050/eventcall-service";
const redirectUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost/3000/sing-app-react"
    : "https://demo.flatlogic.com/sing-app-react";
//성공했을때 안되었을때

export default {
  redirectUrl,
  hostApi,
  portApi,
  baseURLApi,
  // eventCallApi,
  remote: "https://sing-generator-node.herokuapp.com",
  isBackend: process.env.REACT_APP_BACKEND,
  auth: {
    email: "admin@flatlogic.com",
    password: "password",
  },
  app: {
    colors: {
      dark: "#002B49",
      light: "#FFFFFF",
      sea: "#004472",
      sky: "#E9EBEF",
      wave: "#D1E7F6",
      rain: "#CCDDE9",
      middle: "#D7DFE6",
      black: "#13191D",
      salat: "#21AE8C",
    },
  },
};

//여기서 환경설정 바꿔주고,

/*config.js파일은 react에서 사용되는 환경변수를 설정하는 파일로서 이 파일은 주로 어플리케이션의 환경 설정을 관리하기 위헤 사용됩니다.
 react 애플리케이션은 개발환경 , 운영환경, 테스트 환경 등 다양한 환경에서 동작해야 하므로, 이에따라 각각의 환경에서 필요한 환경변수들을 설정해주어야한다.
 config.js파일은 이러한 환경 변수들을 설정하는 파일 중 하나로 주로 이러한 내용들이 들어간다.
 이 파일을 사용하는 방법은 .env파일에 환경변수를 설정하고 이 env파일을 config.js 파일에서 불러와서 사용한다.
 이로써 애플리케이션에서 사용되는 환경변수들을 중앙에서 관리할 수 있게 된다.
 운영체제에서 제공하는 변수로 시스템 전반에서 사용되는 설정값을 저장하는데 사용된다.
 운영체제나 프로그램이 실행될때 해당 프로드램이 사용할 횐경변수들을 불러와서 사용하게 된다.
 환경변수는 프로그램이 실행이 될때마다 변경 할 수 있으며, 시스템의 전체적인 설정을 변경하거나 프로그램이 실행될때 필요한 값들을 저장하는데 시용*/

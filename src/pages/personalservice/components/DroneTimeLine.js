import React from "react";
import s from '../DroneTimeLine.module.scss'


class DroneTimeLine extends React.Component {

    render() {

      return (
        
        <div style={{width: '100%'}}>

          <h3 className="page-title" style={{textAlign:"center", fontSize:"1.5rem"}}>Timeline</h3>
          <div className={s.timelinedrone}>
            <img src = {process.env.PUBLIC_URL + './images/timeline.gif'}/>
          </div>
  
          <ul className={s.timeline}>
            {/* <li style={{width:'100%', height:'10px', backgroundColor:'blue'}}>이게 타임라인 줄</li> */}
            <li className={s.onRight}>
              <time className={s.eventTime} dateTime="2014-05-19 03:04">
                <span className={s.date}>Take off</span>
                <span className={s.time}>8:03 <span className="fw-semi-bold">pm</span></span>
              </time>
              {/* <span className={`${s.eventIcon} ${s.eventIconSuccess}`}>
              </span> */}
            </li>
  
            <li className={s.onRight}>
              <time className={s.eventTime} dateTime="2014-05-19 03:04">
                <span className={s.date}></span>
                <span className={s.time}>9:41 <span className="fw-semi-bold">am</span></span>
              </time>
              {/* <span className={`${s.eventIcon} ${s.eventIconPrimary}`}>
              </span> */}
              
            </li>
  
            <li className={s.onRight}>
              <time className={s.eventTime} dateTime="2014-05-19 03:04">
                <span className={s.date}></span>
                <span className={s.time}>9:03 <span className="fw-semi-bold">am</span></span>
              </time>
              {/* <span className={`${s.eventIcon} ${s.eventIconDanger}`}>
              </span> */}
            </li>
            <li className={s.onRight}>
              <time className={s.eventTime} dateTime="2014-05-19 03:04">
                <span className={s.date}>Landing</span>
                <span className={s.time}>9:03 <span className="fw-semi-bold">am</span></span>
              </time>
              {/* <span className={s.eventIcon}>
              </span> */}
              
            </li>
  
            <li className={s.onRight}>
              <time className={s.eventTime} dateTime="2014-05-19 03:04">
                <span className={s.date}>Landing</span>
                <span className={s.time}>9:03 <span className="fw-semi-bold">am</span></span>
              </time>
              {/* <span className={s.eventIcon}>
              </span> */}
            </li>
          </ul>
        </div>
      );
    }
  
  }


export default DroneTimeLine
import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";

const DroneInfoPopover = () => {
  return (
    <div>
      <ul className="events">
        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>대기</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>미션 업로드</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>비행중</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>복귀중</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>착륙</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>임무 종료</strong>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DroneInfoPopover;

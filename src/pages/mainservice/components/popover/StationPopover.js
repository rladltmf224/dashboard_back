import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";

const StationPopover = () => {
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
            <strong>이륙 준비</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>이륙 완료</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>착륙 준비</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>착륙 완료</strong>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default StationPopover;

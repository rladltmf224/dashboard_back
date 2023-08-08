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
            <strong>도어닫힘</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>도어열림</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>도어열림동작</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>비상정지시행</strong>
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

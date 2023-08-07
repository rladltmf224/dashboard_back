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
            <strong>암</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>디스암</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>이륙</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>미션스타트</strong>
          </span>
        </li>

        <li>
          <time datetime="10:03"> &nbsp; </time>
          <span>
            <strong>가이드</strong>
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
      </ul>
    </div>
  );
};

export default DroneInfoPopover;

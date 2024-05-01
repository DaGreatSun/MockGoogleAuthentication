import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
const statusColor = [
  {
    title: -1,
    color: "#D62525",
    status: "Rejected",
  },
  {
    title: 0,
    color: "#FFBD33",
    status: "Pending",
  },
  {
    title: 1,
    color: "#13BC57",
    status: "Approved",
  },
];
const CustomTimeline = ({ data }) => (
  <ul className="timeline timeline-vertical">
    {data.map((item, index) => (
      <li key={`timeline-item-${index}`}>
        <hr />
        <div className="timeline-start">{item.date}</div>
        <div className="timeline-middle">
          <IoIosCheckmarkCircle />
        </div>
        <div className="timeline-end timeline-box">
          <strong style={{ color: statusColor[item.title + 1].color }}>
            {statusColor[item.title + 1].status}
          </strong>
          <p>{item.remark}</p>
        </div>
        <hr />
      </li>
    ))}
  </ul>
);

export default CustomTimeline;

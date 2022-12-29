import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown, TiBookmark } from "react-icons/ti";
import { IconContext } from "react-icons";
export default function QuestionBodyAside({ filterData }) {
  return (
    <aside className="Main_Text_Aside">
      <div className="Vote_Icon_Container">
        <IconContext.Provider
          value={{ size: "35px", color: "hsl(210,8%,85%)" }}
        >
          <TiArrowSortedUp />
          <span>{filterData[0].vote}</span>
          <TiArrowSortedDown />
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "30px", color: "#a5a7a9" }}>
          <TiBookmark />
        </IconContext.Provider>
      </div>
    </aside>
  );
}

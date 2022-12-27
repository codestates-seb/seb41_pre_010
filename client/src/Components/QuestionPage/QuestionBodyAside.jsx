import React from "react";

export default function QuestionBodyAside({
  IconContext,
  TiBookmark,
  filterData,
  TiArrowSortedUp,
  TiArrowSortedDown,
}) {
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

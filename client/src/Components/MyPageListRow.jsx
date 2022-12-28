import React from "react";
import { Link } from "react-router-dom";

function MyPageListRow(props) {
  const name = Object.keys(props)[0];
  const listData = props[name][name];

  return (
    <div className="Mypage_List_Content_Container">
      {listData.slice(-10).map((el) => {
        const keys = Object.keys(el);
        return (
          <div key={el[keys[0]]} className="Mypage_Content_Container">
            <span className="Mypage_Content_Votes">{el[keys[4]]}</span>
            <Link to="" className="Mypage_Content_Title">
              {el[keys[1]].length > 50
                ? el[keys[1]].slice(0, 50) + "..."
                : el[keys[1]]}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MyPageListRow;

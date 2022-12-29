import React from "react";
import { Link } from "react-router-dom";

function MyPageListRow(props) {
  const name = Object.keys(props)[0];
  const listData = props[name][name];

  return (
    <div className="Mypage_List_Content_Container">
      {listData.slice(-10).map((el) => {
        const [id, title, createdAt, modifiedAt, vote] = Object.keys(el);
        return (
          <div key={el[id]} className="Mypage_Content_Container">
            <span className="Mypage_Content_Votes">{el[vote]}</span>
            <Link to="" className="Mypage_Content_Title">
              {el[title].split("").every((el) => el.charCodeAt() < 127)
                ? el[title].length > 35
                  ? el[title].slice(0, 35) + "..."
                  : el[title]
                : el[title].length > 20
                ? el[title].slice(0, 20) + "..."
                : el[title]}
            </Link>
            <span className="Mypage_Content_Date">
              {el[modifiedAt] || el[createdAt]}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default MyPageListRow;

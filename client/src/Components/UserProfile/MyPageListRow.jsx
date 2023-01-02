import React from "react";
import { Link } from "react-router-dom";

function MyPageListRow(props) {
  const name = Object.keys(props)[0];
  const listData = props[name][name];

  return (
    <div className="Mypage_List_Content_Container">
      {listData &&
        listData.slice(-5).map((el) => {
          const [id, title, createdAt, modifiedAt, vote] = Object.keys(el);
          const displayTitle = el[title].slice(0, 35);
          return (
            <div key={el[id]} className="Mypage_Content_Container">
              <span className="Mypage_Content_Votes">{el[vote]}</span>
              <Link
                to={`/questions/${el[id]}`}
                className="Mypage_Content_Title"
              >
                {displayTitle.split("").every((el) => el.charCodeAt() < 127)
                  ? el[title].length > 35
                    ? displayTitle + "..."
                    : displayTitle
                  : el[title].length > 20
                  ? displayTitle.slice(0, 20) + "..."
                  : displayTitle}
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

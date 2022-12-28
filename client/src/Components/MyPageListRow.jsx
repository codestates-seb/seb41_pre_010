import React from "react";

function MyPageListRow(props) {
  const name = Object.keys(props)[0];
  const listData = props[name][name];

  return (
    <div className="Mypage_List_Row">
      {listData.map((el) => {
        const keys = Object.keys(el);
        return (
          <ul key={el[keys[0]]}>
            <li>{el[keys[1]]}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default MyPageListRow;

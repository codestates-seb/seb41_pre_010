import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import styled from "styled-components";
import "./Styles/style.css";

export const TagButton = styled.a `
  font-size: 12px;
  color: hsl(205,47%,42%);
  background-color: hsl(205,46%,92%);
  border-radius: 4px;
  border: none;
  padding: 4px 6px;
  text-decoration-line: none;
`
export const TagBar = () => {
  const [selected, setSelected] = useState([]);
  return (
    <div className="Tag_Components">
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="fruits"
        placeHolder="태그를 입력하세요"
      />
    </div>
  );
}
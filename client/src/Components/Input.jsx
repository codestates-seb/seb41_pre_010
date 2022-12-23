import styled from "styled-components";

const Input = styled.input`
  padding: 7px;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 3px;

  &:focus {
    outline: none !important;
    border-color: rgb(89, 164, 222);
    box-shadow: rgb(217, 234, 247) 0px 1px 4px,
      rgb(217, 234, 247) 0px 0px 0px 4px;
  }
`;

export default Input;

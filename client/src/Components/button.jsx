import styled from "styled-components";

const WhiteButton = styled.button`
  margin: 5px; // to be deleted!!!!!!!
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  border: 1px solid rgb(234, 236, 237);
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset;
  &:hover {
    background-color: rgb(214, 217, 220);
    border-color: rgb(186, 191, 196);
  }
`;

const OrangeButton = styled(WhiteButton)`
  border: 1px solid rgb(224, 130, 37);
  background-color: rgb(224, 130, 37);
  color: white;

  &:hover {
    background-color: rgb(224, 130, 37);
    border-color: rgb(224, 130, 37);
  }
`;

const BlueButton = styled(WhiteButton)`
  border: 1px solid rgb(10, 149, 255);
  background-color: rgb(10, 149, 255);
  color: white;

  &:hover {
    background-color: rgb(0, 116, 204);
    border-color: rgb(0, 116, 204);
  }
`;

export { WhiteButton, OrangeButton, BlueButton };

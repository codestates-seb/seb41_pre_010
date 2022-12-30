import styled from "styled-components";

const WhiteButton = styled.a`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : "30px")};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => (props.color ? props.color : "black")};
  margin-left: ${(props) => props.marginLft};
  border: 1px solid rgb(234, 236, 237);
  border-radius: 3px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
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

const BlueWhiteButton = styled(WhiteButton)`
  color: rgb(0, 116, 204);
  border: 1px solid rgb(255, 255, 255);

  &:hover {
    background-color: rgb(240, 248, 255);
    border-color: rgb(0, 116, 204);
    border: 1px solid rgb(240, 248, 255);
  }
`;

const TagButton = styled(WhiteButton)`
  display: inline;
  border: 1px solid rgb(225, 236, 244);
  background-color: rgb(225, 236, 244);
  color: rgb(57, 115, 157);
  box-shadow: none;

  &:hover {
    background-color: rgb(208, 227, 241);
    border-color: rgb(208, 227, 241);
    color: rgb(44, 88, 119);
  }
`;

export { WhiteButton, OrangeButton, BlueButton, BlueWhiteButton, TagButton };

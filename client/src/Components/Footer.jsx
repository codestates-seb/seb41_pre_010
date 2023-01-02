import React from "react";
import styled from "styled-components";
import "./Styles/Footer.css";
import { useSession } from "../CustomHook/SessionProvider";

const FooterLink = styled.a`
  text-decoration-line: none;
  color: black;
  margin-left: 2px;
`;

const FooterSpan = styled.span`
  color: hsl(210, 8%, 65%);
  font-size: ${(props) => (props.fontsize ? "24px" : "17px")};
  font-weight: ${(props) => props.fontWeight};
  margin-left: ${(props) => props.marginLft};
`;

export default function Footer() {
  const { loading } = useSession();
  const projectMember = [
    {
      memberName: "임경인",
      blogURL: "https://velog.io/@limdumb",
      gitURL: "https://github.com/limdumb",
      emailAdress: "ruddls980507@gmail.com",
    },
    {
      memberName: "서형민",
      blogURL: "https://velog.io/@growingdeveloper",
      gitURL: "https://github.com/sktjgudals",
      emailAdress: "sktjgudals10@gmail.com",
    },
    {
      memberName: "정호정",
      blogURL: "https://github.com/HJeong1200",
      gitURL: "https://github.com/HJeong1200",
      emailAdress: "hjeong1200@gmail.com",
    },
    {
      memberName: "한성현",
      blogURL: "https://han5ung.tistory.com/",
      gitURL: "https://github.com/HanSungHyeon",
      emailAdress: "gksroenro@gmail.com",
    },
    {
      memberName: "주성천",
      blogURL: "https://j3story.tistory.com/",
      gitURL: "https://github.com/jution113",
      emailAdress: "jution113@gmail.com",
    },
    {
      memberName: "표세웅",
      blogURL: "https://half-forty.tistory.com/",
      gitURL: "https://github.com/ppk150",
      emailAdress: "vytpdnd@gamil.com",
    },
  ];

  return (
    <>
      {!loading && (
        <footer className="Main_Footer">
          <div className="Project_Member_Container">
            {projectMember.map((el) => {
              return (
                <div key={el.memberName} className="Project_Member_Info">
                  <FooterSpan
                    fontsize
                    marginLft={"2px"}
                    color={"hsl(210, 8%, 65%)"}
                    fontWeight={"bold"}
                  >
                    {el.memberName}
                  </FooterSpan>
                  <div className="Member_Contour_Line" />
                  <FooterLink href={el.blogURL}>
                    <FooterSpan>📓 Blog</FooterSpan>
                  </FooterLink>
                  <FooterLink href={el.gitURL}>
                    <FooterSpan>🧑‍💻 GitHub</FooterSpan>
                  </FooterLink>
                  <FooterSpan marginLft={"2px"}>📧 Email</FooterSpan>
                  <FooterSpan marginLft={"2px"}>☁️ {el.emailAdress}</FooterSpan>
                </div>
              );
            })}
          </div>
        </footer>
      )}
    </>
  );
}

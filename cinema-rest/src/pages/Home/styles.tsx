import styled from "styled-components";
import bg from "../../assets/img/background-image.png";
import { colors } from "../../assets/styles/theme";

export const HomeContainer = styled.section`
  height: 1000px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${colors.darkestPurple};
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
`;

export const Input = styled.input`
  margin-right: 1%;
  width: 30%;
  padding: 15px;
  border-radius: 30px;
  border: 4px solid ${colors.darkPurple};
  font-family: "Inter";
  font-style: italic;
  font-size: 14px;
  box-shadow: 0 0 0.5rem ${colors.lightPurple};

  ::placeholder {
    color: ${colors.darkestPurple};
  }

  :focus,
  :hover {
    box-shadow: 0 0 0.5rem ${colors.darkPurple};
  }

  :focus,
  :hover,
  :not(:hover) {
    transition-duration: 0.2s;
  }
`;

export const SearchIcon = styled.img`
  :focus,
  :hover {
    cursor: pointer;
  }
`;

export const ErrorSpan = styled.span`
  margin-top: 1.5%;
  color: ${colors.light};
  margin: 0 auto;
  justify-content: center;
  // background-color: ${colors.light};
  // padding: 3%;
`;

import styled from "styled-components";
import bg from "../../assets/img/background-image.png";
import { colors } from "../../assets/styles/theme";

export const HomeContainer = styled.section`
  min-height: 1000px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${colors.darkestPurple};
  padding-bottom: 100px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  margin-top: 3%;
`;

export const InputLabel = styled.h1`
  background: ${colors.darkestPurple};
  color: ${colors.light};
  text-align: center;
  font-size: 28px;
  padding: 0 0.75%;
  border-radius: 10px;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
  box-shadow: 0 0 0.5rem ${colors.lightPurple};
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
    opacity: 0.5;
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

export const InputTextArea = styled.textarea`
  margin-right: 1%;
  width: 30%;
  padding: 15px;
  border-radius: 30px;
  border: 4px solid ${colors.darkPurple};
  font-family: "Inter";
  font-style: italic;
  font-size: 14px;
  box-shadow: 0 0 0.5rem ${colors.lightPurple};
  resize: none;

  ::placeholder {
    color: ${colors.darkestPurple};
    opacity: 0.5;
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

export const ErrorSpan = styled.span`
  margin-top: 1.5%;
  color: ${colors.light};
  background-color: darkred;
  padding: 5px 10px;
  border-radius: 22px;
  font-size: 20px;
  margin: 0 auto;
  margin-top: 10px;
  justify-content: center;
  // background-color: ${colors.light};
  // padding: 3%;
`;

import styled from "styled-components";
import { colors } from "../../assets/styles/theme";

export const FormButton = styled.button`
  background: ${colors.darkestPurple};
  color: ${colors.light};
  width: 15%;
  font-size: 32px;
  font-weight: 600;
  border-radius: 30px;
  padding: 10px 0;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 100px;
  box-shadow: 0 0 0.5rem ${colors.lightPurple};

  :hover {
    color: ${colors.darkestPurple};
    background: ${colors.light};
  }

  :hover,
  :not(:hover) {
    transition-duration: 0.3s;
  }
`;

import styled from "styled-components";
import { colors } from "../../assets/styles/theme";

export const FormButton = styled.button`
  background: ${colors.darkestPurple};
  color: ${colors.light};
  width: 300px;
  height: 86px;
  font-size: 32px;
  padding: 30px;
  font-weight: 600;
  border-radius: 30px;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;

  :hover {
    color: ${colors.darkestPurple};
    background: ${colors.light};
  }

  :hover,
  :not(:hover) {
    transition-duration: 0.3s;
  }
`;

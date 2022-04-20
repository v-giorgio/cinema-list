import styled from "styled-components";

import { colors } from "../../assets/styles/theme";

export const FooterSection = styled.footer`
  display: flex;
  background-color: ${colors.darkestPurple};
  justify-content: center;
  align-items: center;
  color: ${colors.light};
  width: 100%;
  height: 80px;
  padding: 0 68px;
`;

export const FooterText = styled.footer`
  display: flex;
  background-color: ${colors.darkestPurple};
  color: ${colors.light};
  font-size: 20px;
  font-weight: 1000;
`;

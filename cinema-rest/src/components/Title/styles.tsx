import styled from "styled-components";

import { colors } from "../../assets/styles/theme";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 68px;
`;

export const TitleText = styled.h1`
  background: ${colors.darkestPurple};
  color: ${colors.light};
  text-align: center;
  font-size: 48px;
  font-weight: 1000;
  width: 621px;
  padding: 1.5%;
  border-radius: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

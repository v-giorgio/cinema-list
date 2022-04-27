import styled from "styled-components";

import { colors } from "../../assets/styles/theme";

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 128px;
  align-items: center;
  padding: 0 64px;
  background-color: ${colors.darkestPurple};
`;
export const HeaderList = styled.header`
  display: flex;
  flex-direction: row;
  width: 25%;
  list-style: none;
  color: ${colors.light};
  font-weight: 1000;
  justify-content: space-between;
`;

export const HeaderItem = styled.li`
  :hover {
    color: ${colors.lightPurple};
    cursor: pointer;
  }

  :hover,
  :not(:hover) {
    transition-duration: 0.3s;
  }
  color: #fff;
`;

export const HeaderParagraph = styled.p``;

export const Styles = {
  link: {
    textDecoration: "none",
  },
};

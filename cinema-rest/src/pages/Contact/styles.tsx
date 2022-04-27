import styled from "styled-components";
import bg from "../../assets/img/background-image.png";
import { colors } from "../../assets/styles/theme";

export const MainContainer = styled.section`
  background-image: url(${bg});
  background-color: ${colors.darkestPurple};
`;

export const CardsGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2% 5%;
`;

import styled from "styled-components";
import { colors } from "../../assets/styles/theme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkestPurple};
  color: ${colors.light};
  border-radius: 22px 22px 0 0;
  border: 2px solid ${colors.darkestPurple};
  box-shadow: 0 0 0.5rem ${colors.lightPurple};
  margin: 5% 10%;
`;

export const Photo = styled.img`
  height: 80%;
  border-radius: 22px 22px 0 0;
  width: 350px;
  height: 350px;
`;

export const Name = styled.h1`
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 20px;
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialMediaIcon = styled.a`
  opacity: 0.6;

  :hover {
    opacity: 1;
  }
`;

export const Styles = {
  iconPadding: {
    paddingRight: 10,
  },
};

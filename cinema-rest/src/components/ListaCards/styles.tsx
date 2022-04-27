import styled from "styled-components";
import { colors } from "../../assets/styles/theme";

export const CardSection = styled.div`
  background: ${colors.darkestPurple};
  display: flex;
  width: 78%;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 22px;
  color: ${colors.light};
  border: 2px solid ${colors.darkestPurple};
`;

export const CardTitulo = styled.p`
  margin-top: 31px;
  font-weight: 600;
  font-size: 36px;
  line-height: 39px;
`;

export const CardData = styled.p`
  margin-top: 8px;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 24.2px;
`;

export const Image = styled.img`
  max-width: 300px;
  border-radius: 22px 0 0 22px;
`;

export const CardTag = styled.span`
  color: ${colors.lightPurple};
`;

export const CardText = styled.p`
  margin-top: 8px;
  max-width: 800px;
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29.05px;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  margin-top: 31px;
`;

export const Text = styled.div`
  margin-right: 22px;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
`;

export const Deleteicon = styled.div`
  opacity: 0.6;
  align-self: flex-end;
  margin-left: 3%;
  margin-bottom: 2%;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Editicon = styled.div`
  align-self: flex-end;
  opacity: 0.6;
  margin-bottom: 2%;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const CardDiv = styled.div`
  margin-left: 53px;
  padding-bottom: 3%;
`;

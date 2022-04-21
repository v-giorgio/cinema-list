import styled from "styled-components";
import { colors } from "../../assets/styles/theme";

export const CardSection = styled.div`
  background: ${colors.darkestPurple};
  display: flex;
  width: 1328px;
  height: 515px;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 22px;
  color: ${colors.light};
  border: 2px solid ${colors.darkestPurple};
`;
export const CardImg = styled.div.attrs((props: { image: string }) => props)`
  height: 80%;
  background: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 22px 22px 0 0;
`;
export const CardTitulo = styled.p`
  display: flex;
  margin-top: 31px;
  text-align: left;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  `;

  export const IconStar = styled.img`
  margin-left: 600px;

  `;

  export const CardData = styled.p`
  display: flex;
  margin-top: 8px;
  text-align: left;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24.2px;
  `;

  export const CardText = styled.p`
  margin-top: 8px;
  text-align: left;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 29.05px;
  `;

export const CardDiv = styled.div`
  margin-left: 53px;
`;

export const AddButton = styled.button`
  border-radius: 50px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0.6;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

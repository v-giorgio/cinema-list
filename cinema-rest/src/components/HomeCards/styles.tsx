import styled from "styled-components";
import { colors } from "../../assets/styles/theme";

export const CardSection = styled.div`
  background: ${colors.darkestPurple};
  width: 304px;
  height: 530px;
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
export const CardText = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
`;

export const CardInf = styled.div`
  display: flex;
  height: 20%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
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

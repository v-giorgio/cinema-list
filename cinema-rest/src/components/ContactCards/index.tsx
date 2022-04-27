import React from "react";
import { ReactComponent as Linkedin } from "../../assets/img/linkedin-icon.svg";
import { ReactComponent as Github } from "../../assets/img/github-icon.svg";
import {
  Card,
  Photo,
  Name,
  Icons,
  Subtitle,
  Styles,
  SocialMediaIcon,
} from "./styles";

function ContactCards({ url, alt, contactName, linkedin, github }: any) {
  return (
    <Card>
      <Photo src={url} alt={alt} />
      <Subtitle>
        <Name>{contactName}</Name>
        <Icons>
          <SocialMediaIcon href={linkedin}>
            <Linkedin style={Styles.iconPadding} />
          </SocialMediaIcon>
          <SocialMediaIcon href={github}>
            <Github />
          </SocialMediaIcon>
        </Icons>
      </Subtitle>
    </Card>
  );
}

export default ContactCards;

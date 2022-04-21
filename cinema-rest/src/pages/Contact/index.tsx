import React from "react";
import Title from "../../components/Title";
import { MainContainer, CardsGroup } from "./styles";

import ContactCards from "../../components/ContactCards";

function Contact() {
  return (
    <MainContainer>
      <Title title="Contato" />
      <CardsGroup>
        <ContactCards
          url={require("../../assets/img/sinaria.jpg")}
          alt="Sinária"
          contactName="Sinária Carvalho"
          linkedin="https://www.linkedin.com/in/sin%C3%A1ria-carvalho-1a180a18b/"
          github="https://github.com/Sinariac"
        />
        <ContactCards
          url={require("../../assets/img/vitor.jpg")}
          alt="Vitor"
          contactName="Vitor Giorgio"
          linkedin="https://www.linkedin.com/in/vitor-lucio-giorgio/"
          github="https://github.com/v-giorgio"
        />
        <ContactCards
          url={require("../../assets/img/foto_rodrigo.jpeg")}
          alt="Rodrigo"
          contactName="Rodrigo Cruz"
          linkedin="https://www.linkedin.com/in/rodrigonascimentocruz/"
          github="https://github.com/rodrigoncruz"
        />
        <ContactCards
          url={require("../../assets/img/laissa.jpg")}
          alt="Laissa"
          contactName="Laissa Fernandes"
          linkedin="https://www.linkedin.com/in/laissafernandes/"
          github="https://github.com/laissafernandes"
        />
      </CardsGroup>
    </MainContainer>
  );
}

export default Contact;

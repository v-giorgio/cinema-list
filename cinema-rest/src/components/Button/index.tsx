import React from "react";
import { FormButton } from "./style";

function Button({ title, handleForm }: any) {
  return <FormButton onClick={() => handleForm()}>{title}</FormButton>;
}

export default Button;

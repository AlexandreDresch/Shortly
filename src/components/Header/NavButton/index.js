import { Link } from "react-router-dom";

import { ButtonContainer } from "./styles";

export function NavButton({ text, route, color }) {
  return (
    <Link to={route}>
      <ButtonContainer color={color}>{text}</ButtonContainer>
    </Link>
  );
}

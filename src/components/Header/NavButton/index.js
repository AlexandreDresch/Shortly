import { Link } from "react-router-dom";

import { ButtonContainer } from "./styles";

export function NavButton({ text, route, color, onClick }) {
  return (
    <Link to={route}>
      <ButtonContainer color={color} onClick={onClick}>{text}</ButtonContainer>
    </Link>
  );
}

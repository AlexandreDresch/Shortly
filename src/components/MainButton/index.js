import { ThreeDots } from "react-loader-spinner";

import { ButtonContainer, Text } from "./styles";

export function MainButton({ text, disabled, onClick }) {
  return (
    <ButtonContainer type="submit" onClick={onClick}>
      {disabled ? (
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <Text>{text}</Text>
      )}
    </ButtonContainer>
  );
}

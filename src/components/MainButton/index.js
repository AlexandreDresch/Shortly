import { ButtonContainer } from "./styles";

export function MainButton ({text}) {
    return (
        <ButtonContainer type="submit">
            {text}
        </ButtonContainer>
    )
}
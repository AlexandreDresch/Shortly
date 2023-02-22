import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 3px;
    color: ${(props) => (props.color)};
    cursor: pointer;
    font-family: "Lexend Deca";
    font-size: 14px;
    font-weight: 400;

    &:hover {
    background-color: #f1f1f1;
  }
`;
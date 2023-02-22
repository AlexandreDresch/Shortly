import styled from "styled-components";

export const Container = styled.div``;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    gap: 70px;
    margin-top: 140px;
    margin-bottom: 60px;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 42px;
`;

export const LinkContainer = styled.div`
    display: flex;
    min-width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: #80CC74;
    padding-left: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    font-family: "Lexend Deca";
    font-size: 16px;
`;

export const Link = styled.p`
    color: #FFFFFF;
`;

export const Code = styled.p`
    color: #FFFFFF;
`;

export const Views = styled.p`
    color: #FFFFFF;
`;

export const LinkDeleteButton = styled.div`
    width: 130px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    cursor: pointer;
    border-radius: 0px 12px 12px 0px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    
    &:hover {
        background-color: #f1f1f1;
    }
`;
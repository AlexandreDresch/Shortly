import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 60px;
`;
export const TitleImage = styled.img``;

export const TitleText = styled.h1`
    font-family: "Lexend Deca";
    font-weight: 700;
    font-size: 36px;
`;

export const RankingContainer = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    margin-bottom: 80px;
`;

export const RankingText = styled.p`
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 22px;
`;

export const RankingName = styled.span`
    font-weight: 500;
`;
import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: 700;
    box-shadow: none;

    :focus-visible {
        outline: none;
    }
`
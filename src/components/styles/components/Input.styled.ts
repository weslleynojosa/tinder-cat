import styled from "styled-components";

export const Input = styled.input`
    background: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.borderRadius.small};
    border: none;
    height: 25px;
    padding: 10px 15px;
    font-size: 1em;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 20px;
    border: solid 1px ${props => props.theme.colors.primary};

    :focus-visible {
        outline: none;
    }
`
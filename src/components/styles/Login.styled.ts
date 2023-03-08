import styled from "styled-components";
import { Button } from "./components/Button.styled";
import { Div } from "./components/Div.styled";


export const Container = styled.div`
    background: rgba(180, 40, 40, 0.24);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`

export const FrontImg = styled.div`
    width: 65%;
    height: 45%;
    margin-top: 30px;
    max-width: 240px;
    position: relative;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 80%;
    padding-bottom: 40px;

    label {
        font-weight: 900;
        font-size: ${props => props.theme.fontSizes.xs};
        color: ${props => props.theme.colors.primary};
        margin-bottom: 5px;
    }
`

export const Submit = styled(Button)`
    border-radius: 5px;
    background-color: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.white};
    padding: 10px;
    margin-top: 10px;

`

export const PassWord = styled(Div)`
    width: 100%;
    position: relative;
    flex-direction: row;

    input {
        width: 100%;
    }
`

export const ShowPassword = styled(Button)`
    position: absolute;
    right: 10px;
    height: 25px;
    margin-top: 12.5px;
    background: none;
`

export const Alert = styled.span`
    width: 100%;
    height: 15px;
    text-align: center;
    color: ${props => props.theme.colors.alert};
    margin-top: 5px;
    font-weight: 800;
    font-size: ${props => props.theme.fontSizes.xs};
`
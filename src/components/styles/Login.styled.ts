import styled from "styled-components";


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
    margin-top: 30px;
    width: 65%;
    max-width: 240px;

    img {
        width: 100%;
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 80%;
    padding-bottom: 40px;

    label {
        font-weight: 900;
        font-size: 0.9em;
        color: #FF8B37;
        margin-bottom: 5px;
    }

    input {
        background: #FFF;
        border-radius: 5px;
        border: none;
        height: 25px;
        padding: 10px 15px;
        font-size: 1em;
        font-weight: 600;
        color: #FF8B37;
        margin-bottom: 20px;
        border: solid 1px #FF8B37;
    }

    input:focus-visible {
        outline: none;
    }

    button {
        border: none;
        border-radius: 5px;
        background-color: #ff451d;
        color: #FFF;
        font-size: 20px;
        font-weight: 700;
        padding: 10px;
        margin-top: 10px;
    }

    span {
        width: 100%;
        height: 15px;
        text-align: center;
        color: #FF0000;
        margin-top: 5px;
        font-weight: 800;
        font-size: 0.8em;
    }
`

export const PassWord = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;

    button {
        position: absolute;
        right: 10px;
        height: 25px;
        margin-top: 2.5px;
        border: none;
        background: none;
    }

    input {
        width: 100%;
    }
`
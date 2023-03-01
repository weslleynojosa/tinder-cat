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
    max-width: 280px;

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
        font-size: 0.8em;
        color: #FFF;
        margin-bottom: 5px;
    }

    input {
        background: rgba(255, 2, 2, 0.1);
        border-radius: 5px;
        border: none;
        height: 25px;
        padding: 10px 15px;
        font-size: 1em;
        font-weight: 600;
        color: #FFF;
        margin-bottom: 20px;
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
`
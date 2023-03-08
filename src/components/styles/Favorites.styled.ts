import styled from "styled-components"
import { Button } from "./components/Button.styled"
import { Div } from "./components/Div.styled"

export const Fav = styled(Div)`
    width: 100%;
    align-items: center;
    margin: 0 auto;
    position: relative;
`

export const Header = styled(Div)`
    width: 600px;
    height: 55px;
    position: fixed;
    top: 0;
    flex-direction: row;
    justify-content: center;
    background: #FFF;
    z-index: 1;

    @media (max-width: 600px) {
        width: 100%;
    }
`

export const Title = styled.img`
    margin: 0 auto;
`

export const ActionButton = styled.div`
    position: absolute;
    left: 0;
    margin: 10px 0 15px;
`

export const CatGrid = styled.div`
    display: grid;
    width: 95%;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    grid-auto-rows: 1fr;
    margin: 65px auto 10px;

    @media (max-width: 400px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`

export const CardFav = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    height: 300px;
`

export const RemoveFavorite = styled(Button)`
    background: ${props => props.theme.colors.green};
    border-radius: ${props => props.theme.borderRadius.circle};
    width: 45px;
    height: 45px;
    position: absolute;
    right: 10px;
    top: 10px;

    :hover {
        background: ${props => props.theme.colors.alert};
    }

    :focus {
        background: ${props => props.theme.colors.alert};
    }

`

export const EmptyFav = styled(Div)`
    margin: 65px auto 10px;
    width: 100%;
    align-items: center;

    img {
        width: 30%;
    }

    span {
        font-size: 1em;
        font-weight: 700;
        color: #FF8B37;
        padding: 30px;
        text-align: center;
    }
`
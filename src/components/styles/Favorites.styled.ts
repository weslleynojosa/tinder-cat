import Link from "next/link"
import styled from "styled-components"

export const Fav = styled.div`
    width: 100%;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    position: relative;
`

export const Header = styled.div`
    position: fixed;
    top: 0;
    width: 600px;
    display: flex;
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

export const ActionButton = styled(Link)`
    position: absolute;
    left: 0;
    margin: 10px 0 15px;

    button {
        border: none;
        background: #FFF;
    }
`

export const CatGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    grid-auto-rows: 1fr;
    margin: 65px auto 10px;

    @media (max-width: 400px) {
        grid-template-columns: 1fr
    }
`

export const CardFav = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;

    .cat-photo {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    button {
        border: none;
        background-color: #00C271;
        border-radius: 100%;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 5px;
        top: 5px;
    }
`

export const EmptyFav = styled.div`
    margin: 65px auto 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
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
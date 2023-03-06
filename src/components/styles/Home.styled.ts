import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
    width: 600px;
    margin: 0 auto;

    @media (max-width: 600px) {
        width: 100%;
    }

`

export const Home = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    position: relative;
`

export const Logo = styled(Image)`
    margin: 10px 0 15px;
`

export const Favorite = styled(Link)`
    position: absolute;
    right: 0;
    margin: 10px 0 15px;

    button {
        border: none;
        background: #FFF;
    }
`

export const Logout = styled.button`
    position: absolute;
    left: 0;
    margin: 10px 0 15px;
    border: none;
    background: #FFF;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`

export const Button = styled.button`
    background: #FFFFFF;
    box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
    border: none;
    border-radius: 100%;
    margin: 10px 50px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    :focus-visible {
        outline: none;
    }
`
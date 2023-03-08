import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { Button } from './components/Button.styled'
import { Div } from './components/Div.styled'

export const Container = styled.div`
    width: 600px;
    margin: 0 auto;

    @media (max-width: 600px) {
        width: 100%;
    }

`

export const Home = styled(Div)`
    width: 100%;
    height: 100vh;
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
`

export const Logout = styled(Button)`
    position: absolute;
    left: 0;
    margin: 10px 0 15px;
    box-shadow: none;
`

export const Buttons = styled(Div)`
    flex-direction: row;
    margin-top: 10px;
`

export const VoteButton = styled(Button)`
    border-radius: ${props => props.theme.borderRadius.circle};
    margin: 10px 50px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
`
import styled from 'styled-components'
import { Div } from './components/Div.styled'

export const CardCat = styled.div`
    width: 95%;
    height: 77%;
    position: relative;
    margin: 0 10px;
    border-radius: ${props => props.theme.borderRadius.default};
    box-shadow: ${props => props.theme.boxShadow};
    overflow: hidden;
`

export const Empty = styled(CardCat)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardInfo = styled(Div)`
    position: absolute;
    background: rgb(66 66 66 / 40%);;
    width: 100%;
    z-index: 1;
    bottom: 0;
    padding: 15px 20px 15px 20px;
    justify-content: space-between;
`

export const CatData = styled(Div)`
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: 700;
    color: ${props => props.theme.colors.white};
    margin-bottom: 10px;

    img {
        width: 15px;
        margin-right: 5px;
    }
`

export const Info = styled(Div)`
    flex-direction: row;
    margin-bottom: 7px;
    align-items: center;
`

export const Tags = styled(Div)`
    flex-direction: row;
    justify-content: flex-start;
    font-size: ${props => props.theme.fontSizes.xxs};
`

export const Tag = styled.div`
    box-shadow: ${props => props.theme.boxShadow};
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.gray};
    padding: 6px 15px;
    border-radius: ${props => props.theme.borderRadius.medium};
    margin-right: 5px;
    font-weight: 700;
`
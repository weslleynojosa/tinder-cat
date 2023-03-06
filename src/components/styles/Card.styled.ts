import styled from 'styled-components'

export const CardCat = styled.div`
    width: 95%;
    height: 77%;
    position: relative;
    margin: 0 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 20%);
    overflow: hidden;

    /* .cat-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    } */
`

export const Empty = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 77%;
    position: relative;
    margin: 0 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 20%);
    overflow: hidden;

    img {
        width: 150px;
        height: 150px;
    }
`

export const CardInfo = styled.div`
    position: absolute;
    background: rgb(66 66 66 / 40%);;
    width: 100%;
    z-index: 999;
    bottom: 0;
    padding: 15px 20px 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .cat-data {
        font-size: 0.9em;
        font-weight: 700;
        color: #FFF;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        .info {
            display: flex;
            flex-direction: row;
            margin-bottom: 7px;
        }

        img {
            width: 15px;
            margin-right: 5px;
        }
    }
`

export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 0.65em;
`

export const Tag = styled.div`
    box-shadow: 0px 3.12057px 15.6028px rgb(0 0 0 / 10%);
    background: #FFF;
    color: #A2A2A2;
    padding: 6px 15px;
    border-radius: 15px;
    margin-right: 5px;
    font-weight: 700;
`
import { favActions, getFavorites } from '@/app/fav-slice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { back, cryCat, favTitle, pets } from '@/common/Icons'
import Api from '@/common/axios'
import { ActionButton, CardFav, CatGrid, EmptyFav, Fav, Header, Title } from '@/components/styles/Favorites.styled'
import { Container } from '@/components/styles/Home.styled'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export type FavCat = {
    id: number,
    image: {
        id: string,
        url: string   
    }
}

const Favorites = () => {
    //listar favoritos do usuário logado
    //redux para guardar os favoritos
    const favCats = useAppSelector(state => state.favorite)
    const userToken = useAppSelector(state => state.auth.userData)
    const router = useRouter()
    const dispatch = useAppDispatch()
    useEffect(() => {
        userToken ? dispatch(getFavorites(userToken)) : router.push('/Login')
    }, [])

    const removeFavorite = (id: number) => {
        Api.delete(`/favourites/${id}`)
        .then((res) => {
            dispatch(favActions.removeFavorite(id))
        })
        .catch((error) => {
            console.log('erro ao remover favorito')
        })
    }

    const handleClick = () => {
        router.push('/Tinder')
    }

    return (
        <Container>
            <Fav>
                <Header>
                    <Title src={favTitle.src}/>
                    <ActionButton>
                        <button onClick={handleClick}><img src={back.src}/></button>
                    </ActionButton>
                </Header>
                { favCats.cats && favCats.cats.length ? 
                <CatGrid>
                    {favCats.cats.map((cats, index) => {
                        return <CardFav key={index}>
                                <img className='cat-photo' src={cats.image.url}/>
                                <button onClick={() => { removeFavorite(cats.id) }}><img src={pets.src}/></button>
                            </CardFav>
                    })}
                </CatGrid> :
                <EmptyFav>
                    <img src={cryCat.src}/>
                    <span>Parece que você não gostou de nenhum gatinho</span>
                </EmptyFav>
                }
            </Fav>
        </Container>
    )

}

export default Favorites
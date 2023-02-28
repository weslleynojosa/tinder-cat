import { favActions, getFavorites } from '@/app/fav-slice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { back, favTitle, pets } from '@/assets/Icons'
import Api from '@/common/axios'
import { ActionButton, CardFav, CatGrid, Fav, Header, Title } from '@/components/styles/Favorites.styled'
import { Container } from '@/components/styles/Home.styled'
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
    // const [favCats, setFavCats] = useState<FavCat[]>([])
    const favCats = useAppSelector(state => state.favorite)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getFavorites())
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

    return (
        <Container>
            <Fav>
                <Header>
                    <Title src={favTitle.src}/>
                    <ActionButton href={'/Tinder'}>
                        <button><img src={back.src}/></button>
                    </ActionButton>
                </Header>
                <CatGrid>
                    {favCats.cats?.map((cats, index) => {
                        return <CardFav key={index}>
                                <img className='cat-photo' src={cats.image.url}/>
                                <button onClick={() => { removeFavorite(cats.id) }}><img src={pets.src}/></button>
                            </CardFav>
                    })}
                </CatGrid>
            </Fav>
        </Container>
    )

}

export default Favorites
import Api from '@/common/axios'
import React, { useEffect, useState } from 'react'

type FavCat = {
    id: number,
    image: {
        id: string,
        url: string   
    }
}



const Favorites = () => {
    //listar favoritos do usuário logado
    //redux para guardar os favoritos
    const [favCats, setFavCats] = useState<FavCat[]>([])

    useEffect(() => {
        Api.get('/favourites', { params: {'sub_id': 'test_user_123'} })
        .then((res) => {
            let favs: Array<FavCat> = []
            res.data.map((cat: FavCat) => {
                favs.push({ id: cat.id, image: { id: cat.image.id, url: cat.image.url } })
            })
            setFavCats(favs)
        })
        .catch((error) => {
            console.log(error)
          })
    }, [])

    const removeFavorite = (id: number) => {
        Api.delete(`/favourites/:${id}`)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log('erro ao remover favorito')
        })
    }

    return (
        <>
        <ul>
            {favCats?.map((cats) => {
                return <li>{cats.image.url}</li>
            })}
        </ul>
        </>
    )

}

export default Favorites
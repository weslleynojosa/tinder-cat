import Api from '@/common/axios'
import React, { useEffect, useState } from 'react'

type FavCat = {
    id: string,
    url: string
}

type Response = {
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
            res.data.map((cat: Response) => {
                let {id, url}: FavCat = cat.image
                favs.push({id: id, url: url})
            })
            setFavCats(favs)
        })
        .catch((error) => {
            console.log(error)
          })
    }, [])

    return (
        <>
        <ul>
            {favCats?.map((cats) => {
                return <li>{cats.url}</li>
            })}
        </ul>
        </>
    )

}

export default Favorites
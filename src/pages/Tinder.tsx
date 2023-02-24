import Api from '@/common/axios'
import React, { useEffect, useState } from 'react'

type Cat = {
    id: string,
    breeds: {
        origin: string,
        temperament: Array<string>,
        weight: {
          metric: string
        }
    },
    url: string
  }


const Tinder = () => {
    const [catData, setCatData] = useState<Cat>()

    const getNewCat = () => {
        Api.get('/images/search', { params: {'has_breeds' : 1} })
        .then((res) => {
          let catRes = {} as Cat
          let temperament: Array<string> = res.data[0].breeds[0].temperament.split(/[, ]+/)
          catRes = { 
              id: res.data[0].id, 
              breeds: {
                  origin: res.data[0].breeds[0].origin,
                  temperament: temperament,
                  weight: {
                      metric: res.data[0].breeds[0].weight.metric
                  }
              },
              url: res.data[0].url
          }
          setCatData(catRes)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    useEffect(() => {
        getNewCat()
  }, [])

  const setFavorite = (id: string) => {
    const data = {
        'image_id': id,
        'sub_id': 'test_user_123'
    }

    Api.post('favourites', data)
    .then((res) => {
        console.log(res)
        getNewCat()
    })
    .catch((error) => {
        console.log(error)
    })
  }

  return (
    <>
        <div>
            <img  src={catData?.url}/>
            <button onClick={() => { getNewCat()} }>NO</button>
            <button onClick={() => { setFavorite(catData?.id as string)} }>YES</button>
        </div> 
    </>
  )

}

export default Tinder
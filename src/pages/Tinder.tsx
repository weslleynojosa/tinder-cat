import { btPets, fav, logo, nope } from '@/assets/Icons'
import Api from '@/common/axios'
import Card from '@/components/Card'
import EmptyCard from '@/components/EmptyCard'
import { Button, Buttons, Container, Favorite, Home, Logo } from '@/components/styles/Home.styled'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export type Cat = {
    id: string,
    breeds: {
        origin: string,
        name: string
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
        setCatData(undefined)
        Api.get('/images/search', { params: {'has_breeds' : 1} })
        .then((res) => {
          let catRes = {} as Cat
          let temperament: Array<string> = res.data[0].breeds[0].temperament.split(/[, ]+/)
          catRes = { 
              id: res.data[0].id, 
              breeds: {
                  origin: res.data[0].breeds[0].origin,
                  name: res.data[0].breeds[0].name,
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
    <Container>
        <Home>
            <Logo src={logo.src}/>
            <Favorite href={'/Favorites'}>
                <button><img src={fav.src}/></button> 
            </Favorite>       
            { catData ? <Card catData={catData}/> : <EmptyCard/> }
            <Buttons>
                <Button onClick={() => { getNewCat()} }><img src={nope.src}/></Button>
                <Button onClick={() => { setFavorite(catData?.id as string)} }><img src={btPets.src}/></Button>
            </Buttons>
        </Home> 
    </Container>
  )

}

export default Tinder
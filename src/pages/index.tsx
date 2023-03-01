import { Quicksand } from '@next/font/google'
import Tinder from './Tinder'
import Favorites from './Favorites'
import GlobalStyles from '@/components/styles/Global.styled'
import { useAppSelector } from '@/app/hooks'
import Login from './Login'

// const quickSand = Quicksand({ subsets: ['latin'] })

export default function Home() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
 
  return (
    <>
      <GlobalStyles />
      { !isLoggedIn && <Login/>}
      { isLoggedIn && <Tinder/>}
    </>
  )
}

import { Quicksand } from '@next/font/google'
import Tinder from './Tinder'
import Favorites from './Favorites'
import GlobalStyles from '@/components/styles/Global.styled'

// const quickSand = Quicksand({ subsets: ['latin'] })

export default function Home() {
 
  return (
    <>
      <GlobalStyles />
      <Tinder/>
      {/* <Favorites/> */}
    </>
  )
}

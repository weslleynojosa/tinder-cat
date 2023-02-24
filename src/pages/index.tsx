import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Api from '@/common/axios'
import Tinder from './Tinder'
import Favorites from './Favorites'

export default function Home() {
 
  return (
    <>
      {/* <Tinder/> */}
      <Favorites/>
    </>
  )
}

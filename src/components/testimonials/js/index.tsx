"use client"
import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Header from './Header'
import Footer from './Footer'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'

function Emb() {
  

const OPTIONS: EmblaOptionsType = { containScroll: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


  return (
    <div>    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
</div>
  )
}

export default Emb

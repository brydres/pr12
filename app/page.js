import Image from 'next/image'
import Header from './components/Header'
import Container from './components/Container'
import Main from './components/Main'
import Footer from './components/Footer'
import "@/app/globals.css"

export default function Home() {
  return (
    <>
    <Header />
    <Container />
    <Main />
    <Footer />

    </>
  )
}

import Head from 'next/head'

import NavBar from 'components/NavBar'
import Blog from 'components/Blog'

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Kelvin - Mahatthana (Kelvin) Nomwasadi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Blog />
    </>
  )
}

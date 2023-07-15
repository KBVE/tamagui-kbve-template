import { Auth } from 'app/features/auth/auth'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title> Auth </title>
      </Head>
      <Auth />
    </>
  )
}

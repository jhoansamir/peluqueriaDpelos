import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/dist/shared/lib/router/router';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
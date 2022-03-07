import { Header } from '../components/Header'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'; 
import '../styles/global.scss'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <NextAuthProvider
      session={ session }
    >
      <Header />
      <Component { ...pageProps } />
    </NextAuthProvider>
  )
}
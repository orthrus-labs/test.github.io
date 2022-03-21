import '../styles/global.css'
import type { AppProps } from 'next/app'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'
import { hooks as coinbaseWalletHooks, coinbaseWallet } from '../lib/connectors/coinbaseWallet'
import { hooks as metaMaskHooks, metaMask } from '../lib/connectors/metaMask'
import { hooks as walletConnectHooks, walletConnect } from '../lib/connectors/walletConnect'
import { Navbar } from '../lib/components/Navbar'
import { Footer } from '../lib/components/Footer'
import Head from 'next/head'

const connectors: [MetaMask | WalletConnect | CoinbaseWallet, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
]
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Web3ReactProvider>
  )
}

export default MyApp

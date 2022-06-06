import 'tailwindcss/tailwind.css'
import { APP_NAME } from '@/lib/consts'
import '@rainbow-me/rainbowkit/styles.css'
import { Chain, chain, createClient, WagmiConfig } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { apiProvider, configureChains, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'

/*
https://public-node-api.klaytnapi.com/v1/baobab
https://api.baobab.klaytn.net:8651
https://public-node-api.klaytnapi.com/v1/baobab
*/

const baobabChain: Chain = {
  id: 1001,
  name: 'Baobab',
  network: 'klaytn',
  nativeCurrency: {
    decimals: 18,
    name: 'Klay',
    symbol: 'KLAY',
  },
  rpcUrls: {
    default: 'https://public-node-api.klaytnapi.com/v1/baobab',
  },
//   blockExplorers: {
//     default: { name: 'KlaytnScope', url: 'https://baobab.scope.klaytn.com/' },
//   },
  testnet: true,
}

const { chains, provider } = configureChains(
	[baobabChain],
	[
		jsonRpcProvider({
			rpc: (chain) => ({
				http: `https://api.baobab.klaytn.net:8651`,
			}),
		}),
	]
)

const { connectors } = getDefaultWallets({ appName: APP_NAME, chains })
const wagmiClient = createClient({ autoConnect: true, connectors, provider })

const App = ({ Component, pageProps }) => {
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

export default App

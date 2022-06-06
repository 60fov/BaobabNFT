import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ConnectWallet from '@/components/ConnectWallet';
import Gallery from '@/components/Gallery';

const Home: FC = () => {
	return (
		<div> 
			{/* <ConnectButton></ConnectButton> */}
			<div className="absolute right-5 top-5">
				<ConnectWallet></ConnectWallet>
			</div>
			<div className="w-screen h-screen flex justify-center items-center overflow-hidden">
				<Gallery></Gallery>
			</div>
		</div>
	)
}

export default Home

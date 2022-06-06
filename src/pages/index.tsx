import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet';
import Gallery from '@/components/Gallery';

const Home: FC = () => {
	return (
		
		<div> 
			<h1 className="text-4xl font-bold absolute left-5 top-5"> {APP_NAME} </h1>
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

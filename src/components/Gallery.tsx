import { FC, useState, useEffect } from 'react'
import { useContractWrite, useContractRead, useAccount } from 'wagmi'
import { } from '@rainbow-me/rainbowkit'
import { CONTRACT_ADDR, CONTRACT_ABI } from '@/lib/consts';
import GalleryImage from '@/components/GalleryImage';

type Visibility = 'always' | 'connected' | 'not_connected'

function* range(start: number, end: number) {
  for (let i=start; i <= end; i++) {
    yield i;
  }
}

const Gallery: FC<{ show?: Visibility }> = ({ show = 'always' }) => {
    const { data: account } = useAccount()
    const config = {
            addressOrName: CONTRACT_ADDR,
            contractInterface: CONTRACT_ABI,
        }

    const [ uri, setUri ] = useState("");
    const [ imgSrc, setImgSrc ] = useState(""); 
    const [ id, setId ] = useState(1);

    const uriRead = useContractRead(
        config,
        'uri',
        {
            onSuccess(data) {
                let _uri = data.toString()
                // console.log("fetched uri", _uri);
                setUri(_uri);
                let src = _uri.replace("json/{id}.json", `images/${id.toString()}.png`);
                // console.log(src);
                setImgSrc(src);
            },
            args: [0]
        },
    )

    const { data, isError, isLoading, write: mint } = useContractWrite(
        config,
        'mint',
        {
            onMutate( {args, overrides} ) {

            },
            args: [ account?.address, id, 1, []]
        }
    )

    useEffect(() => {
        // console.log(imgSrcs)
    })
    
    return (
        <div className="flex flex-col items-center gap-8">
            <div  className="flex gap-5 aspect-square w-96">
                <img src={imgSrc} className="shadow-xl"></img>
            </div>
            <button className="px-5 py-2 bg-emerald-500 text-white shadow-md rounded-sm w-max transition-all hover:bg-emerald-400" onClick={() => mint()}>Mint</button>
        </div>
    )
}

export default Gallery

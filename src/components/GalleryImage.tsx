import { FC, useState, useEffect } from 'react'
import { useContractWrite, useContractRead } from 'wagmi'
import { } from '@rainbow-me/rainbowkit'
import { CONTRACT_ADDR, CONTRACT_ABI } from '@/lib/consts';

type Visibility = 'always' | 'connected' | 'not_connected'

const Gallery: FC<{ src: string, show?: Visibility }> = ({ src, show = 'always' }) => {
    const [ loaded, setLoaded ] = useState(false);
    return (
        <div className="">
            <img onLoad={() => {console.log("image loaded", src);setLoaded(true)}} className="w-96 h-96 inline-block shadow-2xl" src={src}></img>
            { !loaded ? <div className="w-5 border-b-2 border-black animate-spin"></div> : null } 
        </div>        
    )
}

export default Gallery

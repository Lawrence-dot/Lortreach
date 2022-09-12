import React from 'react';
import Image from 'next/image'

export interface cardType {
    src : string,
    name: string,
    active: number,
    total: number
    eth: number
}

export interface tcardType {
    name: string,
    eth: number,
    src: string,
    percent: number
}

export const TCards: tcardType[] = [
    {name: "Web3 Developers", src:"/images/t1.jpg",eth:4.789, percent : 34.52 },
    {name: "Ecommerce Developers", src:"/images/t2.jpg",eth:4.589, percent : 10.23 },
    {name: "Game Developers", src:"/images/tab2.jpg",eth:4.119, percent : 20.52 },
    {name: "Data Analyst", src:"/images/man.jpg",eth:4.789, percent : 26.52 }
  ];

function Card(props: cardType) {
    return (
        <div className={`card mx-auto  sm:mx-2 px-1 pb-3`}>
            <Image className='tabImg bg-none' src={props.src} width={570} height={488} />
            <div className="faangInfo mx-3 sm:mx-2 flex">
                <p className='w-32'> {props.name} </p>
                <div className="fangImgs justify-end block ml-auto">
                    <Image className='rounded-full' src={'/assets/1.jpg'} height={20} width={20} />
                    <Image className='faangM rounded-full' src={'/assets/two.svg'} height={20} width={20} />
                    <Image className='faangM rounded-full' src={'/assets/3.jpg'} height={20} width={20} />
                    <Image className='faangM rounded-full' src={'/assets/4.jpg'} height={20} width={20} /> 
                 </div>
            </div>

            <div className="faangEth m-3 sm:m-2 flex">
                <div className='flex ethContainer'>
                    <svg width="11" height="19" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9176 10.1374L5.68246 13.4177L0.443863 10.1374L5.68246 0.918579L10.9176 10.1374ZM5.68246 14.4711L0.443863 11.1908L5.68246 19.0169L10.9211 11.1908L5.68246 14.4711Z" fill="#00AC4F"/>
                    </svg>
                    <span className='ethValue text-sm sm:text-md'>{props.eth}ETH</span>
                </div>
                <div className='ml-auto'>
                    <span className='text-black text-sm  sm:text-md block ml-auto'> {props.active} of {props.total} devs available</span>
                </div>
            </div>

            <div className="hireBtn m-3 sm:m-2">
                <button className='border w-full py-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white'> 
                    Hire Now
                </button>
            </div>
        </div>
    )
}

export function TCard(props: tcardType) {
    return(
        <div className="tCard p-2 w-full md:w-1/2 m-2 flex">
            <div className="tImg">
                <Image src={props.src} height={100} width={100} />
            </div>

            <div className="tInfo ml-2 my-auto">
                <p className='font-semibold text-sm sm:text-md md:text-lg'> {props.name} </p>
                <div className="flex mt-1">
                    <span>
                    <svg width="11" height="19" viewBox="0 0 11 20" fill="#000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9176 10.1374L5.68246 13.4177L0.443863 10.1374L5.68246 0.918579L10.9176 10.1374ZM5.68246 14.4711L0.443863 11.1908L5.68246 19.0169L10.9211 11.1908L5.68246 14.4711Z" fill="#00AC4F"/>
                    </svg>
                    </span>
                    <span className='ml-1 text-sm sm:text-md md:text-lg trendEth'> {props.eth} </span>
                </div>
            </div>

            <div className="tpercent ml-auto my-auto">
                <span className={`${props.percent > 21 ? "text-primary" : "text-[#FF002E]"} text-md sm:text-xl font-bold`}>{props.percent > 21 ? "+" : "-"}{props.percent}%</span>
            </div>
        </div>
    )
}

export default Card
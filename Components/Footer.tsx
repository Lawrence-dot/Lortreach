import React from 'react'
import Image from 'next/image'
import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

function Footer() {
    const scroll = (place: string) => {
        if (place === "home") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            document.querySelector(`#${place}`)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className='bg-[#1A1036] container-m py-5 text-center text-white flex flex-col justify-center'>
            <div className="footerContents">
                <div className="footerLogo flex justify-center">
                    <Image src='/logo.png' height={30} width={30} />
                    <span className='text-primary font-semibold text-xl'> Lotreach </span>
                </div> 

                <div className="footerList hidden sm:block my-3">
                    <ul>
                        <li className="inline mx-1" onClick={()=>scroll('home')}>Home </li>
                        <li className="inline mx-1" onClick={()=>scroll('features')}>Our Features</li>
                        <li className="inline mx-1" onClick={()=>scroll('discounts')}>Discounts</li>
                        <li className="inline mx-1" onClick={()=>scroll('blog')}>Blog</li>
                        <li className="inline mx-1" onClick={()=>scroll('trending')}>Trending Tracks</li>
                        <li className="inline mx-1">Privacy Policy</li>
                    </ul>
                    <br />
                    <hr className='mx-64 opacity-20' />
                </div>     

                <div className="footerEnd mt-5  flex flex-row justify-center">
                    <div className="copy flex">
                        <span className='text-white text-sm sm:text-md'> 
                            @Copyrights Lotreach. <br className='spanBreak' /> All rights Reserved
                        </span>
                    </div>

                    <div className="socials ml-auto">
                        <ul className='flex'>
                            <li className="inline mx-1">
                                <FiInstagram />
                            </li>
                            <li className="inline mx-1">
                                <FiTwitter />
                            </li>
                            <li className="inline mx-1">
                                <FiYoutube />
                            </li>
                        </ul>
                    </div>
                </div>       
            </div>
        </footer>
    )
}

export default Footer

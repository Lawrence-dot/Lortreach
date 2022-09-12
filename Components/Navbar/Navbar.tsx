import React, { useState } from 'react'
import Styles from  "./Navbar.module.css"
import {HiOutlineLockClosed} from 'react-icons/hi'

function Navbar() {
    const [open, setOpen] = useState<boolean>(false);
    const toggleNav = () => {
        setOpen(!open);
    }
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
        setOpen(false);
    };

    return (
        <div className={`flex wrap sticky-top ${open && Styles.navOpened} flex-col sm:flex-row ${Styles.topNav} py-2 mb-3 pb-4 content-center container-m bg-slate-300S`}>
            <div className="loGo w-full  py-1 sm:w-16 flex z-40" style={{borderBottom: `${open && "1px solid rgb(0 0 0 / 5%)"}`}}>
                <img src='/logo.ico'/>
                <p className='hidden sm:block'> Lortrech</p>
                <button onClick={toggleNav} className={`${Styles.navToggler} bg-primary rounded-lg text-primary text-xl sm:hidden ml-auto`}>
                    <div className={`${open && "open"} wrapper-menu`}>
                        <div className="line-menu half start"></div>
                        <div className="line-menu"></div>
                        <div className="line-menu half end"></div>
                    </div>
                </button>
                <hr />
            </div>
            
            <div className={`${Styles.btnWallet} navToggle  hidden sm:block w-full pb-16 flex content-center justify-end`}>
                <button className='btn flex block ml-auto mb-16 px-2 rounded border border-green-400 hover:border-black hover:text-black'>
                    Connect Wallet <HiOutlineLockClosed />
                </button>
            </div>
            
            <div className={`${Styles.navList} w-full mt-3 navLists sm:hidden`} style={{height: `${open ? 'fit-content' : '0px'}`, opacity: `${open ? '1' : '0'}`, visibility: `${open ? "visible" : "hidden"}`}}>
                <ul>
                    <li onClick={()=>scroll('home')}> <a href="#"> Home</a> </li>
                    <li onClick={()=>scroll('features')}> <a href="#"> Our Features</a> </li>
                    <li onClick={()=>scroll('discounts')}> <a href="#"> Discounts </a></li>
                    <li onClick={()=>scroll('trending')}> <a href="#"> Trending </a> </li>
                    <li style={{opacity: `${open ? '1' : '0'}`}} onClick={()=>scroll('faqs')}> <a href="#"> Faqs </a>  </li>
                    <div className={`${Styles.btnWallet} navToggle w-full pb-16`}>
                        <button className='btn flex block my-2 mx-auto mb-16 px-2 rounded border border-green-400 hover:border-black hover:text-black'>
                        Connect Wallet <HiOutlineLockClosed />
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

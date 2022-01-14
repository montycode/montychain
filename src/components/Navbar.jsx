import React, { useContext } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import { TransactionContext } from '../context/TransactionContext';

import logo from "../../images/white_logo.png";

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-52 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className='mx-4 cursor-pointer'><a href="https://github.com/montycode/"><AiOutlineGithub className="text-white text-2xl text-center" /></a></li>
        <li className='mx-4 cursor-pointer'><a href="https://www.instagram.com/montycode/"><AiOutlineInstagram className="text-white text-2xl text-center" /></a></li>
        <li className='mx-4 cursor-pointer'><a href="https://twitter.com/monty_code"><AiOutlineTwitter className="text-white text-2xl text-center" /></a></li>
        <li className='mx-4 cursor-pointer'><a href="https://discord.com/channels/@me/xerox#6666/"><SiDiscord className="text-white text-2xl text-center" /></a></li>
        {!currentAccount && (
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]" onClick={connectWallet}>
            Login
          </li>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white space-y-4 animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            <li className='mx-4 cursor-pointer'><a href="https://github.com/montycode/"><AiOutlineGithub className="text-white text-2xl text-center" /></a></li>
            <li className='mx-4 cursor-pointer'><a href="https://www.instagram.com/montycode/"><AiOutlineInstagram className="text-white text-2xl text-center" /></a></li>
            <li className='mx-4 cursor-pointer'><a href="https://twitter.com/monty_code"><AiOutlineTwitter className="text-white text-2xl text-center" /></a></li>
            <li className='mx-4 cursor-pointer'><a href="https://discord.com/channels/@me/xerox#6666/"><SiDiscord className="text-white text-2xl text-center" /></a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar

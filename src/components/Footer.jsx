import { AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';

import logo from '../../images/white_logo.png';

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-52" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="https://github.com/montycode/"><AiOutlineGithub className="text-white text-2xl text-center mx-2 cursor-pointer" /></a>
        <a href="https://www.instagram.com/montycode/"><AiOutlineInstagram className="text-white text-2xl text-center mx-2 cursor-pointer" /></a>
        <a href="https://twitter.com/monty_code"><AiOutlineTwitter className="text-white text-2xl text-center mx-2 cursor-pointer" /></a>
        <a href="https://discord.com/channels/@me/xerox#6666/"><SiDiscord className="text-white text-2xl text-center mx-2 cursor-pointer" /></a>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Te interesa unirte al lado oscuro?</p>
      <p className="text-white text-sm text-center font-medium mt-2">omar@montycode.dev</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@montychain2022</p>
      <p className="text-white text-right text-xs">Todos los derechos reservados.</p>
    </div>
  </div>
);

export default Footer;
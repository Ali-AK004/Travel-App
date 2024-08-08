"use client";

import { NAV_LINKS } from '@/constants/index';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Buttons';


const Navbar = () => {
  const [openNavig, setopenNavig] = useState<boolean>(false);
  const handleClick = () => {
    setopenNavig(!openNavig);
  }

  return (
    <nav className="  w-full shadow-lg">
      <div className="max-container padding-container py-5 flexBetween z-20 sticky top-0  bg-white">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29} />
      </Link>

      <ul className={`${openNavig ? 'menu' : 'hidden'} md:flexCenter gap-8 `}>
      {NAV_LINKS.map((link) => (
          <Link href={link.href} className="linksHover regular-16 text-gray-50" key={link.key}>{link.label}</Link>
        ))}
      </ul>

      <div className="md:flex hidden">
        <Button type="button" content="Login" icon="/user.svg" theme="btn_dark_green"/>
      </div>

      <Image src="/menu.svg" width={33} height={33} className="cursor-pointer block md:hidden" alt="menu-Logo" onClick={handleClick}/>
        
</div>
    </nav>
  )
}

export default Navbar;
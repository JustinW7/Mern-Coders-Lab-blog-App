import React from "react";
import { Footer, FooterLink, FooterLinkGroup, FooterTitle, } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook,BsTwitter,BsInstagram,BsGithub} from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex sm md:grid-cols-1">

        <div className=''>
          <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-lg font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Justin's</span> Blog
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
          <div>

            {/* 'About' heading . */}
            <FooterTitle title="ABOUT" />
            <FooterLinkGroup col>
              <FooterLink 
              href="https://www.github.com/JustinW7" 
              target="_blank"
               rel="noopener noreferrer">
               Github 
</FooterLink>

        <FooterLink 
        href="#">
          Discord</FooterLink>
          

        
       
            </FooterLinkGroup>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6">
          <div>

            {/* 'About' heading . */}
            <FooterTitle title="FOLLOW US" />
            <FooterLinkGroup col>
              <FooterLink 
              href="https://www.github.com/JustinW7" 
              target="_blank"
               rel="noopener noreferrer">
               Github 
</FooterLink>

        <FooterLink 
        href="#">
          Discord</FooterLink>
          

        
       
            </FooterLinkGroup>
          </div>
        </div>
</div>

<Footer.Divider/>
<div className="w-full sm:flex sm:items-center sm:justify-between">
<Footer.Copyright 
href='#' 
by="Justin's blog"
year={new Date().getFullYear()}
/>
<div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
  <Footer.Icon href='#' icon={BsFacebook}/>
  <Footer.Icon href='#' icon={BsTwitter}/>
  <Footer.Icon href='#' icon={BsInstagram}/>
  <Footer.Icon href='#' icon={BsGithub}/>


</div>
</div>
      </div>
    </Footer>
  );
}

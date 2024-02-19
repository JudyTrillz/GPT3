//* Importing From React =====>>
import React, { useState } from "react";
import "./header.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

//* Importing Assets =====>>
import logo from "../../assets/logo.svg";

//* Running Functionalities =====>>
const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Reusable navigation Links =====>>
  const Menu = () => (
    <>
      <p>
        <a href='#home' onClick={() => setToggleMenu(false)}>
          Home
        </a>
      </p>
      <p>
        <a href='#wgpt3' onClick={() => setToggleMenu(false)}>
          What is GPT3?
        </a>
      </p>
      <p>
        <a href='#possibility' onClick={() => setToggleMenu(false)}>
          Open AI
        </a>
      </p>
      <p>
        <a href='#features' onClick={() => setToggleMenu(false)}>
          Case Studies
        </a>
      </p>
      <p>
        <a href='#blog' onClick={() => setToggleMenu(false)}>
          Library
        </a>
      </p>
    </>
  );

  // Rendering the navigation bar =====>>
  return (
    <nav className='gpt3__nav'>
      <div className='gpt3__nav-links'>
        <div className='gpt3__nav-links__logo'>
          <img src={logo} alt='Logo' width={118} height={30} />
        </div>

        <div className='gpt3__nav-links__container'>
          <Menu />
        </div>
      </div>

      <div className='gpt3__nav-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='gpt3__nav-menu'>
        {toggleMenu ? (
          <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className='gpt3__nav-menu__container scale-up-center'>
            <div className='gpt3__nav-menu__container-links'>
              <Menu />
              <div className='gpt3__nav-menu__container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import React from "react";
import "./brand.css";
import { google, atlassian, slack, dropbox, shopify } from "./index";

const Brand = () => {
  return (
    <main className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='google' width={75} height={25} loading='lazy' />
      </div>
      <div>
        <img src={slack} alt='google' width={97} height={25} loading='lazy' />
      </div>
      <div>
        <img src={atlassian} alt='google' width={114} height={25} loading='lazy' />
      </div>
      <div>
        <img src={dropbox} alt='google' width={122} height={25} loading='lazy' />
      </div>
      <div>
        <img src={shopify} alt='google' width={85} height={25} loading='lazy' />
      </div>
    </main>
  );
};

export default Brand;

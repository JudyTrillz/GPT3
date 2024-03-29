import React, { useState } from "react";
import "./home.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  const [email, setEmail] = useState("");
  return (
    <main className='gpt3__home section__padding' id='home'>
      <div className='gpt3__home-content'>
        <h1 className='gradient__text'>
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts
          all exercise blessing. Indulgence way everything joy alteration boisterous
          the attachment. Party we years to order allow asked of.
        </p>

        <form className='gpt3__home-content__input'>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Your email Address.'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='button'>Get Started</button>
        </form>

        <div className='gpt3__home-content__people'>
          <img src={people} alt='people' width={182} height={39} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__home-img'>
        <img src={ai} alt='ai' width={2824} height={2852} />
      </div>
    </main>
  );
};

export default Header;

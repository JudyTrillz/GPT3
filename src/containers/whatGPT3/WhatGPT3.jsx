import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";

const Whatgpt3 = () => {
  return (
    <main className='gpt3__whatGpt3 section__margin ' id='wgpt3'>
      <div className='gpt3__whatGpt3-features'>
        <Feature
          title={"What is GPT-3"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
      </div>

      <div className='gpt3__whatGpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>

        <p>Explore the Library</p>
      </div>

      <div className='gpt3__whatGpt3-container'>
        <Feature
          title={"Chat Bots"}
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error optio mollitia nam laborum beatae cumque quasi inventore magnam in assumenda."
          }
        />
        <Feature
          title={"Knowledge Base"}
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error optio mollitia nam laborum beatae cumque quasi inventore magnam in assumenda."
          }
        />
        <Feature
          title={"Education"}
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error optio mollitia nam laborum beatae cumque quasi inventore magnam in assumenda."
          }
        />
      </div>
    </main>
  );
};

export default Whatgpt3;

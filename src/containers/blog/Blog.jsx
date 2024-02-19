import React from "react";
import "./blog.css";
import { Article } from "../../components";

import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <main className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>

      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article
            image={blog01}
            date='Feb 19, 2024'
            title='GPT-3 and OpenAI is the future. Let us explore how it is.?'
          />
        </div>

        <div className='gpt3__blog-container_groupB'>
          <Article
            image={blog02}
            date='Feb 19, 2024'
            title='GPT-3 and OpenAI is the future. Let us explore how it is.?'
          />
          <Article
            image={blog03}
            date='Feb 19, 2024'
            title='GPT-3 and OpenAI is the future. Let us explore how it is.?'
          />
          <Article
            image={blog04}
            date='Feb 19, 2024'
            title='GPT-3 and OpenAI is the future. Let us explore how it is.?'
          />
          <Article
            image={blog05}
            date='Feb 19, 2024'
            title='GPT-3 and OpenAI is the future. Let us explore how it is.?'
          />
        </div>
      </div>
    </main>
  );
};

export default Blog;

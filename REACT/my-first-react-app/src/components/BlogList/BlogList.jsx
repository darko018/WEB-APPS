import React from 'react';

import { blogPost, blogPosts } from '../../data/blog-posts.js'

import './BlogList.css'

export const BlogList = () => {
    return (
        <div className='blogList'>
            {blogPosts.map((post, index) => (
               <div className='blogItem' key={index}>
                   <h2>{post.title}</h2>
                   <p>{post.body}</p>

               </div>
            ))}
        </div>
    );
};

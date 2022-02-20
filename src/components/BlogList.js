import React from 'react';
import { blogPosts } from '../data/data';

export default function BlogList() {
    const blogList = blogPosts.map((post) => 
        <li className='blog-post'>
            <div className='blog-title'>
                <a href={post.url}>
                    <h6>{post.name}</h6>
                </a>
            </div>
            <div className='blog-description'>
                <p>-{post.description}</p>
            </div>
        </li>    
    );

    return (<ul className='blog-post-list'>{blogList}</ul>)
}

import React from 'react'
import{BLOG_DETAILS} from '../data.js'



function BlogChange({topic, image, description}){
    return(
        <div>
            <h3>{topic}</h3>
<img src={image} alt={topic}/>
<p>{description}</p>
        </div>
    )
}


function Blog() {
  return (
    <>
  <main>
  <section>
  <div>
    <h1 className='bg-sky-50  text-black-600 text-center text-6xl mt-24' >Explore Latest Topics</h1>
    <p className='text-gray-600 text-center text-3xl'> Explore expert advice, market trends, and home-buying tips to make informed decisions</p>
    <div class="h-1 bg-yellow-500 flex-grow"></div>
    </div>

</section>
<section>
    <BlogChange {...BLOG_DETAILS[0]}/>
    <BlogChange {...BLOG_DETAILS[1]}/>
    <BlogChange {...BLOG_DETAILS[2]}/>
    <BlogChange {...BLOG_DETAILS[3]}/>
    <BlogChange {...BLOG_DETAILS[4]}/>
    <BlogChange {...BLOG_DETAILS[5]}/>




</section>
  </main>
    
    </>


  )
};

export default Blog

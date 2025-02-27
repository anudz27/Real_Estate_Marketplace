import React from "react";
import { BLOG_DETAILS } from "../data.js";

function BlogChange({ topic, image, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={image}
        alt={topic}
        className="w-full h-56 object-cover rounded-md"
      />
      <h3 className="text-2xl font-semibold text-gray-800 mt-4">{topic}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

function Blog() {
  return (
    <main className="container mx-auto px-6 py-16">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          Explore Latest Topics
        </h1>
        <p className="text-2xl text-gray-600 mt-4">
          Explore expert advice, market trends, and home-buying tips to make
          informed decisions.
        </p>
        <div className="h-1 w-24 bg-yellow-500 mx-auto mt-4"></div>
      </section>

      {/* Blog Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogChange {...BLOG_DETAILS[0]} />
        <BlogChange {...BLOG_DETAILS[1]} />
        <BlogChange {...BLOG_DETAILS[2]} />
        <BlogChange {...BLOG_DETAILS[3]} />
        <BlogChange {...BLOG_DETAILS[4]} />
        <BlogChange {...BLOG_DETAILS[5]} />
      </section>
    </main>
  );
}

export default Blog;

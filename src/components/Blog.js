import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Blog.css"; // Import your CSS file for styling

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring Logistics Services",
      content:
        "In this blog post, we delve into the world of logistics services and how they play a vital role in the efficient transportation of goods and services. Logistics services are a crucial part of modern businesses...",
      image: "/assets/images/blog1.avif",
    },
    {
      id: 2,
      title: "Optimizing Supply Chains",
      content:
        "Efficient supply chains are the backbone of any successful business. Discover the key strategies and best practices for optimizing your supply chain to improve cost-efficiency and customer satisfaction...",
      image: "/assets/images/blog2.jpg",
    },
    {
      id: 3,
      title: "The Future of Delivery Services",
      content:
        "As technology continues to advance, the future of delivery services is evolving. Learn about the latest trends, from drone deliveries to autonomous vehicles, and how they will shape the logistics industry...",
      image: "/assets/images/blog3.avif",
    },
  ];

  return (
    <div>
      <Header />
      <Nav />
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-content">{post.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;

import React from "react";
import BlogCard from "./BlogCard";

function Mega() {
  const posts = [
    {
      id: 1,
      title:
        "Building a Scalable E-commerce Website with Next.js and Sanity CMS",
      description:
        "Learn how to build a dynamic and scalable e-commerce store using Next.js and Sanity CMS for content management.",
      date: "2025-02-07",
      imageUrl: "../images/1.webp",
    },
    {
      id: 2,
      title: "How to Optimize Next.js Performance: Best Practices & Tips",
      description:
        "Discover the best practices for improving performance in Next.js applications, including caching, lazy loading, and more.",
      date: "2025-02-06",
      imageUrl: "../images/2.webp",
    },
    {
      id: 3,
      title:
        "Server-Side Rendering (SSR) vs Static Site Generation (SSG) in Next.js",
      description:
        "Understand the key differences between SSR and SSG and when to use each for better performance and SEO.",
      date: "2025-02-05",
      imageUrl:
        "../images/3.avif",
    },
    {
      id: 4,
      title: "Mastering API Routes in Next.js: A Beginner's Guide",
      description:
        "Learn how to create and manage API routes in Next.js for handling backend logic in a frontend-focused project.",
      date: "2025-02-04",
      imageUrl: "../images/4.avif",
    },
    {
      id: 5,
      title: "Handling Authentication in Next.js with NextAuth.js",
      description:
        "A step-by-step guide on implementing authentication in Next.js applications using NextAuth.js.",
      date: "2025-02-03",
      imageUrl: "../images/5.webp",
    },
    {
      id: 6,
      title: "Creating a Fully Responsive UI with Tailwind CSS & Next.js",
      description:
        "Discover how to build beautiful and fully responsive user interfaces using Tailwind CSS with Next.js.",
      date: "2025-02-02",
      imageUrl: "../images/6.webp",
    },
    {
      id: 7,
      title: "Dark Mode in Next.js with Tailwind CSS and useState Hook",
      description:
        "Learn how to add a dark mode toggle to your Next.js website using Tailwind CSS and React’s useState hook.",
      date: "2025-02-01",
      imageUrl: "../images/7.webp",
    },
    {
      id: 8,
      title: "How to Improve User Experience (UX) in E-commerce Websites",
      description:
        "Explore essential UX principles and techniques to enhance user experience in e-commerce platforms.",
      date: "2025-01-31",
      imageUrl: "../images/8.avif",
    },
    {
      id: 9,
      title: "Building a Dynamic Product Page in Next.js: Step-by-Step Guide",
      description:
        "A detailed guide to building dynamic product pages in Next.js with server-side rendering and API integration.",
      date: "2025-01-30",
      imageUrl: "../images/9.avif",
    },
    {
      id: 10,
      title: "Integrating Framer Motion with Next.js for Smooth Animations",
      description:
        "Enhance your Next.js applications with smooth animations using Framer Motion.",
      date: "2025-01-29",
      imageUrl: "../images/10.avif",
    },
    {
      id: 11,
      title:
        "Integrating ShipEngine for Shipping & Tracking in Next.js Checkout",
      description:
        "Learn how to integrate ShipEngine API into your Next.js e-commerce website for seamless shipping and tracking.",
      date: "2025-01-28",
      imageUrl: "../images/11.avif",
    },
    {
      id: 12,
      title: "Essential Features Every Modern E-commerce Website Needs",
      description:
        "A guide to the must-have features for a modern e-commerce website, from user-friendly navigation to payment security.",
      date: "2025-01-27",
      imageUrl: "../images/essential.avif",
    },
    {
      id: 13,
      title: "How to Set Up Payment Gateways in Next.js (Stripe, PayPal, etc.)",
      description:
        "Step-by-step instructions on integrating popular payment gateways like Stripe and PayPal into your Next.js store.",
      date: "2025-01-26",
      imageUrl: "../images/payment.avif",
    },
    {
      id: 14,
      title: "State Management in E-commerce: Context API vs Redux Toolkit",
      description:
        "Compare and understand state management solutions for e-commerce applications using Context API and Redux Toolkit.",
      date: "2025-01-25",
      imageUrl: "../images/managements.webp",
    },
    {
      id: 15,
      title:
        "SEO for E-commerce: How to Optimize Your Next.js Store for Google",
      description:
        "Learn key SEO techniques to improve your Next.js e-commerce store’s visibility and rankings on Google.",
      date: "2025-01-24",
      imageUrl: "../images/seo.avif",
    },
  ];

  return (
    <>
    <div className="my-8 max-w-screen-xl mx-auto">
  <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring The Next JS</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post,index)=>(
      <div className="fade-in" key={post.id}>
        <div className="blog-card">
      <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
        </div>
      </div>
    ))}

  </div>
    </div>
    </>
  )
}

export default Mega;

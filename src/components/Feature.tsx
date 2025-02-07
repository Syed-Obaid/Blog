import React from "react";

function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40 ">
        <h2 className="text-center text-3xl font-bold md:text-5xl  animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">
          Syed Obaid-Ullah : Navigating the secrets of Technology in NEXT JS
          Blog
        </h2>
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">Creating a blog with Next.js is an excellent way to showcase your content while benefiting from the power of server-side rendering (SSR) and static site generation (SSG). With Next.js, you can easily create a fast, SEO-friendly blog that loads quickly and is optimized for search engines. By using getStaticProps for static pages and getServerSideProps for dynamic content, you can ensure that your blog posts are always up-to-date and perform well. Additionally, Next.js allows you to create reusable components, making it easy to structure your blog with features like pagination, comment sections, and social sharing buttons. Pairing Next.js with Tailwind CSS for styling results in a beautiful, responsive design that works across all devices. With built-in support for SEO enhancements, such as metadata management through next/head, your blog will rank higher in search results, driving more organic traffic. Whether you're building a personal blog, a portfolio, or a content-rich website, Next.js provides the flexibility and performance needed to create a seamless user experience.</p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring Our Category</h1>

<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
{[
  "Next.js Development",
  "Frontend & UI/UX",
  "E-commerce Development",
  "Performance & Optimization",
  "SEO & Marketing",
  "JavaScript & TypeScript",
  "Web Performance & Security",
  "State Management",
  "Backend & APIs",
  "Testing & Debugging",
  "Cloud & Deployment",
  "AI & Web Development"
].map((category,index)=>(
  <div key={index} className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600">
<p className="text-center text-lg font-semibold">{category}</p>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
  </div>
))}
</div>
        </div>


      </section>
    </div>
  );
}

export default Feature;

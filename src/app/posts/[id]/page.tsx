'use client'
import { use } from "react"; // ✅ Import use() to unwrap params
import CommentSection from '@/components/CommentSection'
import AuthoreCard from '@/components/AuthoreCard'
import React from 'react'


const posts = [
  {
    id: 1,
    title:
      "Building a Scalable E-commerce Website with Next.js and Sanity CMS",
    description:
      `Creating a scalable e-commerce website involves leveraging Next.js for its server-side rendering, dynamic routing, and API support, along with Sanity CMS for flexible, real-time content management. Key aspects include:

Next.js Features: Static & dynamic rendering, optimized performance, SEO benefits, and API routes for backend logic.
Sanity CMS: Headless CMS with structured content, real-time collaboration, and scalability.
State Management: Using useState, useEffect, and useContext for dynamic UI updates.
Styling: Tailwind CSS for responsive and reusable component design.
Checkout & Shipping: Integrating ShipEngine for real-time shipping rates and order fulfillment.
Scalability: Using ISR (Incremental Static Regeneration) for handling high traffic efficiently.`,
    date: "2025-02-07",
    imageUrl: "../images/1.webp",
  },
  {
    id: 2,
    title: "How to Optimize Next.js Performance: Best Practices & Tips",
    description:
      `Optimizing Next.js performance involves leveraging built-in features and best practices to enhance speed, scalability, and user experience.

Key Optimization Techniques
Image Optimization: Use next/image for automatic lazy loading and responsive images.
Static & Server-Side Rendering (SSR & SSG): Choose between SSG (Static Site Generation) for speed and SSR (Server-Side Rendering) for dynamic content.
Incremental Static Regeneration (ISR): Update static pages without rebuilding the entire site.
Code Splitting & Lazy Loading: Use dynamic imports (next/dynamic) to load components only when needed.
Caching & CDN: Leverage Vercel’s Edge Network and optimize API caching.
Minimizing JavaScript & CSS: Remove unused code, optimize fonts, and reduce third-party scripts.
Optimized Data Fetching: Use SWR (stale-while-revalidate) for efficient client-side data fetching.`,
    date: "2025-02-06",
    imageUrl: "../images/2.webp",
  },
  {
    id: 3,
    title:
      "Server-Side Rendering (SSR) vs Static Site Generation (SSG) in Next.js",
    description:
      `Next.js provides SSR and SSG for optimizing page rendering and performance.

1. Server-Side Rendering (SSR)
Pages are generated on each request at runtime.
Uses getServerSideProps().
Best for dynamic content (e.g., user-specific dashboards, real-time data).
Slower than SSG due to server processing on each request.
2. Static Site Generation (SSG)
Pages are pre-built at build time and served as static files.
Uses getStaticProps() and getStaticPaths().
Best for static content (e.g., blogs, marketing pages).
Faster load times since pages are cached and served via CDN.
Choosing Between SSR & SSG
Use SSR when data must be fresh on every request.
Use SSG for performance and scalability with mostly static content.
Use ISR (Incremental Static Regeneration) for a hybrid approach, updating static pages without rebuilding the entire site.`,
    date: "2025-02-05",
    imageUrl:
      "../images/3.avif",
  },
  {
    id: 4,
    title: "Mastering API Routes in Next.js: A Beginner's Guide",
    description:
     `Next.js API routes allow you to create backend functionality within your application without needing an external server. These routes are defined in the /pages/api directory and can handle requests like fetching, updating, and deleting data. They work as serverless functions, executing only when called. Using API routes, you can integrate databases, authentication, and third-party services. They support GET, POST, PUT, DELETE methods and can be optimized with middleware for security and performance. For dynamic handling, Next.js provides query parameters and request objects. API routes are ideal for building scalable, full-stack applications without managing a separate backend server. `,
    date: "2025-02-04",
    imageUrl: "../images/4.avif",
  },
  {
    id: 5,
    title: "Handling Authentication in Next.js with NextAuth.js",
    description:
     `NextAuth.js is a flexible authentication solution for Next.js, supporting multiple authentication providers like OAuth (Google, GitHub, Facebook), Credentials, and JWT (JSON Web Tokens). It simplifies user authentication with minimal configuration.

Key features include:

Session Management: Uses JWT or database sessions for user authentication.
Built-in Providers: Supports OAuth, email/password, and custom authentication.
Secure API Routes: Protects pages and API routes with middleware.
Database Integration: Works with MongoDB, PostgreSQL, MySQL, and more.
Implementation involves setting up NextAuth in /pages/api/auth/[...nextauth].ts, configuring providers, and using hooks like useSession() for client-side authentication. It's a powerful tool for building secure, scalable authentication in Next.js apps. `,
    date: "2025-02-03",
    imageUrl: "../images/5.webp",
  },
  {
    id: 6,
    title: "Creating a Fully Responsive UI with Tailwind CSS & Next.js",
    description:
      `Tailwind CSS and Next.js together enable fast, scalable, and fully responsive UI development. Tailwind CSS provides utility-first styling, allowing developers to create highly customizable designs without writing custom CSS. Next.js optimizes performance with SSR, SSG, and dynamic routing.

Key features for responsiveness:

Mobile-first design with Tailwind's sm, md, lg, xl, and 2xl breakpoints.
Flexbox & Grid Layouts (flex, grid, gap, justify-center).
Dark Mode & Theming using Tailwind’s dark: class.
Reusable Components for buttons, cards, and modals with Tailwind utility classes.
Performance Optimization with next/image and dynamic imports.
This approach ensures a seamless responsive user experience across all devices with minimal effort.`,
    date: "2025-02-02",
    imageUrl: "../images/6.webp",
  },
  {
    id: 7,
    title: "Dark Mode in Next.js with Tailwind CSS and useState Hook",
    description:
      `Implementing Dark Mode in Next.js with Tailwind CSS and the useState hook allows you to easily toggle between light and dark themes in your application. You can leverage Tailwind's dark: variant, which adjusts styles based on the user's preference. The useState hook is used to manage the current theme state (light or dark). By storing the theme in the component state or localStorage, users can persist their theme preference across sessions. On page load, the app checks for the user's system theme preference and applies it. Using Tailwind’s class utilities, you can toggle the dark class on the root element of your app, making it responsive to both system and user-controlled theme changes. This approach provides a smooth, user-friendly dark mode experience in a Next.js project. `,
    date: "2025-02-01",
    imageUrl: "../images/7.webp",
  },
  {
    id: 8,
    title: "How to Improve User Experience (UX) in E-commerce Websites",
    description:
      `Improving User Experience (UX) in e-commerce websites focuses on creating an intuitive, enjoyable, and efficient shopping journey. Key strategies include:

Mobile Responsiveness: Ensure the website is optimized for mobile devices, as many users shop on smartphones.
Fast Load Times: Optimize performance to reduce load times, which can improve conversion rates and reduce bounce rates.
Clear Navigation: Use intuitive menus, categories, and filters to help users easily find products.
Simple Checkout Process: Minimize steps in the checkout process to reduce friction, including offering guest checkout and multiple payment options.
High-Quality Visuals: Use high-resolution images, videos, and 360-degree views of products to provide a more immersive experience.
Personalization: Implement personalized product recommendations based on browsing history and preferences.
Trust Signals: Display reviews, ratings, secure payment options, and clear return policies to build trust.`,
    date: "2025-01-31",
    imageUrl: "../images/8.avif",
  },
  {
    id: 9,
    title: "Building a Dynamic Product Page in Next.js: Step-by-Step Guide",
    description:
     `Building a Dynamic Product Page in Next.js involves creating a page that displays unique product details based on dynamic data, often fetched from a CMS or database. Here's a step-by-step guide:

Create Dynamic Routes: Use Next.js dynamic routes (e.g., /pages/products/[id].js) to handle unique product pages.
Fetching Data: Use getStaticProps() (for SSG) or getServerSideProps() (for SSR) to fetch product data (e.g., from a CMS like Sanity, a database, or an API).
Dynamic Content: Pass the fetched data (like product name, image, price, description) as props to the page.
UI Design: Use Tailwind CSS to design a responsive product page with product images, pricing, specifications, and user reviews.
Add Interactivity: Use useState and useEffect for interactive elements like quantity selection or adding to the cart.
SEO Optimization: Ensure proper SEO with meta tags and structured data for product details.`,
    date: "2025-01-30",
    imageUrl: "../images/9.avif",
  },
  {
    id: 10,
    title: "Integrating Framer Motion with Next.js for Smooth Animations",
    description:
      `Integrating Framer Motion with Next.js enables smooth and interactive animations in your React-based application. Framer Motion is a popular library for handling animations, providing intuitive APIs for transitions, gestures, and complex animations.

Key steps for integration:

Install Framer Motion: Add the package with npm install framer-motion.
Wrap Components in Motion: Use motion.div (or other HTML elements) to apply animations to components.
Define Animations: Use props like animate, initial, and exit to control the animation state (e.g., fade in/out, scale, or slide).
Page Transitions: Implement smooth page transitions by wrapping pages with motion.div and using Next.js's useRouter to detect route changes.
Server-Side Rendering Considerations: Make sure animations work with SSR by wrapping motion components inside conditional rendering, using useEffect to detect client-side rendering.`,
    date: "2025-01-29",
    imageUrl: "../images/10.avif",
  },
  {
    id: 11,
    title:
      "Integrating ShipEngine for Shipping & Tracking in Next.js Checkout",
    description:
      `Integrating ShipEngine for Shipping & Tracking in a Next.js checkout page involves using ShipEngine’s API to calculate shipping rates, generate labels, and track shipments directly within your e-commerce platform. Here's a brief guide:

Install ShipEngine SDK: Add the ShipEngine package to your Next.js project using npm install shipengine.
API Routes for Shipping: Set up API routes in Next.js to handle requests like fetching shipping rates, creating labels, and tracking orders.
Fetch Shipping Rates: Use the ShipEngine API to fetch real-time shipping rates based on the user’s address and product details.
Generate Shipping Labels: Once an order is confirmed, use the ShipEngine API to generate and print shipping labels.
Track Shipments: Integrate real-time shipment tracking by using ShipEngine’s tracking API to display delivery updates on the user’s dashboard.
Integrate into Checkout: On the checkout page, allow customers to select shipping methods based on the fetched rates and finalize the process by generating labels.`,
    date: "2025-01-28",
    imageUrl: "../images/11.avif",
  },
  {
    id: 12,
    title: "Essential Features Every Modern E-commerce Website Needs",
    description:
      `A modern e-commerce website must offer a seamless, engaging, and secure shopping experience. Key features include:

User-Friendly Navigation: Clear categories, filters, and search functionality for easy product discovery.
Mobile Optimization: Responsive design ensuring a smooth experience across devices.
High-Quality Product Images & Videos: Clear, detailed images with zoom, 360-degree views, and product videos.
Personalized Shopping Experience: Product recommendations based on user behavior and preferences.
Secure Payment Gateway: Multiple payment options (credit cards, PayPal, digital wallets) with secure encryption.
Easy Checkout Process: Guest checkout, saved payment methods, and minimal steps to complete purchases.
Customer Reviews & Ratings: Social proof to build trust and help users make informed decisions.
Order Tracking & Notifications: Real-time updates on order status, shipping, and delivery.
Advanced Search & Filters: Powerful search options with sorting, price range, and size filters.
Customer Support: Live chat, easy access to FAQs, and support channels for resolving issues.`,
    date: "2025-01-27",
    imageUrl: "../images/essential.avif",
  },
  {
    id: 13,
    title: "How to Set Up Payment Gateways in Next.js (Stripe, PayPal, etc.)",
    description:
      `Setting up payment gateways like Stripe and PayPal in a Next.js application involves integrating their APIs to securely process transactions. Here's a brief overview of the steps:

1. Stripe Integration:
Install Stripe SDK: Use npm install stripe for the server-side SDK and @stripe/react-stripe-js for the client-side.
Create API Routes: In Next.js, create API routes to handle payment intents (for server-side) using stripe.paymentIntents.create.
Frontend Integration: Use Elements and CardElement from the Stripe React library to collect payment details securely.
Handle Payment: On submission, call your API route to process the payment and confirm the transaction using stripe.confirmCardPayment.
2. PayPal Integration:
Install PayPal SDK: Add PayPal’s JavaScript SDK by including <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script> in your HTML.
Frontend Setup: Add the PayPal button to your page and customize it to capture payments upon completion.
Server-Side: Use Next.js API routes to create payment transactions, verify payments, and manage order statuses.
3. Security & Testing:
Use environment variables for storing sensitive keys (e.g., process.env.STRIPE_SECRET_KEY).
Test transactions using sandbox environments provided by both Stripe and PayPal.`,
    date: "2025-01-26",
    imageUrl: "../images/payment.avif",
  },
  {
    id: 14,
    title: "State Management in E-commerce: Context API vs Redux Toolkit",
    description:
      `Both Context API and Redux Toolkit are powerful tools for managing state in React applications, but they have different strengths and use cases, especially in e-commerce websites.

Context API:
Best For: Simpler state management for smaller applications or passing data through the component tree without prop drilling.
Use Case: Suitable for features like user authentication, theme switching, or cart management for small to medium-sized e-commerce sites.
Pros: Built into React, easy to set up, and good for global states.
Cons: Not ideal for handling complex state logic, performance can suffer with frequent updates to large states.
Redux Toolkit:
Best For: More complex, scalable state management with large applications that require advanced logic like product inventory, checkout processing, or multi-step forms.
Use Case: Ideal for large e-commerce sites needing optimized performance, time-travel debugging, and middleware integration.
Pros: Optimized for larger, more complex applications, features like reducer functions, devtools, and middleware.
Cons: More boilerplate code compared to Context API, requires additional setup.
Choosing Between Them:
Context API is great for lightweight apps or shared global states.
Redux Toolkit is better suited for complex, high-performance apps with heavy state management needs. `,
    date: "2025-01-25",
    imageUrl: "../images/managements.webp",
  },
  {
    id: 15,
    title:
      "SEO for E-commerce: How to Optimize Your Next.js Store for Google",
    description:
      `Optimizing your Next.js e-commerce store for Google involves several key strategies to improve visibility, user engagement, and search rankings:

Server-Side Rendering (SSR) & Static Site Generation (SSG): Leverage SSR (using getServerSideProps) for dynamic content and SSG (using getStaticProps) for static content, ensuring fast page load times and full indexing by Google.
Optimized Meta Tags: Use next/head to set relevant title tags, meta descriptions, and Open Graph tags for better search appearance and social sharing.
Structured Data: Implement JSON-LD structured data for products, reviews, and pricing to enhance rich snippets in search results.
Mobile Optimization: Ensure the website is fully responsive, as Google prioritizes mobile-friendly sites.
URL Structure & Slugs: Use clean, SEO-friendly URLs (e.g., /products/[slug]) to improve crawlability.
Image Optimization: Use next/image for optimized, responsive images, ensuring fast load times and proper alt text for accessibility and SEO.
Internal Linking: Build a strong internal linking structure to distribute link equity and improve page discoverability.
Site Speed: Optimize performance with lazy loading, caching, and reducing unnecessary JavaScript to improve user experience and Google’s Core Web Vitals scores.`,
    date: "2025-01-24",
    imageUrl: "../images/seo.avif",
  },
];

function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ✅ Unwrap params using use()

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>;
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">{para.trim()}</p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">{post.title}</h1>
      
      {post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className="w-full h-auto rounded-md mt-4" />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection _postId={post.id.toString()} />
      <AuthoreCard />
    </div>
  );
}

export default Post;

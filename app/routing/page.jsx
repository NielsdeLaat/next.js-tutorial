import React from "react";

export default function Routing() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-indigo-600 mb-6">
          Next.js Routing with the App Router
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Next.js provides a powerful routing mechanism using pages and dynamic
          routing. You create routes simply by creating files inside the `pages`
          folder. For dynamic routes, you can use brackets like `
          <code>[slug].js</code>`.
        </p>
        <p className="text-lg text-gray-700">
          The App Router is a new way to handle routing in Next.js, leveraging
          the power of React's context and hooks to manage navigation
          seamlessly. With this approach, you can add dynamic links, nested
          routes, and much more.
        </p>
      </div>
    </main>
  );
}

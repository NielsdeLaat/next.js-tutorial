import React from "react";

export default function Tailwind() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-indigo-600 mb-6">
          Using Tailwind CSS Markup
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Tailwind CSS provides utility-first classNamees that enable rapid
          development of custom UI designs without having to write custom CSS.
          It allows for a highly customizable approach, making it easy to build
          layouts and style your components.
        </p>
        <p className="text-lg text-gray-700">
          You can use Tailwind classNamees directly in your JSX components once
          you move to Next.js. With the Next.js and Tailwind setup, you can use
          Tailwind CSS for both static and dynamic pages.
        </p>
      </div>
    </main>
  );
}

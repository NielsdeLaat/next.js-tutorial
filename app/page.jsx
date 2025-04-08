export default function Home() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-indigo-600 mb-6">
          What is Next.js?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Next.js is a React-based framework that enables server-side rendering
          (SSR), static site generation (SSG), and routing features out of the
          box. It offers a range of features like fast refresh, automatic code
          splitting, and optimized performance, making it a top choice for
          modern web development.
        </p>
        <p className="text-lg text-gray-700">
          Next.js simplifies the process of building production-ready React
          applications, with support for pages, routing, API routes, and easy
          deployment.
        </p>
      </div>
    </main>
  );
}

import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
      {/* Navbar */}
      <header className="shadow-md">
        <nav className="relative flex items-center justify-between p-4 lg:px-6">
          <h1 className="text-xl font-bold">Neon Threads Shop</h1>
          <form className="flex-grow mx-auto mx-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </form>
          <div>
            <a href="" className="px-4 py-2 hover:text-blue-500">Home</a>
            <a href="/poleras" className="px-4 py-2 hover:text-blue-500">Poleras</a>
          </div>
        </nav>
      </header>

      {/* Lista de productos */}
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {/* Product Card Example */}
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
            <Image src="/path-to-your-image.jpg" alt="Product" width={400} height={400} className="rounded" />
            <h4 className="mt-4 text-lg font-semibold text-gray-800">Product Name</h4>
            <p className="mt-2 text-gray-600">$49.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
            <Image src="/path-to-your-image.jpg" alt="Product" width={400} height={400} className="rounded" />
            <h4 className="mt-4 text-lg font-semibold text-gray-800">Product Name</h4>
            <p className="mt-2 text-gray-600">$49.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
            <Image src="/path-to-your-image.jpg" alt="Product" width={400} height={400} className="rounded" />
            <h4 className="mt-4 text-lg font-semibold text-gray-800">Product Name</h4>
            <p className="mt-2 text-gray-600">$49.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
            <Image src="/path-to-your-image.jpg" alt="Product" width={400} height={400} className="rounded" />
            <h4 className="mt-4 text-lg font-semibold text-gray-800">Product Name</h4>
            <p className="mt-2 text-gray-600">$49.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
              Add to Cart
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
            <Image src="/path-to-your-image.jpg" alt="Product" width={400} height={400} className="rounded" />
            <h4 className="mt-4 text-lg font-semibold text-gray-800">Product Name</h4>
            <p className="mt-2 text-gray-600">$49.99</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
              Add to Cart
            </button>
          </div>
          {/* Repeat for more products */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Neon Threads. Derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

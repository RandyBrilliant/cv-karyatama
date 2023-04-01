import { Link } from "react-router-dom";
import { productList } from "../utils/data";
import PageLayout from "./PageLayout";

const ProductList = () => {
  return (
      <PageLayout>
        <h2 className="font-display mt-10 text-2xl font-bold text-gray-700 md:text-4xl">
          Produk/Jasa yang Kami Tawarkan
        </h2>
        <div
          className="py-10 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 sm:grid-cols-1 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3"
        >
          {productList.map(product => (
            <section className="group relative bg-white ransition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10" key={product.id}>
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={product.image}
                  className="w-12"
                  width="512"
                  height="512"
                  alt={product.name}
                />

                <div className="space-y-2">
                  <h5
                    className="font-display text-2xl font-bold text-gray-700 transition group-hover:text-primary"
                  >
                    {product.name}
                  </h5>
                  <p className="text-sm text-gray-600">
                    {product.description}
                  </p>
                </div>
                <Link to={product.link} className="flex items-center justify-between group-hover:text-primary">
                  <span className="text- font-semibold italic">Pelajari lebih lanjut</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>                
                </Link>
              </div>
            </section>
          ))}
        </div>
      </PageLayout>                               
  )
}

export default ProductList
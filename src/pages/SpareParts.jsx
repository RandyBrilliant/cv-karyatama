import { Link } from 'react-router-dom';

import { kategoriSpareParts } from '../utils/data';

const   SpareParts = () => {
  return (
    <main>
      <section id="hero" className="h-[400px] bg-spare-parts bg-center bg-cover bg-no-repeat text-center">
        <div className="mx-auto flex justify-center items-center backdrop-brightness-50 h-full min-w-full w-full">
          <div className="mx-10">
            <h1 className="md:text-5xl text-4xl font-bold leading-tight my-5 capitalize font-primary text-white">Spare Parts</h1>
            <p className="text-xl font-secondary mb-5 text-gray-300">
              Kami menyediakan berbagai jenis spare parts sebagai penunjang untuk kebutuhan peralatan pabrik, alat berat dan otomotif. 
            </p>
          </div>  
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-10 sm:py-24 lg:max-w-none lg:py-16">
            <h2 className="text-2xl font-bold text-gray-900">Kategori Produk</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {kategoriSpareParts.map((sparepart) => (
                <div key={sparepart.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={`../${sparepart.imageSrc}`}
                      alt={sparepart.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link to={`/spare-parts/${sparepart.href}`}>
                      <span className="absolute inset-0" />
                      {sparepart.name}
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{sparepart.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default  SpareParts;
const products = [
  {
    id: 1,
    name: 'Jack Hydrolic',
    href: '#',
    imageSrc: './pabrikasi/1.jpg',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/2.jpg',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/3.jpg',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/4.jpg',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/5.jpg',
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/6.jpg',
  },
  {
    id: 7,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/7.jpg',
  },
  {
    id: 8,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/8.jpg',
  },
  {
    id: 9,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/9.jpg',
  },
  {
    id: 10,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/10.jpg',
  },
  {
    id: 11,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/11.jpg',
  },
  {
    id: 12,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/12.jpg',
  },
  {
    id: 13,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/13.jpg',
  },
  {
    id: 14,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/14.jpg',
  },
  {
    id: 15,
    name: 'Basic Tee',
    href: '#',
    imageSrc: './pabrikasi/15.jpg',
  },
]
const Pabrikasi = () => {
  return (
    <main>
    <section id="hero" className="h-[400px] bg-pabrikasi-bg bg-center bg-cover bg-no-repeat text-center">
      <div className="mx-auto flex justify-center items-center backdrop-brightness-50 h-full min-w-full w-full">
        <div className="mx-10">
          <h1 className="font-display md:text-5xl text-4xl font-bold leading-tight my-5 capitalize font-primary text-white">Pabrikasi</h1>
          <p className="text-xl font-secondary mb-5 text-gray-300">
            Kami menyediakan jasa pabrikasi sebagai penunjang untuk kebutuhan peralatan pabrik dan alat berat.
          </p>
        </div>
      </div>
    </section>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900">Jenis Produk</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={`../${product.imageSrc}`}
                  alt={product.name}
                  className="group-hover:scale-125 transition duration-300 h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <h3 className="mt-4 text-center font-bold text-md text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Pabrikasi;
import OfficeImage from '../assets/img/office.jpg';
import ProductImage from '../assets/img/product-2.jpg';

const AboutUs = () => {
  return (
    <main>
      <section id="hero" className="h-[400px] bg-about-us-bg bg-center bg-cover bg-no-repeat text-center">
        <div className="mx-auto flex justify-center items-center backdrop-brightness-50 h-full min-w-full w-full">
          <div className="mx-10">
            <h1 className="md:text-5xl text-4xl font-bold leading-tight my-5 capitalize font-primary text-white">Tentang Kami</h1>
            <p className="text-xl font-secondary mb-5 text-gray-300">
              Bagaimana kami dapat menyediakan produk layanan yang terbaik bagi kamu!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center text-center px-6 md:px-12 xl:px-6">
            <h2 className="text-3xl font-bold text-red-500">Profil Perusahaan</h2>
            <h3 className="text-xl font-medium italic">CV. Karyatama Agro Cemerlang</h3>
            <p className="mt-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti porro, dolores ex voluptates distinctio ea! Ut sapiente recusandae quod, omnis optio, voluptate eum repudiandae, voluptatem quae sequi exercitationem. Eos.</p>
          </div>
          <div>
            <img src={OfficeImage} className="object-cover" alt="CV. Karyatama Agro Cemerlang" />
          </div>
        </div>
      </section>
      <section className="bg-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Speak to Sales
                </a> 
            </div>
            <div>
                <img src={ProductImage} className="rounded-md h-20 shadow-md" alt="Product Image" />
            </div>                
        </div>
    </section>
    </main>
  )
}

export default AboutUs;
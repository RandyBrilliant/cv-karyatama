import PageLayout from '../components/PageLayout';

import OfficeImage from '../assets/img/office.jpg';
import ProductImage from '../assets/img/1.jpg';
import VisionImage from '../assets/icons/vision.svg';
import MissionImage from '../assets/icons/mission.svg';
import CheckmarkImage from '../assets/icons/checkmark.svg';

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
      <PageLayout>
        <div className="py-20 space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <img
              src={OfficeImage}
              alt="image"
              loading="lazy"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-red-700 text-3xl sm:text-4xl font-bold">
              Profil Perusahaan
            </h2>
            <h3 className="text-lg sm:text-xl font-medium italic">CV. Karyatama Agro Cemerlang</h3>
            <p className="my-8 text-gray-800">
              CV. Karyatama Agro Cemerlang merupakan perusahaan yang terletak di provinsi Sumatera Utara tepatnya di kota Medan yang telah berdiri sejak tahun 2021. Kami menyediakan berbagai pelayanan seperti di bidang pelayanan jasa pabrikasi, reparasi serta pengadaan spare parts untuk memenuhi kebutuhan klien kami.
            </p>
            <div className="divide-y space-y-4 divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-16 h-16 flex gap-4 rounded-full bg-red-700">
                  <img src={VisionImage} className="m-auto h-8 w-8" aria-hidden="true" />    
                </div>
                <div className="w-5/6">
                  <h3 className="font-bold text-xl text-red-500 uppercase">Visi</h3>
                  <p className="text-gray-800 italic">Menjadi kemitraan yang produktif, inovatif dan terpercaya.</p>
                </div> 
              </div> 
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-16 h-16 flex gap-4 rounded-full bg-red-700">  
                  <img src={MissionImage} className="m-auto h-8 w-8" aria-hidden="true" />                                    
                </div>
                <div className="w-5/6">
                  <h3 className="font-bold text-xl text-red-500 uppercase">Misi</h3>
                  <ol className="text-gray-800 list-decimal list-inside italic">
                    <li>Mengutamakan pelayanan prima kepada mitra.</li>
                    <li>Menjalin kerjasama dengan para pihak dengan prinsip saling menguntungkan dan peningkatan nilai tambah.</li>
                  </ol>
                </div> 
              </div> 
            </div>
          </div>
        </div>
      </PageLayout>
      
      <section className="bg-about-us-bg py-16 bg-fixed bg-center bg-cover">
        <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
          <h2 className="mb-8 text-4xl font-bold text-white md:text-4xl">
            Your money in your hands, but safe.
          </h2>
          <a
            href="#"
            className="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative text-base font-semibold text-purple-600"
              >Create an Account now</span
            >
          </a>
        </div>
      </section>
                                    
      <PageLayout>
        <div className="py-20 space-y-6 md:flex flex-row md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <img
              src={ProductImage}
              alt="image"
              loading="lazy"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-red-700 text-3xl sm:text-4xl font-bold">
              Klien Kami
            </h2>
            <p className="my-5 text-gray-800">
              Kami telah dipercaya oleh banyak perusahaan besar dalam menyediakan produk serta layanan terbaik. Pengalaman kami sudah teruji melalui beberapa klien dibawah ini yang telah menjadi mitra kami selama bertahun-tahun. Beberapa diantaranya seperti:
            </p>
            <ul className="text-gray-800 list-inside font-semibold space-y-1">
              <li><img src={CheckmarkImage} alt="Checkmark" className="w-6 h-6 mr-2 inline" />PT. Karya Tanah Subur</li>
              <li><img src={CheckmarkImage} alt="Checkmark" className="w-6 h-6 mr-2 inline" />PT. Surya Panen Subur</li>
              <li><img src={CheckmarkImage} alt="Checkmark" className="w-6 h-6 mr-2 inline" />PT. Perkebunan Limbah Bhakti</li>
              <li><img src={CheckmarkImage} alt="Checkmark" className="w-6 h-6 mr-2 inline" />PT. Kimia Tirta Utama</li>
              <li><img src={CheckmarkImage} alt="Checkmark" className="w-6 h-6 mr-2 inline" />PT. Eka Dura Indonesia</li>
              <li><img src={CheckmarkImage} alt="Checkmark" className="w-6 h-6 mr-2 inline" />PT. Sawit Asahan Indah</li>
              <li><img src={CheckmarkImage} alt="Checkmark" className="w-6 h-6 mr-2 inline" />PT. Sari Lembah Subur</li>
              <li><img src={CheckmarkImage} alt="Checkmark" className="w-6 h-6 mr-2 inline" />PT. Tunggal Perkasa Plantation</li>
              <li><img src={CheckmarkImage} alt="Checkmark" className="w-6 h-6 mr-2 inline" />PT. Sari Aditya Loka</li>
            </ul>
          </div>
        </div>
      </PageLayout>
    </main>
  )
}

export default AboutUs;
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";


import LogoWhite from '../assets/logo-white.png';

import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import PageLayout from "../components/PageLayout";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>CV. Karyatama Agro Cemerlang</title>
        <meta
          name="description"
          content="Kami menyediakan berbagai jasa di bidang pabrikasi, reparasi serta spare parts untuk alat-alat berat, suku cadang, dan peralatan industri untuk memenuhi kebutuhan anda."
        />
      </Helmet>
      <Carousel />
      <PageLayout>
        <section className="text-gray-600 py-10">
          <div className="bg-red-700 lg:p-16 rounded-lg space-y-6 md:flex md:gap-6 justify-center md:space-y-0 items-center">
            <div className="md:5/12 lg:w-1/2">
              <img
                src={LogoWhite}
                className="px-5 py-5 w-2/3 mx-auto rounded-full"
                alt="Kantor CV. Karyatama Agro Cemerlang"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left px-5 md:pt-5 pb-5 md:7/12 lg:w-1/2 text-white">
              <h2 className="font-display text-3xl font-bold lg:text-4xl">
                Tentang Kami
              </h2>
              <p className="text-sm lg:text-base my-4 lg:my-8">
                <strong>CV. Karyatama Agro Cemerlang</strong> adalah perusahaan yang terletak di provinsi Sumatera Utara tepatnya di kota Medan yang telah berdiri sejak tahun 2021. Kami menyediakan berbagai pelayanan seperti di bidang jasa pabrikasi, reparasi serta pengadaan spare parts untuk memenuhi kebutuhan mitra kami...
              </p>
              <Link
                  to="/tentang-kami"
                  className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-gray-800 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">Baca Selengkapnya</span>
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
      <ProductList />
    </main>
  )
}

export default Home;
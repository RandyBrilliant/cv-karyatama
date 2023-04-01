import { Link } from "react-router-dom";

import OfficeImage from '../assets/img/office.jpg';

// import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import PageLayout from "../components/PageLayout";

const Home = () => {
  return (
    <>
      <Hero />
      <PageLayout>
        <div className="m-auto text-gray-600 py-10">
          <div className="bg-red-700 lg:p-16 rounded-lg space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2">
              <img
                src={OfficeImage}
                className="rounded-lg"
                alt="Kantor CV. Karyatama Agro Cemerlang"
                loading="lazy"
              />
            </div>
            <div className="px-5 pt-5 pb-10 md:7/12 lg:w-1/2 text-white">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Tentang Kami
              </h2>
              <p className="my-8">
                <strong>CV. Karyatama Agro Cemerlang</strong> merupakan perusahaan yang terletak di provinsi Sumatera Utara tepatnya di kota Medan yang telah berdiri sejak tahun 2021. Kami menyediakan berbagai pelayanan seperti di bidang pelayanan jasa pabrikasi, reparasi serta pengadaan spare parts untuk memenuhi kebutuhan mitra kami...
              </p>
              <Link
                  to="/tentang-kami"
                  className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-gray-800 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">Baca Selengkapnya</span>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
      <ProductList />
      {/* <CallToAction /> */}
    </>
  )
}

export default Home;
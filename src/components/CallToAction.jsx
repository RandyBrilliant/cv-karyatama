import { Link } from 'react-router-dom';

import Pabrikasi1 from '../assets/img/pabrikasi-1.jpg';
import Pabrikasi2 from '../assets/img/pabrikasi-2.jpg';
import Pabrikasi3 from '../assets/img/pabrikasi-3.jpg';
import Image1 from '../assets/img/1.jpg';
import Image2 from '../assets/img/2.jpg';
import Image3 from '../assets/img/3.jpg';
import Image5 from '../assets/img/5.jpg';
import Image6 from '../assets/img/6.jpg';
import Image7 from '../assets/img/7.jpg';

const CallToAction = () => {
  return (
<div className="relative overflow-hidden bg-white mt-10 mb-10">
  <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Dapatkan Penawaran Terbaik!</h2>
        <p className="mt-4 text-xl text-gray-500">Konsultasikan dengan staf kami untuk mendapatkan penawaran terbaik untuk kebutuhan anda!</p>
      </div>
      <div>
        <div className="mt-10">
          <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img src={Pabrikasi1} alt="Pabrikasi" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={Image1} alt="" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={Pabrikasi2} alt="" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={Image6} alt="" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={Image5} alt="" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={Pabrikasi3} alt="" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                    <img src={Image3} alt="" className="h-full w-full object-cover object-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/hubungi-kami" className="rounded-full inline-block border border-transparent bg-red-600 px-8 py-3 text-center font-medium text-white hover:bg-red-700">Hubungi Kami Sekarang</Link>
        </div>
      </div>
    </div>
  </div>
</div>                              
  )
}

export default CallToAction
import {Helmet} from "react-helmet";
import Zoom from 'react-medium-image-zoom';
import ReactPlayer from 'react-player';

import VideoReparasi from '../assets/video/video-reparasi.mp4';
import VideoExhaustEngine from '../assets/video/video-exhaust-engine.mp4';


import { reparasi } from '../utils/data';

import 'react-medium-image-zoom/dist/styles.css';

const Reparasi = () => {
  return (
    <main>
      <Helmet>
        <title>Reparasi | CV. Karyatama Agro Cemerlang</title>
        <meta
          name="description"
          content="Kami menyediakan jasa reparasi sebagai penunjang untuk kebutuhan peralatan pabrik dan alat berat."
        />
      </Helmet>
      <section className="relative min-h-[400px] flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video className="min-w-full min-h-full absolute object-cover" src={VideoReparasi} type="video/mp4" autoPlay muted loop></video>
        </div>
        <div className="video-content">
          <h1 className="font-display md:text-5xl text-4xl font-bold leading-tight my-5 capitalize font-primary text-white">Reparasi</h1>
          <p className="text-xl font-secondary mb-5 text-gray-300">
            Kami menyediakan jasa reparasi sebagai penunjang untuk kebutuhan peralatan pabrik dan alat berat.
          </p>
        </div>
      </section>
      {reparasi.map(item => (
        <section id={item.name} key={item.name} className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-8 sm:px-6 lg:py-16 lg:max-w-7xl lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{item.name}</h2>
            <p className="mt-4 text-md text-gray-800">
              {item.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            {item.images.map((image, i) =>
            (
              <Zoom>
                <img
                  key={i}
                  src={`../${image}`}
                  alt={item.name}
                  className="rounded-lg bg-gray-100"
                />
              </Zoom>
            ))}
          </div>
        </section>
      ))}
      <section className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-8 sm:px-6 lg:py-16 lg:max-w-7xl lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Exhaust Engine</h2>
          <p className="mt-4 text-md text-gray-800">
            Proses reparasi Exhaust Engine.
          </p>
        </div>
        <div>
          <ReactPlayer url={VideoExhaustEngine} controls width={"100%"} />
        </div>
      </section>
    </main>
  )
}

export default Reparasi;
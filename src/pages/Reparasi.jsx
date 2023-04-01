import VideoReparasi from '../assets/video/video-reparasi.mp4'

const Reparasi = () => {
  return (
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
  )
}

export default Reparasi;
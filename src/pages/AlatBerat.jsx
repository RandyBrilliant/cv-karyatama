import { sparePartAlatBerat } from '../utils/data';
import CheckmarkImage from '../assets/icons/checkmark.svg';

const AlatBerat = () => {
  return (
    <main>
      <section id="hero" className="h-[400px] bg-alat-berat bg-center bg-cover bg-no-repeat text-center">
        <div className="mx-auto flex justify-center items-center backdrop-brightness-50 h-full min-w-full w-full">
          <div className="mx-10">
            <h1 className="md:text-5xl text-4xl font-bold leading-tight my-5 capitalize font-primary text-white">Spare Parts Alat Berat</h1>
            <p className="text-xl font-secondary mb-5 text-gray-300">
              Kami menyediakan beragam spare parts untuk kebutuhan alat berat. 
            </p>
          </div>
        </div>
      </section>
      {sparePartAlatBerat.map(item => (
        <section id={item.name} key={item.name} className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-8 sm:px-6 lg:py-16 lg:max-w-7xl lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{item.name}</h2>
            <p className="mt-4 text-md text-gray-800">
              {item.description}
            </p>
            <ul className="mt-8 grid grid-cols-1 text-gray-800 list-inside font-semibold space-y-1">
              {item.products.map((product, i) => (
                <li key={i}><img src={CheckmarkImage} alt="Checkmark" className="w-6 h-6 mr-2 inline" />{product}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            {item.images.map((image, i) =>
            (
              <img
                key={i}
                src={`../${image}`}
                alt={item.name}
                className="rounded-lg bg-gray-100"
              />
            ))}
          </div>
        </section>
        ))}
      
    </main>
  )
}

export default AlatBerat;
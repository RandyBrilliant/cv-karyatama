import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const Error = () => {
    return (
      <PageLayout>
        <main className="h-screen grid min-h-full place-items-center text-center">
          <div>
            <p className="text-base font-semibold text-red-600">404 Not Found</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Halaman Tidak Ditemukan</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Maaf, kami tidak dapat mencari halaman yang hendak kamu buka.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kembali ke Beranda
              </Link>
              <Link to="/hubungi-kami" className="text-sm font-semibold text-gray-900">
                Hubungi Kami <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </PageLayout>
    )
}

export default Error;
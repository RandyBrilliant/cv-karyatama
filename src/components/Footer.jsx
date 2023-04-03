import { navigation } from '../utils/data';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

import LogoImageWhite from '../assets/logo-white.png';

const Footer = () => {
  return (
  <footer className="w-full bg-slate-900 py-16">
    <PageLayout>
      <div className="space-y-6 text-gray-200">
        <img src={LogoImageWhite} alt="CV. Karyatama Agro Cemerlang" className="w-32 m-auto" />
        <h2 className="text-center text-2xl font-bold">CV. Karyatama Agro Cemerlang</h2>
        <ul
          role="list"
          className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
        >
          {navigation.map((item, i) => (
            <li role="listitem" key={i}>
              <Link to={`/${item.href}`} className="hover:text-gray-500">{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="m-auto flex w-max items-center justify-between space-x-4">
          <a href="tel:+62616611987" aria-label="call">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="m-auto w-5 hover:fill-gray-500"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              ></path>
            </svg>
          </a>
          <a href="mailto:admin@cvkaryatama.com" aria-label="send mail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="m-auto w-5 hover:fill-gray-500"
              viewBox="0 0 16 16"
            >
              <path
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="text-center">
          <span className="text-sm tracking-wide">Copyright © CV. Karyatama Agro Cemerlang <span id="year">2023</span> | All right reserved.</span>
        </div>
      </div>
    </PageLayout>
  </footer>                            
  )
}

export default Footer
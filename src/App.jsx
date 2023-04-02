import { Routes, Route } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Pabrikasi from './pages/Pabrikasi';
import Reparasi from './pages/Reparasi';
import SpareParts from './pages/SpareParts';
import Error from './pages/Error';
import Contact from './pages/Contact';
import AlatBerat from './pages/AlatBerat';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './hooks/ScrollToTop';
import Otomotif from './pages/Otomotif';
import SparePartsLainnya from './pages/SparePartsLainnya';

import CSImage from './assets/img/cs.jpg';

const App = () => {
  return (
    <ScrollToTop>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<AboutUs />} />
        <Route path="/pabrikasi" element={<Pabrikasi />} />
        <Route path="/reparasi" element={<Reparasi />} />
        <Route path="/spare-parts" element={<SpareParts />} />
        <Route path="/spare-parts/alat-berat" element={<AlatBerat />} />
        <Route path="/spare-parts/otomotif" element={<Otomotif />} />
        <Route path="/spare-parts/lainnya" element={<SparePartsLainnya />} />
        <Route path="/hubungi-kami" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp
        phoneNumber="62616611987"
        accountName="CV. Karyatama Agro Cemerlang"
        statusMessage="Typically replies within 5 minutes"
        chatMessage={"Halo! 🤝 \nAda yang bisa kami bantu?"}
        chatboxHeight={420}
        avatar={CSImage}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </ScrollToTop>
  )
}

export default App

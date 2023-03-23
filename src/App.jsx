import { Routes, Route } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<AboutUs />} />
        <Route path="/produk" element={<Products />} />
        <Route path="/hubungi-kami" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp
        phoneNumber="62616611987"
        accountName="CV. Karyatama Agro Cemerlang"
        statusMessage="Typically replies within 5 minutes"
        chatMessage={"Halo! 🤝 \nApakah ada yang bisa kami bantu?"}
        chatboxHeight={420}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  )
}

export default App

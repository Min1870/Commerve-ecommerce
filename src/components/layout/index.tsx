import Navbar from "./Navbar.tsx";
import Footer from './Footer.tsx';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.tsx';

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
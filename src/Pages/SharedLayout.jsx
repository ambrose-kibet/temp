import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from '../Components';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;

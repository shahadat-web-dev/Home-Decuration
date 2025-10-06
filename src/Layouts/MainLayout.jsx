
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <div className='max-w-screen-xl w-full px-4 md:px-8 lg:px-12  py-4 md:py-8 lg:py-12  mx-auto flex-1'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
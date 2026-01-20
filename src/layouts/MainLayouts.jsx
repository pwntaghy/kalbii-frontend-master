import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen text-white">


      <Navbar />


      <main className="w-full">
        {children}
      </main>
      <Footer />

    </div>
  );
};

export default MainLayout;
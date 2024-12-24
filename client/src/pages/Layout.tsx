import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="flex-1 py-8 bg-white">
        <div className="container mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

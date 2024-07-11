import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-black">
    <Header />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </div>
);

export default Layout;

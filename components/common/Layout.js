import Footer from "./FooterComp";
import Header from "./HeaderComp";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

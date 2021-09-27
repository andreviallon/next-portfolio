import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
};

export default Layout;

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>My URLs</Link> {"||"}
        <Link to={"/Features"}>Features</Link> {"||"}
        <Link to={"/Pricing"}>Pricing</Link> {"||"}
        <Link to={"/Analytics"}>Analytics</Link> {"||"}
        <Link to={"/Faqs"}>FAQs</Link>
      </nav>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>My URLs</Link> {"||"}
        <Link to={"/Login"}>Login</Link> {"||"}
        <Link to={"/Signup"}>Signup</Link> {"||"}
        <Link to={"/Analytics"}>Analytics</Link> {"||"}
        <Link to={"/Faqs"}>FAQs</Link>
      </nav>
    </div>
  );
};

export default Navbar;

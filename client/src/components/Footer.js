import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p> Copyright &copy;</p>
      <Link to="About">About</Link>
    </div>
  );
}

export default Footer;

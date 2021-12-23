// Parameter that function take is props. Props is just an object so instead of doing this
// const Header = (props)
// <h1>{props.title}</h1>
// Can just destructure it
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      {/* Can do style like this inside opening h1 style={{ color: 'red', backgroundColor: 'black' }}  */}
      {/* style={headingStyle} */}
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// Define prop types
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS styling in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;

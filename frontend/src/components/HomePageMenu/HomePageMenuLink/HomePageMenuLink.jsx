import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomePageMenuLink({ to, type, className, label }) {
  return (
    <Link to={to} type={type} className={className}>
      {label}
    </Link>
  );
}

HomePageMenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default HomePageMenuLink;

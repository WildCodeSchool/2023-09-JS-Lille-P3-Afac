import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

function AnimationButton({ url, className, animationClassName, animation }) {
  const [zoom, setZoom] = useState(false);
  const navigate = useNavigate();
  const handleZoom = () => {
    setZoom(true);
  };

  useEffect(() => {
    if (zoom) {
      setTimeout(() => {
        navigate(url);
      }, 4000);
    }
  }, [zoom]);

  return (
    <button
      type="button"
      aria-label="bouton pour zoomer sur les tableaux"
      className={`${className}  ${zoom ? animationClassName : ""}${
        animation ? "hidden" : ""
      }`}
      onClick={handleZoom}
    >
      .
    </button>
  );
}

AnimationButton.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  animationClassName: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};

export default AnimationButton;

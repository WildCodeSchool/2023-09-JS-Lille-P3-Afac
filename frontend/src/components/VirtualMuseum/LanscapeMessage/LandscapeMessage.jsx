import "./LandscapeMessage.scss";
import PropTypes from "prop-types";

function LandscapeMessage({ messageHidden }) {
  return (
    <article className={`landscape__wrapper ${messageHidden}`}>
      <img
        className="landscape__portrait"
        src="src/assets/rotatephone.png"
        alt="mode portrait à paysage"
      />
      <p className="landscape__sign">⚠</p>
      <p className="landscape__portrait_message">
        Ce site Web ne peut être consulté qu'en mode paysage, merci de basculer
        votre écran.
      </p>
    </article>
  );
}

LandscapeMessage.propTypes = {
  messageHidden: PropTypes.string.isRequired,
};

export default LandscapeMessage;

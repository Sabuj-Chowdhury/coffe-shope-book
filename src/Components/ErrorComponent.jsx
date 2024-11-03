import PropTypes from "prop-types";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorComponent = ({ message }) => {
  return (
    <div style={styles.container}>
      <FaExclamationTriangle style={styles.icon} />
      <div style={styles.textContainer}>
        <h2 style={styles.title}>Oops! Something went wrong.</h2>
        <p style={styles.message}>
          {message || "An unexpected error occurred. Please try again later."}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#ffe6e6",
    border: "1px solid #ff4d4d",
    borderRadius: "8px",
    color: "#ff4d4d",
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "1rem auto",
  },
  icon: {
    fontSize: "2rem",
    marginRight: "0.75rem",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.5rem",
    margin: "0",
  },
  message: {
    fontSize: "1rem",
    marginTop: "0.25rem",
  },
};

ErrorComponent.propTypes = {
  message: PropTypes.string,
};

export default ErrorComponent;

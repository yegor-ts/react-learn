import styles from "./ResetButton.module.css";

const ResetButton = ({ clear }: { clear: () => void }) => {
  return (
    <button className={styles.reset} type="button" onClick={clear}>
      Reset
    </button>
  );
};

export default ResetButton;

const ResetButton = ({ clear }: { clear: () => void }) => {
  return (
    <button className={"reset"} type="button" onClick={clear}>
      Reset
    </button>
  );
};

export default ResetButton;

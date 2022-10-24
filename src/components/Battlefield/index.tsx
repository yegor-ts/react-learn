interface CellProps {
  value: number;
  handleClick: (x: number, y: number) => void;
  x: number;
  y: number;
}

const cellState = ["", "", "🌊", "🚢💥"];

const Cell = ({ handleClick, value, x, y }: CellProps) => {
  return (
    <button className={"cell"} onClick={() => handleClick(x, y)}>
      {cellState[value]}
    </button>
  );
};

interface BattlefieldProps {
  matrix: number[][];
  onFire: (x: number, y: number) => void;
}

const Battlefield = ({ matrix, onFire }: BattlefieldProps) => {
  return (
    <div className={"container"}>
      {matrix.map((row, i) => (
        <div className={"row"} key={i}>
          {row.map((value, index) => (
            <Cell
              key={`${i}${index}`}
              value={value}
              x={i}
              y={index}
              handleClick={onFire}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Battlefield;

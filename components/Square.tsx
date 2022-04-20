import React from "react";
type Player = "X" | "O" | null;
const Square = ({
  value,
  onClick,
  winner,
}: {
  value: string | null;
  onClick: () => void;
  winner: string | null;
}) => {
  if (!value) {
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
      {value}
    </button>
  );
};

export default Square;

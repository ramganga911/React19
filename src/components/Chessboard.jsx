import React, { useState } from "react";
import "../Chessboard.css";

const Chessboard = () => {
  const [hovered, setHovered] = useState({ row: -1, col: -1 });

  // Checks if a square is on the same diagonal (bishop attack)
  const isDiagonal = (i, j) => {
    return (
      Math.abs(i - hovered.row) === Math.abs(j - hovered.col) &&
      !(i === hovered.row && j === hovered.col)
    );
  };

  return (
    <div className="chessboard">
      {Array.from({ length: 8 }).map((_, row) => (
        <div key={row} className="row">
          {Array.from({ length: 8 }).map((_, col) => {
            // Default color: black and white squares
            let className =
              (row + col) % 2 === 0 ? "square white" : "square black";

            // Hovered square
            if (row === hovered.row && col === hovered.col) {
              className = "square hover-light";
            }
            // Diagonal (bishop attack)
            else if (isDiagonal(row, col)) {
              className = "square hover-dark";
            }

            return (
              <div
                key={col}
                className={className}
                onMouseEnter={() => setHovered({ row, col })}
                onMouseLeave={() => setHovered({ row: -1, col: -1 })}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Chessboard;

// Add Grid, GridCell, GridPosition, GridSize

import React from "react";

export type GridPosition = {
  row: number;
  col: number;
};

type GridCellProps = {
  pos: GridPosition;
};

export function GridCell({
  pos,
  children,
}: React.PropsWithChildren<GridCellProps>) {
  return (
    <div
      style={{
        gridRow: pos.row,
        gridColumn: pos.col,
      }}
    >
      {children}
    </div>
  );
}

type GridProps = {
  cellSize: string;
};

export function Grid({
  cellSize,
  children,
}: React.PropsWithChildren<GridProps>) {
  return (
    <div
      style={{
        display: "grid",
        gridAutoRows: cellSize,
        gridAutoColumns: cellSize,
      }}
    >
      {children}
    </div>
  );
}

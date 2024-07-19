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
};

export function Grid({
  children,
}: React.PropsWithChildren<GridProps>) {
  return (
    <div
      style={{
        display: "grid",
      }}
      className="grid"
    >
      {children}
    </div>
  );
}

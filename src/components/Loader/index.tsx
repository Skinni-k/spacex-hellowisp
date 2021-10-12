import { ReactElement } from "react";
import { LinearProgress } from "@material-ui/core";
import { GridOverlay } from "@mui/x-data-grid";

export const LoadingOverlay = (): ReactElement => {
  return (
    <GridOverlay data-testid="grid-ovelay-loader">
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
};

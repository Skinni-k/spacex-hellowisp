import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme) => ({
  displayFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pageContainer: {
    height: "100vh",
  },
  container: {
    width: 600,
    height: 300,
    backgroundColor: "white",
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  code: {
    padding: "1rem",
  },
  divider: {
    height: 50,
    border: "2px solid #000",
    borderRadius: 10,
  },
  message: {
    padding: "1rem",
    fontSize: "1rem",
    fontWeight: 600,
  },
}));

export const FourOhFour = (): ReactElement => {
  const classes = useStyles();
  return (
    <div
      data-testid="page-container"
      className={`${classes.pageContainer} ${classes.displayFlex}`}
    >
      <div
        data-testid="container"
        className={`${classes.container} ${classes.displayFlex}`}
      >
        <Typography
          data-testid="error-code"
          variant="h3"
          className={classes.code}
        >
          404
        </Typography>
        <div data-testid="divider" className={classes.divider}></div>
        <Typography
          data-testid="error-message"
          variant="subtitle2"
          className={classes.message}
        >
          OOPS! Page not found
        </Typography>
      </div>
    </div>
  );
};

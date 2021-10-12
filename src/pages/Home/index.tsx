import { ReactElement } from "react";
import { makeStyles } from "@material-ui/styles";

import { LaunchesGrid } from "../../components";
import spacex from "../../assets/spacex.svg";

const useStyles = makeStyles(() => ({
  base: {
    padding: "0 5rem",
  },
  logoContainer: {
    padding: "2rem 0",
  },
  logo: {
    width: "15%",
  },
  gridRoot: {
    borderRadius: 10,
    backgroundColor: "white",
  },
}));

export const Home = (): ReactElement => {
  const classes = useStyles();
  return (
    <div data-testid="homepage-base" className={classes.base}>
      <div className={classes.logoContainer}>
        <img
          data-testid="logo"
          src={spacex}
          alt="spacex-logo"
          className={classes.logo}
        />
      </div>
      <div data-testid="grid-root" className={classes.gridRoot}>
        <LaunchesGrid />
      </div>
    </div>
  );
};
